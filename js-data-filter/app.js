const data = [
    { name: 'Bob', age: 22, city: 'Los Angeles' },
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Alice', age: 30, city: 'San Francisco' },
    { name: 'Jon', age: 25, city: 'New York' },
    { name: 'Alie', age: 30, city: 'San Francisco' },
    { name: 'Bo', age: 22, city: 'Los Angeles' }
]

// Function to filter and display data based on individual input fields
function filterData() {
    const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
    const ageInput = document.getElementById('ageInput').value.trim().toLowerCase();
    const cityInput = document.getElementById('cityInput').value.trim().toLowerCase();

    const filteredData = data.filter((item) => {
        const itemName = item.name.toLowerCase();
        const itemAge = item.age.toString().toLowerCase();
        const itemCity = item.city.toLowerCase();

        return (!nameInput || itemName.includes(nameInput)) &&
            (!ageInput || itemAge.includes(ageInput)) &&
            (!cityInput || itemCity.includes(cityInput));
    });

    displayData(filteredData);
}

// Function to display data in the table
function displayData(filteredData) {
    const tableBody = document.getElementById('dataBody');
    tableBody.innerHTML = '';

    filteredData.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.name}</td><td>${item.age}</td><td>${item.city}</td>`;
        tableBody.appendChild(row);
    });
}

// Function to update query parameters and filter data on input change
function searchData() {
    filterData();
}

// Initial data load and filter on page load
filterData();