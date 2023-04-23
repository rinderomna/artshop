function toggleResponsiveMenu() {
    let x = document.getElementsByClassName("homeNavBar")[0];
    if (x.className === "homeNavBar") { // Habilitar menu
      x.className += " responsive";
    } else { // Desabilitar menu
      x.className = "homeNavBar";
    }
  } 