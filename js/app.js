// NavBar
let highlight = document.querySelector("#highlightNavBar");
let item = document.querySelectorAll("nav li a");

function indicator(e) {
    highlight.style.left = e.offsetLeft + "px";
    highlight.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
    link.addEventListener("mouseover", (e)=> {
        indicator(e.target);
    })
})