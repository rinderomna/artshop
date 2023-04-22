// NavBar com destaque laranja quando passa o mouse
let highlight = document.querySelector("#highlightNavBar");
let item = document.querySelectorAll("a.navLink");

function indicator(e) {
    highlight.style.left = e.offsetLeft + "px";
    highlight.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
    link.addEventListener("mouseover", (e)=> {
        indicator(e.target);
    })
})