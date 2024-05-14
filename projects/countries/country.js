const countryDetails = document.querySelector(".country-details");
const borderCountries = document.querySelector(".border-countries");
const themeSwitcher = document.querySelector(".theme-switcher");

let borderNames = [];

let dark = localStorage.getItem("dark");
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

const countryName = new URLSearchParams(location.search).get("name");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    const fetchBorderData = async () => {
      if (country.borders) {
        for (const border of country.borders) {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${border}`
          );
          const [borderData] = await response.json();
          borderNames.push(borderData.name.common);
        }
      }

      generateHTML(country, borderNames);
    };

    fetchBorderData();
  });

function generateHTML(country, borderNames) {
  countryDetails.innerHTML = `
  <div class="img-container">
  <img src="${country.flags.svg}" alt="${country.flags.alt}" />
</div>
<div class="details-text-container">
  <h1 class="">${country.name.common}</h1>
  <div class="details-text">
  <p><b>Native Name: </b>${
    (country.name.nativeName &&
      Object.values(country.name.nativeName)[0].official) ||
    country.name.common
  }</p>
    <p><b>Population: </b>${country.population.toLocaleString("en-IN")}</p>
    <p><b>Region: </b>${country.region}</p>
    ${country.subregion ? `<p><b>Sub Region: </b>${country.subregion}</p>` : ""}
    ${country.capital ? `<p><b>Capital: </b>${country.capital}</p>` : ""}
    <p><b>Top Level Domain: </b>${country.tld.join(" , ")}</p>
    ${
      country.currencies
        ? `<p><b>Currencies: </b>${
            country.currencies &&
            Object.values(country.currencies)
              .map((curr) => curr.name)
              .join(" , ")
          }</p>`
        : ""
    }
        ${
          country.languages
            ? `<p><b>Languages: </b>${
                country.languages &&
                Object.values(country.languages).join(" , ")
              }</p>`
            : ""
        }
  </div>
  <div class="border-countries">
 
${
  country.borders && country.borders
    ? `
      <b>Border Countries: </b>&nbsp;
     
    ${borderNames
      ?.map((element) => {
        return ` <a href="country.html?name=${element}">${element}</a>`;
      })
      .join("")}
     
  `
    : ""
}


  </div>
</div>
  `;
}

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
