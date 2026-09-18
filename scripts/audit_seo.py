"""Check indexable pages, metadata, and the sitemap without external packages."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://neocyclopedia.sameerion.com'


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ''
        self.in_title = False
        self.meta = {}
        self.links = []
        self.images = []
        self.headings = []
        self.schemas = 0
        self.schema_errors = []
        self.schema_text = None
        self.lang = ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.lang = attrs.get('lang', '')
        elif tag == 'title':
            self.in_title = True
        elif tag == 'meta':
            key = attrs.get('name') or attrs.get('property')
            if key:
                self.meta[key.lower()] = attrs.get('content', '')
        elif tag == 'link':
            self.links.append(attrs)
        elif tag == 'a':
            self.links.append(attrs)
        elif tag == 'img':
            self.images.append(attrs)
        elif tag in ('h1', 'h2', 'h3'):
            self.headings.append(tag)
        elif tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schemas += 1
            self.schema_text = ''

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'script' and self.schema_text is not None:
            try:
                json.loads(self.schema_text)
            except json.JSONDecodeError as exc:
                self.schema_errors.append(str(exc))
            self.schema_text = None

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.schema_text is not None:
            self.schema_text += data


def parse(path):
    page = Page()
    page.feed(path.read_text(encoding='utf-8-sig'))
    return page


def main():
    pages = {p.relative_to(ROOT).as_posix(): parse(p) for p in ROOT.rglob('*.html')}
    indexable = {name: page for name, page in pages.items() if 'noindex' not in page.meta.get('robots', '').lower()}
    sitemap = ET.parse(ROOT / 'sitemap.xml').getroot()
    urls = [node.text for node in sitemap.findall('.//{*}loc')]
    issues = []
    titles = Counter(page.title for page in indexable.values())
    for name, page in indexable.items():
        expected = BASE + ('/' if name == 'index.html' else '/' + name)
        canonical = next((link.get('href', '') for link in page.links if link.get('rel') == 'canonical'), '')
        if not page.title or titles[page.title] > 1:
            issues.append(f'{name}: missing or duplicate title')
        if not page.meta.get('description'):
            issues.append(f'{name}: missing description')
        if canonical != expected:
            issues.append(f'{name}: canonical mismatch ({canonical})')
        if expected not in urls:
            issues.append(f'{name}: absent from sitemap')
        if not page.lang:
            issues.append(f'{name}: missing html lang')
        if page.headings.count('h1') != 1:
            issues.append(f'{name}: expected one h1, found {page.headings.count("h1")}')
        if not page.schemas:
            issues.append(f'{name}: missing structured data')
        if page.schema_errors:
            issues.append(f'{name}: invalid structured data: {page.schema_errors[0]}')
        if not page.meta.get('og:image'):
            issues.append(f'{name}: missing social preview image')
        elif page.meta['og:image'].startswith(BASE + '/'):
            preview = ROOT / page.meta['og:image'].removeprefix(BASE + '/')
            if not preview.exists():
                issues.append(f'{name}: social preview image missing locally')
        if page.meta.get('og:url') != expected:
            issues.append(f'{name}: social URL mismatch')
        for image in page.images:
            if 'alt' not in image:
                issues.append(f'{name}: image missing alt ({image.get("src", "")[:80]})')
        for link in page.links:
            href = link.get('href', '')
            if not href or href.startswith(('#', 'http:', 'https:', 'mailto:', 'tel:')):
                continue
            target = (ROOT / name).parent / urlparse(href).path
            if not target.exists():
                issues.append(f'{name}: broken local link {href}')
    for url in urls:
        local = 'index.html' if url == BASE + '/' else url.removeprefix(BASE + '/')
        if local not in indexable:
            issues.append(f'sitemap: nonindexable or missing URL {url}')
    print(f'{len(pages)} HTML pages; {len(indexable)} indexable; {len(pages)-len(indexable)} noindex; {len(urls)} sitemap URLs')
    for issue in issues:
        print(issue)
    return 1 if issues else 0


if __name__ == '__main__':
    raise SystemExit(main())
