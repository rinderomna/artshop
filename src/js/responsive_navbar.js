// Menu responsivo
"use strict";

function toggleResponsiveMenu() {
    let x = document.getElementById("homeNavBar");

    if (x.className === "homeNavBar") { // Habilitar menu
        x.className += " responsive";
    } else { // Desabilitar menu
        x.className = "homeNavBar";
    }
}
