// NavBar com destaque laranja quando passa o mouse

"use strict";

let highlight = document.querySelector("#highlightNavBar");
let item = document.querySelectorAll("a.navLink");

function indicator(e, fastTransition) {
    // Para fazer transicao mais rapida para mouseover e mais lenta para mouseout
    highlight.style.transition = fastTransition ? "0.3s" : "1.2s";

    highlight.style.left = e.offsetLeft + "px";
    highlight.style.width = e.offsetWidth + "px";
    highlight.style.opacity = 0.7;
}

// Obtenha a URL atual da página
let currentUrl = window.location.href;

// Selecione todos os links de navegação
let navLinks = document.querySelectorAll('.navLink');

// Percorra cada link de navegação
navLinks.forEach(function(link) {
    // Verifique se o URL do link corresponde ao URL atual
    if (link.href === currentUrl) {
        // Adicione a classe 'active' ao link correspondente
        link.classList.add('active'); 
    }
});

item.forEach(link => {
    // Carregou pagina
    if (link.classList.contains("active")) {
        indicator(link, false); // Destaque primariamente esse link (que eh o atual)
    }

    // Quando usuario passar mouse na barra de menu
    link.addEventListener("mouseover", (e)=> {
        indicator(e.target, true); // Destaque este link (no qual usuario passa o mouse), de forma rapida
    });

    // Quando usuario tirar mouse da barra de menu
    link.addEventListener("mouseout", () => {
        let activeLink = document.querySelector(".navLink.active"); // Volte o destaque, devagar, a este item
        if (activeLink) {
            indicator(activeLink, false);
        } 
        
        else {
            highlight.style.opacity = 0;
        }
    });
});

window.addEventListener("resize", function() {
    let activeLink = document.querySelector(".navLink.active"); // Volte o destaque, devagar, a este item
    if (activeLink) {
        indicator(activeLink, false);
    } 
    
    else {
        highlight.style.opacity = 0;
    }
});