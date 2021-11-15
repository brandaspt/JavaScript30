const inputs = document.querySelectorAll(".controls input")

function handleUpdate(this: HTMLInputElement) {
	const suffix = this.dataset.sizing || ""
	console.log(this.value)
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => {
	input.addEventListener("change", handleUpdate)
	input.addEventListener("mousemove", handleUpdate)
})
