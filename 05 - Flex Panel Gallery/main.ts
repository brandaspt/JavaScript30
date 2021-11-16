const panels = document.querySelectorAll(".panel")

function toggleActive(this: HTMLElement) {
	this.classList.toggle("active")
}

panels.forEach(panel => panel.addEventListener("click", toggleActive))
