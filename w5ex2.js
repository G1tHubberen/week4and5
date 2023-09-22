document.addEventListener("DOMContentLoaded", function () {
    const map = document.getElementById("europe-map");
    const infoDiv = document.querySelector(".info");

    // Event listener for map click
    map.addEventListener("click", async function (event) {
        if (event.target.tagName === "path") {
            const countryCode = event.target.getAttribute("id");

            // Fetch country data using the REST API
            try {
                const response = await fetch(`https://countries.plaul.dk/api/countries/${countryCode}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch data for ${countryCode}`);
                }
                const data = await response.json();

                // Display country details in the infoDiv
                infoDiv.innerHTML = `
                    <h3>${data.name.common}</h3>
                    <p>Official Name: ${data.name.official}</p>
                    <p>Capital: ${data.capital[0]}</p>
                    <p>Region: ${data.region}</p>
                    <p>Subregion: ${data.subregion}</p>
                    <p>Languages: ${Object.values(data.languages).join(", ")}</p>
                    <p>Currency: ${data.currencies.DKK.name} (${data.currencies.DKK.symbol})</p>
                    <img src="${data.flag}" alt="${data.name.common} Flag" width="100">
                `;
            } catch (error) {
                console.error(error);
                infoDiv.innerHTML = "<p>Error fetching country data</p>";
            }
        }
    });
});
