function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.querySelector(".menu-icon");
    var closeIcon = document.querySelector(".close-icon");
  
    navLinks.classList.toggle("nav-active");
  
    // Add fade-in class to each list item with a delay
    var fadeDelay = 0.2;
    for (var i = 0; i < navLinks.children.length; i++) {
      if (navLinks.children[i].classList.contains("fade-in")) {
        navLinks.children[i].classList.remove("fade-in");
      } else {
        navLinks.children[i].style.transitionDelay = fadeDelay + "s";
        navLinks.children[i].classList.add("fade-in");
        fadeDelay += 0.2;
      }
    }
  
    // Change menu icon when clicked
    if (menuIcon.innerHTML === "&#9776;") {
      menuIcon.innerHTML = "&#10006;";
    } else {
      menuIcon.innerHTML = "&#9776;";
    }
  }
  