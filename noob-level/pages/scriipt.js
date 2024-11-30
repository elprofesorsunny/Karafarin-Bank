// API Credentials
const API_KEY = "1271398a52msh1e4db0a73379f9dp154fb5jsn34a50296a228";
const API_HOST = "wft-geo-db.p.rapidapi.com";

// DOM Elements
const countrySelect = document.getElementById("countries");
const stateSelect = document.getElementById("states");

// Fetch countries
async function fetchCountries() {
    try {
        const response = await fetch(`https://${API_HOST}/v1/geo/countries`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch countries: ${response.status}`);
        }

        const data = await response.json();
        populateDropdown(countrySelect, data.data, "code", "name");
    } catch (error) {
        console.error(error);
    }
}

// Fetch states for a selected country
async function fetchStates(countryCode) {
    try {
        const response = await fetch(`https://${API_HOST}/v1/geo/countries/${countryCode}/regions`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": API_HOST,
                "x-rapidapi-key": API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch states: ${response.status}`);
        }

        const data = await response.json();
        populateDropdown(stateSelect, data.data, "code", "name");
    } catch (error) {
        console.error(error);
    }
}

// Populate dropdown
function populateDropdown(dropdown, items, valueKey, textKey) {
    // Clear existing options
    dropdown.innerHTML = `<option value="">--Select--</option>`;

    items.forEach((item) => {
        const option = document.createElement("option");
        option.value = item[valueKey];
        option.textContent = item[textKey];
        dropdown.appendChild(option);
    });

    dropdown.disabled = false;
}

// Event Listeners
countrySelect.addEventListener("change", (event) => {
    const countryCode = event.target.value;

    // Clear states dropdown
    stateSelect.innerHTML = `<option value="">--Select State--</option>`;
    stateSelect.disabled = true;

    if (countryCode) {
        fetchStates(countryCode);
    }
});

// Initial Fetch
fetchCountries();
