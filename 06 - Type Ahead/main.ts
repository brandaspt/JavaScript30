const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
interface ICity {
	city: string
	growth_from_2000_to_2013: string
	latitude: number
	longitude: number
	population: string
	rank: string
	state: string
}
let cities: ICity[] = []

const searchInput = document.querySelector(".search")
const resultsUl = document.querySelector(".suggestions") as HTMLElement

const fetchData = async () => {
	const resp = await fetch(endpoint)
	const data = await resp.json()
	cities = data
}

const filterCities = (searchTerm: string) => {
	const lowerSearchTerm = searchTerm.toLowerCase()
	return cities.filter(city => city.city.toLowerCase().includes(lowerSearchTerm) || city.state.toLowerCase().includes(lowerSearchTerm))
}

const highlightMatches = (string: string, searchTerm: string) => {
	const regExp = new RegExp(searchTerm, "gi")
	return string.replace(regExp, match => `<span class="hl">${match}</span>`)
}

function showSuggestions(this: HTMLInputElement) {
	if (!this.value.length) {
		resultsUl.innerHTML = "<li>Filter for a city</li><li>or a state</li>"
		return
	}
	const filteredCities = filterCities(this.value)

	const suggestionsHTML = filteredCities
		.map(
			city => `
  <li>
    <p>${highlightMatches(city.city, this.value)}, ${highlightMatches(city.state, this.value)}</p>
    <p>${Number(city.population).toLocaleString()}</p>
  </li>`
		)
		.join("")
	resultsUl.innerHTML = suggestionsHTML
}

fetchData()

searchInput?.addEventListener("change", showSuggestions)
searchInput?.addEventListener("keyup", showSuggestions)
