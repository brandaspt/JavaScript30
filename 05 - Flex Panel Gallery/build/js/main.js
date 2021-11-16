"use strict";
const panels = document.querySelectorAll(".panel");
function toggleActive() {
    this.classList.toggle("active");
}
panels.forEach(panel => panel.addEventListener("click", toggleActive));
