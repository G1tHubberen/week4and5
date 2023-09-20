
const SERVER_URL = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getACar)
document.getElementById("add-car").addEventListener("click", addCar)


function addCar() {
    const form = document.getElementById('carForm');
    const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
    };

    const options = {
        method: "POST",
        headers: {"Content-type": "application/json",},
        body: JSON.stringify(newCar)
    }

    fetch(SERVER_URL, options)
        .then(response => response.json())
        .then(carResponse =>
            document.getElementById("new-car-response").innerText = JSON.stringify(carResponse,null,3))
}




function getACar() {
    const id = document.getElementById("text-for-id").value
    fetch(SERVER_URL + "/" + id)
        .then(response => {
            if(!response.ok){
                return alert("Car not found")
            }
            return response.json()
        })
        .then(car => {
            document.getElementById("found-car").innerText = JSON.stringify(car,null,2)
        })
}




function getAllCars() {
    fetch(SERVER_URL)
        .then(response => response.json())
        .then(cars => {

            const tableRows = cars.map(car => `
                <tr>
                    <td>${car.id} </td>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.pricePerDay}</td>
                    <td>${car.bestDiscount}</td>
                </tr>
            `)

            const rowsAsStr = tableRows.join("")
            document.getElementById("tbody").innerHTML = rowsAsStr // Remember XSS
        })
}