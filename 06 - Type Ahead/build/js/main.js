"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let cities = [];
const searchInput = document.querySelector(".search");
const resultsUl = document.querySelector(".suggestions");
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield fetch(endpoint);
    const data = yield resp.json();
    cities = data;
});
const filterCities = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return cities.filter(city => city.city.toLowerCase().includes(lowerSearchTerm) || city.state.toLowerCase().includes(lowerSearchTerm));
};
const highlightMatches = (string, searchTerm) => {
    const regExp = new RegExp(searchTerm, "gi");
    return string.replace(regExp, match => `<span class="hl">${match}</span>`);
};
function showSuggestions() {
    if (!this.value.length) {
        resultsUl.innerHTML = "<li>Filter for a city</li><li>or a state</li>";
        return;
    }
    const filteredCities = filterCities(this.value);
    const suggestionsHTML = filteredCities
        .map(city => `
  <li>
    <p>${highlightMatches(city.city, this.value)}, ${highlightMatches(city.state, this.value)}</p>
    <p>${Number(city.population).toLocaleString()}</p>
  </li>`)
        .join("");
    resultsUl.innerHTML = suggestionsHTML;
}
fetchData();
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("change", showSuggestions);
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("keyup", showSuggestions);
