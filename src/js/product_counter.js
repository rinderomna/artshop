"use strict";

const controlAdjusters = document.querySelectorAll("[data-control]");

controlAdjusters.forEach(controlAdjuster => {
    controlAdjuster.addEventListener("click", (occured_event) => {
        manipulateValue(occured_event.target.parentNode, occured_event.target.dataset.control);
    });
});

function manipulateValue(control, operation) {
    const counter = control.querySelector("[data-display]");

    let value = parseInt(counter.innerText);

    if (value === 1 && operation === "less") return;
    if (value === 10 && operation === "plus") return; // Pela aplicacao

    if (operation === "plus") {
        counter.innerText = String(value + 1);
    } else if (operation === "less") {
        counter.innerText = String(value - 1);
    }
}