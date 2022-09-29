
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded!"); // Always console everytime you use eventlistener etc.

    const list = document.getElementById("#countries");


//arrayOfCountries[0].name.common === "Angola"


    const fetchAllCountries = async() => {
        const countryUl = document.querySelector("ul");
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        const countryNames = []

        const countryFlag = document.createElement("img");
            countryFlag.src = country.flags.png;
            countryFlag.classList.add("flag");
            countryUl.appendChild(countryFlag);

        }

        jsonData.forEach((country) => countryNames.push(country.name))
    
        const countryName = countryNames.map(name_array);
    
        for(let i = 0; i < 250; i++){
            const getCountryList = document.createElement("list")
            getCountryList.textContent = countryName[i]
            list.appendChild(getCountryList);
        }
        
        const button = document.querySelector("button");
        button.addEventListener("click", fetchAllCountries);
    });
