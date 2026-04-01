/**
 * events.js — Neocyclopedia event data.
 *
 * DATA RULES:
 * - flags: a., l., t. (lowercase + period). Show BEFORE the date. Example: "l.t. 1200 BC"
 * - Multiple flags allowed; order doesn't matter visually; we keep your order.
 * - NO 'c' flag.
 * - Region modern names must render in [square brackets] (auto-converted from "(...)").
 */

    const events = [
      { flags: "a.", date: "c. 300000 BC", event: "Emergence of Homo sapiens", area: "Africa [Various regions]", url: "events/homosapiens.html" },

      { flags: "", date: "630 AD", event: "Conquest of Mecca", area: "Mecca, Arabian Peninsula [Saudi Arabia]", url: "events/conquestOfMecca.html" },

      { flags: "a.", date: "c. 1400 BC", event: "Assyrian state emerges as a regional empire", area: "Upper Mesopotamia [Iraq/Syria/Türkiye]", url: "events/assyrianEmpire.html" },

      { flags: "a.", date: "c. 1900 BC", event: "Old Babylonian state emerges under Amorite dynasties", area: "Babylon, Mesopotamia [Iraq]", url: "events/babylonianEmpire.html" },

      { flags: "t.", date: "516 BC", event: "Second Temple in Jerusalem completed under Cyrus' rule", area: "Jerusalem [Palestine]", url: "events/secondTempleConstruction.html" },

      { flags: "l.t.", date: "c. 13th c. BC", event: "Second Exodus tradition", area: "Egypt → Levant [Egypt/Palestine]", url: "events/secondExodus.html" },

      { flags: "a.", date: "c. 1917–1948 AD", event: "Israeli–Palestinian conflict emerges", area: "Palestine [Israel/Palestine]", url: "events/israeliPalestinianConflict.html" },

      { flags: "", date: "2001 AD", event: "September 11 attacks", area: "United States [New York/Washington, D.C./Pennsylvania]", url: "events/911.html" },

      { flags: "t.", date: "1981 AD", event: "IBM Personal Computer released", area: "United States", url: "events/ibmPC.html" },

      { flags: "t.", date: "2007 AD", event: "Apple iPhone introduced", area: "United States", url: "events/iphone.html" },

      { flags: "", date: "1757 AD", event: "Battle of Plassey", area: "Bengal Subah [Mughal Bengal]", url: "events/.html" },

      { flags: "", date: "732 AD", event: "Battle of Tours", area: "Tours, France", url: "events/.html" },

      { flags: "a.", date: "c. 3500–3000 BC", event: "Invention of the wheel", area: "Various regions", url: "events/wheelInvention.html" },

      { flags: "l.t.", date: "c. 600 BC", event: "Hanging Gardens of Babylon", area: "Babylon [Iraq]", url: "events/hangingGardens.html" },

      { flags: "", date: "224 AD", event: "Sasanian Empire established", area: "Persia [Iran]", url: "events/sassanianEmpire.html" },

      { flags: "a.", date: "c. 1235 AD", event: "Mali Empire founded", area: "West Africa", url: "events/maliEmpire.html" },

      { flags: "", date: "1324–1325 AD", event: "Mansa Musa’s pilgrimage (Hajj) to Mecca", area: "West Africa → Mecca [Saudi Arabia]", url: "events/mansaMusa.html" },

      { flags: "", date: "1994 AD", event: "End of apartheid", area: "South Africa", url: "events/endOfApartheid.html" },

      { flags: "", date: "1949 AD", event: "People’s Republic of China founded", area: "China", url: "events/china.html" },

      { flags: "", date: "629 AD", event: "Battle of Mu'tah", area: "Mu'tah [Jordan]", url: "events/battleOfMutah.html" },

      { flags: "", date: "634 AD", event: "Battle of Firaz", area: "Near the Euphrates River [Iraq/Syria]", url: "events/battleOfFiraz.html" },

      { flags: "a.", date: "c. 1650–1730 AD", event: "Golden Age of Piracy", area: "Caribbean Sea and Atlantic Ocean", url: "events/goldenOfPiracy.html" },

      { flags: "", date: "31 BC", event: "Battle of Actium", area: "Actium [Greece]", url: "events/battleOfActium.html" },

      { flags: "a.", date: "c. 1760 AD", event: "Start of the Industrial Revolution", area: "Great Britain [United Kingdom]", url: "events/industrialRevolution.html" },

      { flags: "", date: "1950–1953 AD", event: "Korean War", area: "Korean Peninsula [North Korea/South Korea]", url: "events/koreanWar.html" },

      { flags: "", date: "338 BC", event: "Philip II conquers Greece (Chaeronea)", area: "Ancient Greece [Greece]", url: "events/philipTwo.html" },

      { flags: "", date: "637 AD", event: "Conquest of Jerusalem under ʿUmar", area: "Jerusalem [Palestine]", url: "events/conquestOfJerusalem.html" },

      { flags: "a.", date: "c. 2600–2400 BC", event: "Building of Stonehenge", area: "Wiltshire [England]", url: "events/stonehenge.html" },

      { flags: "", date: "256 AD", event: "Siege of Dura-Europos", area: "Near Dura-Europos [Syria]", url: "events/battleOfDura.html" },

      { flags: "t.a.", date: "early 3rd c. BC", event: "Library of Alexandria established", area: "Alexandria, Ptolemaic Kingdom [Egypt]", url: "events/libraryOfAlexandria.html" },

      { flags: "a.", date: "c. 221 BC", event: "Great Wall fortifications consolidated", area: "Northern China", url: "events/greatWall.html" },

      { flags: "", date: "1346 AD", event: "Serbian Empire under Stefan Dušan", area: "Serbia", url: "events/serbianEmpire.html" },

      { flags: "", date: "1922 AD", event: "USSR formed", area: "Russia and other Soviet Republics", url: "events/ussr.html" },

      { flags: "a.", date: "286 AD", event: "Diocletian’s division with Maximian (East/West administration begins)", area: "Roman Empire", url: "events/splitOfRomanEmpire.html" },

      { flags: "", date: "322–321 BC", event: "Mauryan Empire founded", area: "Indian Subcontinent [India/Pakistan]", url: "events/mauryanEmpire.html" },

      { flags: "a.", date: "c. 2334 BC", event: "Akkadian Empire founded", area: "Mesopotamia [Iraq]", url: "events/akkadianEmpire.html" },

      { flags: "", date: "618 AD", event: "Tang Dynasty established", area: "China", url: "events/tangDynasty.html" },

      { flags: "", date: "960 AD", event: "Song Dynasty established", area: "China", url: "events/songDynasty.html" },

      { flags: "", date: "1947–1991 AD", event: "Cold War", area: "Global", url: "events/coldWar.html" },

      { flags: "", date: "1799–1815 AD", event: "Napoleon’s rule (Consulate/Empire)", area: "Europe", url: "events/napoleanBonaparte.html" },

      { flags: "", date: "1096–1291 AD", event: "The Crusades (Latin East campaigns)", area: "Middle East and Europe", url: "events/crusades.html" },

      { flags: "", date: "636 AD", event: "Battle of Yarmouk", area: "Yarmouk River region [Syria/Jordan]", url: "events/battleOfYarmouk.html" },

      { flags: "", date: "711 AD", event: "Battle of Guadalete", area: "Guadalete River, Iberian Peninsula [Spain]", url: "events/battleOfGuadalete.html" },

      { flags: "", date: "756 AD", event: "Emirate of Córdoba founded", area: "Al-Andalus [Spain/Portugal]", url: "events/cordobaEmirate.html" },

      { flags: "", date: "1238 AD", event: "Emirate of Granada founded", area: "Al-Andalus [Spain]", url: "events/granadaCaliphate.html" },

      { flags: "", date: "330 AD", event: "City of Constantinople founded", area: "Eastern Mediterranean, Constantinople [Istanbul, Türkiye]", url: "events/.html" },

      { flags: "", date: "509 BC", event: "Roman Republic established", area: "Ancient Rome [Italy]", url: "events/romans.html" },

      { flags: "", date: "44 BC", event: "Assassination of Julius Caesar", area: "Rome [Italy]", url: "events/julisCaesar.html" },

      { flags: "", date: "27 BC", event: "Augustus establishes the Roman Empire", area: "Ancient Rome [Italy]", url: "events/augustus.html" },

      { flags: "", date: "51–30 BC", event: "Cleopatra VII’s reign", area: "Egypt; Roman Republic/Empire [Egypt/Italy]", url: "events/cleopatra.html" },

      { flags: "", date: "305–30 BC", event: "Ptolemaic Dynasty", area: "Egypt", url: "events/ptolemaicDynasty.html" },

      { flags: "", date: "1526 AD", event: "Mughal Empire founded", area: "Indian Subcontinent [India/Pakistan]", url: "events/mughals.html" },

      { flags: "", date: "c. 320–550 AD", event: "Gupta Empire", area: "Indian Subcontinent [India/Bangladesh]", url: "events/guptaEmpire.html" },

      { flags: "", date: "1955–1975 AD", event: "Vietnam War", area: "Vietnam and Southeast Asia", url: "events/vietnamWars.html" },

      { flags: "", date: "1945 AD", event: "Atomic bombing of Hiroshima & Nagasaki", area: "Japan", url: "events/atomicBombing.html" },

      { flags: "", date: "1941 AD", event: "Pearl Harbor attack", area: "Pearl Harbor, Hawaii [USA]", url: "events/pearlHaborBombing.html" }, // (typo in file name retained if intentional)

      { flags: "", date: "1947 AD", event: "India’s independence", area: "Indian Subcontinent [India/Pakistan]", url: "events/indianIndependence.html" },

      { flags: "", date: "1945 AD", event: "Capture of Berlin by Allied forces", area: "Berlin [Germany]", url: "events/captureOfBerlin.html" },

      { flags: "", date: "1886 AD", event: "Statue of Liberty dedicated", area: "New York [USA]", url: "events/statueOfLiberty.html" },

      { flags: "", date: "1889 AD", event: "Eiffel Tower completed", area: "Paris [France]", url: "events/eiffelTower.html" },

      { flags: "", date: "1632–1648 AD", event: "Taj Mahal constructed", area: "Agra [India]", url: "events/tajMahal.html" },

      { flags: "", date: "1922–1931 AD", event: "Christ the Redeemer constructed", area: "Rio de Janeiro [Brazil]", url: "events/christTheRedeemer.html" },

      { flags: "", date: "72–80 AD", event: "Colosseum constructed", area: "Rome [Italy]", url: "events/colosseum.html" },

      { flags: "", date: "1279–1213 BC", event: "Reign of Ramesses II", area: "Ancient Egypt [Egypt]", url: "events/pharaohRamesses.html" },

      { flags: "", date: "1171 AD", event: "Ayyubid Dynasty founded by Ṣalāḥ ad-Dīn", area: "Middle East and North Africa [Egypt/Syria]", url: "events/ayyubids.html" },

      { flags: "", date: "1260 AD", event: "Battle of ʿAyn Jālūt", area: "Near ʿAyn Jālūt [Palestine]", url: "events/battleOfAinJalut.html" },

      { flags: "", date: "53 BC", event: "Battle of Carrhae", area: "Carrhae [Harran, Türkiye]", url: "events/battleOfCarrhae.html" },

      { flags: "", date: "58–50 BC", event: "Gallic Wars", area: "Gaul [France/Belgium]", url: "events/gallicWars.html" },

      // Fix: Chains ≠ Hunayn; keep Chains separately above; change this entry to Hunayn or delete.
      { flags: "", date: "630 AD", event: "Battle of Hunayn", area: "Hunayn, Arabian Peninsula [Saudi Arabia]", url: "events/battleOfHunayn.html" },

      { flags: "", date: "632–633 AD", event: "Ridda Wars", area: "Arabian Peninsula [Saudi Arabia]", url: "events/riddaWars.html" },

      { flags: "", date: "1453 AD", event: "Siege of Constantinople", area: "Constantinople [Istanbul, Türkiye]", url: "events/siegeOfConstantinople.html" },

      { flags: "", date: "1687 AD", event: "Siege of Golconda", area: "Golconda (Hyderabad) [India]", url: "events/siegeOfGolconda.html" },

      { flags: "", date: "632 AD", event: "Death of Prophet Muhammad", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/seerah.html" }, // fixed empty URL

      { flags: "", date: "632 AD", event: "Abu Bakr becomes first Caliph", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/abuBakr.html" },

      { flags: "", date: "634 AD", event: "ʿUmar ibn al-Khaṭṭāb becomes Caliph", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/umarIbnKhattab.html" },

      { flags: "", date: "644 AD", event: "ʿUthmān ibn ʿAffān becomes Caliph", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/uthmanIbnAffan.html" },

      { flags: "", date: "656 AD", event: "ʿAlī ibn Abī Ṭālib becomes Caliph", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/aliIbnTalib.html" },

      { flags: "", date: "750 AD", event: "Abbasid Caliphate established", area: "Baghdad [Iraq]", url: "events/abbasidCaliphate.html" },

      { flags: "", date: "661 AD", event: "Umayyad Caliphate begins", area: "Damascus [Syria]", url: "events/umayyadCaliphate.html" },

      { flags: "", date: "909 AD", event: "Fatimid Caliphate founded", area: "Ifriqiya [Tunisia/Algeria]", url: "events/fatimids.html" },

      { flags: "", date: "793 AD", event: "Viking raid on Lindisfarne", area: "Lindisfarne [England]", url: "events/vikings.html" },

      { flags: "", date: "865 AD", event: "Great Heathen Army invades England", area: "Various regions [England]", url: "events/vikings.html" },

      { flags: "", date: "1066 AD", event: "Norman Conquest (Battle of Hastings)", area: "Hastings [England]", url: "events/battleOfHastings.html" },

      { flags: "a.", date: "c. 882 AD", event: "Kievan Rus' consolidated under Oleg", area: "Kiev [Ukraine]", url: "events/kievanRus.html" },

      { flags: "", date: "927 AD", event: "Unification of England (Athelstan)", area: "Various regions [England]", url: "events/unificationOfEngland.html" },

      { flags: "t.", date: "570 AD", event: "Year of the Elephant", area: "Mecca, Arabian Peninsula [Saudi Arabia]", url: "events/amAlFeel.html" },

      { flags: "a.", date: "1162–1227 AD", event: "Life of Genghis Khan", area: "Mongolian steppes and beyond [Mongolia/China]", url: "events/chinggisKhan.html" },

      { flags: "", date: "1206 AD", event: "Mongol Empire established", area: "Central Asia and beyond", url: "events/mongols.html" },

      { flags: "a.", date: "c. 1260s AD", event: "Division of Mongol Empire into khanates", area: "Eurasia", url: "events/divisionOfMongolianEmpire.html" },

      { flags: "a.", date: "c. 11th–12th c. AD", event: "Seljuk Empire at its height", area: "Central Asia, Anatolia, Persia [Iran/Türkiye]", url: "events/seljukEmpire.html" },

      { flags: "", date: "1299 AD", event: "Rise of the Ottomans", area: "Anatolia [Türkiye]", url: "events/ottomans.html" },

      { flags: "", date: "1724–1948 AD", event: "Rule of the Nizams of Hyderabad", area: "Deccan [India]", url: "events/nizams.html" },

      { flags: "", date: "1600–1700 AD", event: "European trading companies establish footholds in Mughal India", area: "Mughal Empire (Bengal and coastal regions)", url: "events/eastIndiaCompany.html" },

      { flags: "", date: "1428–1521 AD", event: "Aztec Empire", area: "Central Mexico [Mexico]", url: "events/aztecs.html" },

      { flags: "a.", date: "c. 250–900 AD", event: "Classic Maya city-states flourish", area: "Mesoamerica [Mexico/Guatemala/Belize]", url: "events/mayanCiv.html" },

      { flags: "", date: "1438–1533 AD", event: "Inca Empire", area: "Andes region [Peru/Bolivia/Ecuador]", url: "events/inca.html" },

      { flags: "a.", date: "c. 2686–2181 BC", event: "Old Kingdom of Egypt", area: "Nile River Valley [Egypt]", url: "events/oldKingdomEgypt.html" },

      { flags: "a.", date: "c. 2600–1900 BC", event: "Indus Valley Civilization", area: "Indus River Valley [Pakistan/India]", url: "events/indusValley.html" },

      { flags: "", date: "1692 AD", event: "Salem witch trials", area: "Salem, Massachusetts [USA]", url: "events/salemWitchTrials.html" },

      { flags: "", date: "1991 AD", event: "Dissolution of the Soviet Union", area: "Eurasia", url: "events/ussrDissolution.html" },

      { flags: "", date: "627 AD", event: "Battle of the Trench (Confederates)", area: "Medina, Arabian Peninsula [Saudi Arabia]", url: "events/battleOfConfederates.html" },

      { flags: "", date: "570 AD", event: "Birth of Prophet Muhammad", area: "Mecca, Arabian Peninsula [Saudi Arabia]", url: "events/seerah.html" },

      { flags: "", date: "610 AD", event: "Beginning of Qur'anic revelation", area: "Hira Cave, Arabian Peninsula [Saudi Arabia]", url: "events/quranicRevelation.html" },

      { flags: "", date: "624 AD", event: "Battle of Badr", area: "Valley of Badr, Arabian Peninsula [Saudi Arabia]", url: "events/battleOfBadr.html" },

      { flags: "", date: "625 AD", event: "Battle of Uhud", area: "Mount Uhud, Arabian Peninsula [Saudi Arabia]", url: "events/battleOfUhud.html" },

      { flags: "", date: "431–404 BC", event: "Peloponnesian War", area: "Ancient Greece [Greece]", url: "events/peloponnesianWar.html" },

      { flags: "", date: "480 BC", event: "Battle of Thermopylae", area: "Thermopylae Pass [Greece]", url: "events/battleOfThermopylae.html" },

      { flags: "a.", date: "4 BC/ 1 AD", event: "Birth of Jesus (traditional range)", area: "Bethlehem, Judea [Palestine]", url: "events/birthOfJesus.html" },

      { flags: "a.", date: "c. 600–530 BC", event: "Life of Cyrus the Great", area: "Persian Empire [Iran]", url: "events/cyrusGreat.html" },

      { flags: "", date: "1479–1425 BC", event: "Reign of Thutmose III", area: "Ancient Egypt [Egypt]", url: "events/thutmoseThird.html" },

      { flags: "", date: "334 BC", event: "Alexander the Great invades Persia", area: "Achaemenid Empire [Iran/Iraq/Türkiye]", url: "events/alexander.html" },

      { flags: "", date: "331 BC", event: "Battle of Gaugamela", area: "Near Arbela [Iraq]", url: "events/battleOfGaugamela.html" },

      { flags: "", date: "331 BC", event: "Alexandria founded", area: "Alexandria [Egypt]", url: "events/alexandria.html" },

      { flags: "a.", date: "c. 3100 BC", event: "Development of Egyptian hieroglyphs", area: "Ancient Egypt [Egypt]", url: "events/egyptianHieroglyphs.html" },

      { flags: "a.", date: "c. 2580–2560 BC", event: "Great Pyramid of Giza constructed", area: "Giza [Egypt]", url: "events/egyptianHieroglyphs.html" },

      { flags: "", date: "c. 1754 BC", event: "Code of Hammurabi", area: "Babylon, Mesopotamia [Iraq]", url: "events/codeOfHammurabi.html" },

      { flags: "l.t.", date: "c. 1200 BC", event: "Trojan War", area: "Troy, Anatolia [Hisarlik, Türkiye]", url: "events/trojanWar.html" },

      { flags: "", date: "447–432 BC", event: "Parthenon constructed", area: "Athens [Greece]", url: "events/parthenon.html" },

      { flags: "", date: "221 BC", event: "Unification of China under Qin", area: "China", url: "events/qinDynasty.html" },

      { flags: "", date: "30 BC", event: "Egypt becomes a Roman province", area: "Egypt", url: "events/egyptRomanProvince.html" },

      { flags: "", date: "70 AD", event: "Destruction of the Second Temple", area: "Jerusalem [Palestine]", url: "events/secondTempleofJerusalem.html" },

      { flags: "", date: "313 AD", event: "Edict of Milan", area: "Milan [Italy]", url: "events/edictOfMilan.html" },

      { flags: "", date: "476 AD", event: "Fall of the Western Roman Empire", area: "Rome [Italy]", url: "events/fallOfRome.html" },

      { flags: "", date: "622 AD", event: "Hijra (Mecca → Medina)", area: "Arabian Peninsula [Saudi Arabia]", url: "events/hijra.html" },

      { flags: "", date: "793–1066 AD", event: "Viking Age in Europe", area: "Northern Europe", url: "events/vikings.html" },

      { flags: "", date: "1215 AD", event: "Magna Carta sealed", area: "Runnymede [England]", url: "events/magnaCarta.html" },

      { flags: "", date: "1347–1351 AD", event: "Black Death in Europe", area: "Europe", url: "events/blackDeath.html" },

      { flags: "", date: "1492 AD", event: "Columbus reaches the Americas", area: "Caribbean Islands", url: "events/christopherColumbus.html" },

      { flags: "", date: "1776 AD", event: "US Declaration of Independence", area: "Philadelphia, Pennsylvania [USA]", url: "events/independenceUSA.html" },

      { flags: "", date: "1789 AD", event: "French Revolution begins", area: "Paris [France]", url: "events/frenchRevolution.html" },

      { flags: "", date: "1914 AD", event: "Outbreak of World War I", area: "Worldwide", url: "events/wwOne.html" },

      { flags: "", date: "1939 AD", event: "Outbreak of World War II", area: "Worldwide", url: "events/wwTwo.html" },

      { flags: "", date: "1293 AD", event: "Majapahit Empire founded", area: "Eastern Java [Indonesia]", url: "events/majapahitEmpire.html" },

      { flags: "a.", date: "2019 AD", event: "COVID-19 outbreak detected", area: "Wuhan [China]", url: "events/covid19.html" },

      { flags: "", date: "1192 AD", event: "Kamakura shogunate established", area: "Japan", url: "events/shogunate.html" },

      { flags: "", date: "1603 AD", event: "Tokugawa shogunate unifies Japan", area: "Japan", url: "events/japaneseUnification.html" },

      { flags: "", date: "633 AD", event: "Battle of Chains", area: "Near Al-Ubulla [Iraq]", url: "events/battleOfChains.html" },


    ];
