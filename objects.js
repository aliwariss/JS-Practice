let car = {
    name: "Civic",
    manufacturer: "Honda",
    model: "2018",
    inStock: true,
    start: function () {
        console.log("Broom Broom")
    }
}

//bracket notation
console.log(car["name"]);
let a = "inStock";
console.log(car[a])

//dot notation
console.log(car.model)

//check if a property exists
car.hasOwnProperty("price") //false

//update a value
car.inStock = false
car["model"] = "2021"

//methods
car.start()