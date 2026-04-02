/**
 * theme.js — shared theme logic for all Neocyclopedia pages.
 * Handles: initial theme load, OS preference fallback, toggle button, copyright year.
 */
(function () {

  function applyTheme(mode) {
    const isDark = mode === "dark";
    document.body.classList.toggle("dark",  isDark);
    document.body.classList.toggle("light", !isDark);

    // main timeline table (index.html only)
    const table = document.getElementById("eventTable");
    if (table) table.classList.toggle("table-dark", isDark);

    localStorage.setItem("themePreference", mode);
  }

  document.addEventListener("DOMContentLoaded", function () {

    // Copyright year
    const cprtxt = document.getElementById("cprtxt");
    if (cprtxt) cprtxt.textContent = new Date().getFullYear();

    // Load theme — respect OS preference if user hasn't overridden
    const saved      = localStorage.getItem("themePreference");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (systemDark ? "dark" : "light"));

    // Toggle button
    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const next = document.body.classList.contains("dark") ? "light" : "dark";
        applyTheme(next);
      });
    }

  });

})();
