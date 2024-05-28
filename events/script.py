html_content = """
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<meta charset="utf-8">
<!-- Icon Links -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
<!-- W3 schools CSS -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<!-- Original CSS -->
<link rel="stylesheet" type="text/css" href="../style.css">
  <title>Neocyclopedia</title>
</head>
<body class="light">
 
<!-- title -->
<div class="container">

<div class="logo text-center mt-4 mb-5">
    <h1><a href="../index.html"><span id="headerSpan" class="mh1-light">Neocyclopedia</span></a></h1>
</div>


 <!-- toggle button -->

<button class="theme-toggle" onclick="toggleTheme()">
    <i id="themeIcon" class="fas fa-sun"></i> <!-- Initially use sun icon for light theme -->
</button>


  <!-- Content -->

<div class="mt-5 mb-5">
  <h2>Heading</h2>
  <p class="exp">lorem ipsum dorem....</p>
</div>

</div>

  <!-- footer -->

<div class="footer text-center mt-5">
  <p class="mb-5 pb-5 ftrtxt"><span class="subtxt1">Neocyclopedia</span><span> x </span><a href="https://samineon.com" style="text-decoration: none;"><span class="subtxt2">Sami</span><span class="subtxt3">neon</span></a></p>
  <p>Copyright &copy; <span id="cprtxt" style="font-family: Arial, sans-serif;"></span> <span class="subtxt1">Neocyclopedia</span>. All rights reserved.</p>
</div>




  <!-- Scripts -->


<script>
  document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const copyrightYearElement = document.getElementById("cprtxt");
    
    if (copyrightYearElement) {
      copyrightYearElement.textContent = currentYear;
    }
  });
</script>

<!-- script to toggle themes -->

<script>
  // Function to toggle between light and dark themes
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light");
    body.classList.toggle("dark");

    // Toggle the class of the headerSpan
    const headerSpan = document.getElementById("headerSpan");
    headerSpan.classList.toggle("mh1-light");
    headerSpan.classList.toggle("mh1-dark");

    // Save the theme preference to localStorage
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("themePreference", currentTheme);
  }

  // Function to load the saved theme preference from localStorage
  function loadThemePreference() {
    const savedTheme = localStorage.getItem("themePreference");
    if (savedTheme === "dark") {
      toggleTheme(); // Switch to the dark theme if it was saved
    }
  }

  // Call the loadThemePreference function when the page loads
  window.addEventListener("load", loadThemePreference);

</script>

</body>
</html>
"""

file_names = ["homo Sapiens","sumerian","egyptian Hieroglyphs","wheel Invention","old Kingdom Egypt","indus Valley","stonehenge",
"pyramids Of Giza","akkadian Empire","mayan Civ","code Of Hammurabi", "thutmose Third","pharaoh Ramesses","trojan War","great Wall",
"celtic Civ","hanging Gardens","cyrus Great","romans","battle Of Thermopylae","parthenon","peloponnesian War","philip Second","alexander",
"battle Of Gaugamela","mauryan Empire","ptolemaic Dynasty","lirary Of Alexandria","city Of Alexandria","qin Dynasty","cleopatra",
"gallic Wars","battle Of Carrhae","battle of Actium","augustus","birth Of Jesus","colosseum", "second Temple of Jerusalem",
"sassanian Empire","gupta Empire","battle Of Dura","split Of Roman Empire","edict Of Milan","byzantine Empire","fall Of Rome","am Al Feel",
"quranic Revelation","tang Dynasty","hijra","battle Of Badr","battle Of Uhud","battle Of Confederates","battle Of Mutah","battle Of Hunayn",
"ridda Wars","abu Bakr","umar Ibn Khattab","battle Of Firaz","battle Of Yarmouk","uthman Ibn Affan","ali Ibn Talib","umayyad Caliphate",
"battle Of Guadalete","abbasid Caliphate","cordoba Emirate","vikings","kievan Rus","fatimids","song Dynasty","hungarians",
"unification Of England","battle Of Hastings","crusades","seljuk Empire","chinggis Khan","ayyubids","mongols","magna Carta",
"mali Empire","granada Caliphate","battle Of Ain Jalut","division Of Mongolian Empire","majapahit Empire","ottomons","mansa Musa",
"serbian Empire","black Death","aztecs","inca","siege Of Constantinople","mughals","east India Company","taj Mahal","golden Of Piracy",
"siege Of Golconda","salem Witch Trials","industrial Revolution","nizams","british Invasion Of India","napolean Bonaparte",
"independence USA","french Revolution","statue Of Liberty","eiffel Tower","ww One","ww Two","ussr","pearl Habor Bombing","atomic Bombing",
"capture Of Berlin","cold War","indian Independence","china","korean War","vietnam Wars", "ussr Dissolution","end Of Apartheid","covid 19"]  # List of file names

for name in file_names:
    file_name = name.replace(" ", "") + ".html"
    with open(file_name, "w") as f:
        f.write(html_content)
