const playSound = (e: KeyboardEvent) => {
	const audioEl = document.querySelector(`audio[data-key="${e.code}"`) as HTMLAudioElement
	if (!audioEl) return

	audioEl.currentTime = 0
	audioEl.play()

	const key = document.querySelector(`.key[data-key="${e.code}"`) as HTMLElement
	key.classList.add("playing")
}

const removeTransition = (e: any) => {
	if (e.propertyName !== "transform") return
	const target = e.target as HTMLElement
	target.classList.remove("playing")
}

window.addEventListener("keydown", playSound)

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
