const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-input");
const themeSwitcher = document.querySelector(".theme-switcher");

let allCountriesData;

let dark = localStorage.getItem("dark") === "true";
if (dark) {
  document.body.classList.add("dark");
}
if (!dark) {
  themeSwitcher.innerHTML = `
    <i class="fa-solid fa-cloud-moon"></i>&nbsp;&nbsp;Dark Mode
  `;
} else {
  themeSwitcher.innerHTML = `
    <i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode
  `;
}

function renderCountries(data) {
  countriesContainer.innerHTML = "";

  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;

    countryCard.innerHTML = `
    <img src="${country.flags.svg}" alt="${country.flags.alt}" />
              <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString(
                  "en-IN"
                )}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital}</p>
              </div>
    `;
    countriesContainer.append(countryCard);
  });
}

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);

    allCountriesData = data;
  });

filterByRegion.addEventListener("change", (e) => {
  console.log(filterByRegion.value);
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => {
      renderCountries(data);
    });
});

searchInput.addEventListener("input", (e) => {
  const filteredCountries = allCountriesData.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  countriesContainer.innerHTML = "";
  if (!filteredCountries.length) {
    countriesContainer.innerHTML =
      "<p class='not-found-message'>Country not found 😕</p>";
  } else {
    renderCountries(filteredCountries);
  }
});

themeSwitcher.addEventListener("click", () => {
  dark = !dark;
  localStorage.setItem("dark", dark);

  document.body.classList.toggle("dark");
  if (!dark) {
    themeSwitcher.innerHTML = `
      <i class="fa-solid fa-cloud-moon"></i>&nbsp;&nbsp;Dark Mode
    `;
  } else {
    themeSwitcher.innerHTML = `
      <i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode
    `;
  }
});
