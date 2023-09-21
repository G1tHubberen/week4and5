import {getSharedText} from "../p2/p2.js"
import {SERVER_URL} from "../../settings.js";
import {makeOptions} from "../../utils.js";

export function initAddCar(){
    addCar()
}


async function addCar(){

    //get cars from form
    const car = {
        brand: "nvik",
        model: "neknw",
        pricePrDay: 100,
        bestDiscount: 25
    }

    const options = makeOptions("POST",car)

    const newCar = await fetch(SERVER_URL,options)
        .then(res => res.json())
    console.log(newCar)
}