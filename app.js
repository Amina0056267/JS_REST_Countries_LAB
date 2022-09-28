console.log("HI!")

document.addEventListener("CountriesById", () => {
    const CountriesById = document.getElementById("countriesById");

})

const fetchAllCountries = async() => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    countriesById.id = jsonData.url;
}

const getCountryList