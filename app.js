console.log("HI!")

document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("#countries");


//Fetch all countries from the above url, and save the results in a variable
    const fetchAllCountries = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        const countryNames = []
    
// Generate li elements for each country object and add the name of each country to the element's textContent value.       
        jsonData.forEach((country) => countryNames.push(country.name))
    
        const countryName = countryNames.map(name_array);
    
// Append the li elements to the ul element to display a list of country names

        for(let i = 0; i < 200; i++){
            const getCountryList = document.createElement("list")
            getCountryList.textContent = countryName[i]
            list.appendChild(getCountryList);

        }


    }
})