countrybutton = document.getElementById("countries");
capitalbutton = document.getElementById("capitales");
var i 
capitales = [
    {country: "Austria", capital: "Vienna"},
    {country: "Belgium", capital: "Brussels"},
    {country: "Denmark", capital: "Copenhagen"},
    {country: "Germany", capital: "Berlin"},
];
function CountryCapitalSelect(event) {
    // Prevent default event (loading page)
    event.preventDefault();
    
    const selectElement = document.getElementById('typed');
    selectElement.innerHTML = '';
    
    // Check which button was clicked
    if (event.target.id === 'countries') {
        // Add country options
        capitales.forEach(item => {
            selectElement.innerHTML += `<option value="${item.country}">${item.country}</option>`;
        });
    } else if (event.target.id === 'capitales') {
        // Add capital options
        capitales.forEach(item => {
            selectElement.innerHTML += `<option value="${item.capital}">${item.capital}</option>`;
        });
    }
}

// Add event listeners to buttons
countrybutton.addEventListener('click', CountryCapitalSelect);
capitalbutton.addEventListener('click', CountryCapitalSelect);