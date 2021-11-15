const hourHand = document.querySelector(".hour-hand") as HTMLElement
const minHand = document.querySelector(".min-hand") as HTMLElement
const secHand = document.querySelector(".second-hand") as HTMLElement

const setTime = () => {
	const now = new Date()

	const secs = now.getSeconds()
	const secsDegrees = (secs / 60) * 360
	secHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secsDegrees}deg)`

	const mins = now.getMinutes()
	const minsDegrees = (mins / 60) * 360
	minHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minsDegrees}deg)`

	const hours = now.getHours()
	const hoursDegrees = (hours / 12) * 360 + (mins / 60) * (360 / 12)
	hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hoursDegrees}deg)`
}

const secInterval = setInterval(setTime, 1000)
