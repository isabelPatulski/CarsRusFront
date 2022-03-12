
import {SERVER} from "../settings.js"
const SERVER_URL = "http://localhost:8080/api/cars"
const URL = SERVER+"/cars"

export function getAllCars(){
    fetch(SERVER_URL).then(res=>res.json()).then(cars=>console.log(cars)).catch(e=>console.error(e))
}

function makeRows(rows){
    const trows = rows.map(car=>
        <tr>
            <td>${car.id}</td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.pricePrDay}</td>
        </tr>).join("\n")
    document.getElementById("car-rows").innerHTML = trows
}

