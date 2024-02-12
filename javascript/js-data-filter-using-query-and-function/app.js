const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Alice', age: 30, city: 'San Francisco' },
    { name: 'Bob', age: 22, city: 'Los Angeles' }
]

// Function to filter and display data based on query parameters
function filterData() {
    const urlSearchParams = new URLSearchParams(
        window.location.search
    )
    const searchTerm = urlSearchParams.get('search')

    // searchTerm ? console.log('search') : console.log('no search')
    if (searchTerm) {
        const filteredData = data.filter((item) => {
            return (
                item?.name
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                item?.age?.toString().includes(searchTerm) ||
                item?.city
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
        })

        displayData(filteredData)
    } else {
        displayData(data)
    }
}

// Function to display data in the table
function displayData(filteredData) {
    console.log('display data loaded')

    const urlSearchParams = new URLSearchParams(
        window.location.search
    )
    const searchTerm = urlSearchParams.get('search')

    const tableBody = document.getElementById('dataBody')
    tableBody.innerHTML = ''

    searchTerm
        ? console.log('query found')
        : console.log('no query found')

    filteredData.forEach((item) => {
        const row = document.createElement('tr')
        row.innerHTML = `<td>${item.name}</td><td>${item.age}</td><td>${item.city}</td>`
        tableBody.appendChild(row)
    })
}

// Function to update query parameters and filter data on input change
function searchData() {
    const searchInput = document.getElementById('searchInput')
    const searchTerm = searchInput?.value?.trim() // remove any tailing spaces

    const urlSearchParams = new URLSearchParams(
        window.location.search
    )
    urlSearchParams.set('search', searchTerm) // update specific query on URL

    const newUrl = `${window.location.pathname
        }?${urlSearchParams.toString()}`
    window.history.replaceState({ path: newUrl }, '', newUrl) // update new query to the url

    filterData()
}

// Initial data load and filter on page load
filterData()