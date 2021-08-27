
const countryImage = document.getElementById('country-image');
const countryName = document.getElementById('country-name');
const captialCity = document.getElementById('capital-city');
const region = document.getElementById('region');
const callingCode = document.getElementById('calling-code');
const language = document.getElementById('language');
const area = document.getElementById('area');
const population = document.getElementById('population');
const subRegion = document.getElementById('sub-region');


const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => getCountry(data))
};
loadCountries();

const getCountry = countrys => {
    countrys.forEach(country => {


        // console.log(country.name)
        if (country['name'] === 'Bangladesh') {
            countryName.innerText = country['name']
            captialCity.innerText = country.capital;
            region.innerText = country.region;
            callingCode.innerText = country.callingCodes;
            language.innerText = country['languages'][0].name;
            area.innerText = country.area;
            population.innerText = country.population;
            subRegion.innerText = country.subregion;


        }

    })
};

document.getElementById('search-country').addEventListener('click', function () {

    const inputField = document.getElementById('input-value');
    const inputValue = inputField.value;
    loadCountryDetails(inputValue);

    inputField.value = '';
});
const loadCountryDetails = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data => countryDetailsOutput(data))
};

const countryDetailsOutput = (data) => {
    console.log(data[0]);
    countryName.innerText = data[0].name;
    countryImage.src = data[0].flag;
    captialCity.innerText = data[0].capital;
    region.innerText = data[0].region;
    callingCode.innerText = data[0].callingCodes[0];
    language.innerText = data[0].languages[0].name;
    area.innerText = data[0].area;
    population.innerText = data[0].population;
    subRegion.innerText = data[0].subregion;

}
