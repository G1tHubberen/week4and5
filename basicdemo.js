const SERVER_URL = "http://localhost:8080/api/cars/1";

const car = fetch(SERVER_URL)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(JSON.stringify(data, null, 4))
    })