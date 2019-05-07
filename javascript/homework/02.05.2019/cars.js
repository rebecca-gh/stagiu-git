var BMW = {
    model: 'M2',
    price: 50000,
    owner: 'Aly',
    description: function () { return this.model + ' ' + this.price; }
}
var Volvo = {
    model: 'XC200',
    price: 70000,
    owner: 'Emy',
    description: function () { return this.model + ' ' + this.price; }
}
var Hyundai = {
    model: 'Sante Fe',
    price: 35000,
    owner: 'Ela',
    description: function () { return this.model + ' ' + this.price; }
}

var Jaguar = {
    model: 'F-Type',
    price: 65000,
    owner: 'Ade',
    description: function () { return this.model + ' ' + this.price; }
}
var cars = [BMW, Volvo, Hyundai, Jaguar];

//ex 1 - return a string 
function displayCar() {
    var section = document.querySelector('section');
    cars.forEach(car => {
        var p = document.createElement('p');
        p.innerHTML = car.model + ' ' + 'costs' + ' ' + car.price + ' ' + 'and is owned by' + ' ' + car.owner;
        section.appendChild(p);
    })

}
displayCar();

// ex 2 - increase price for every car
function increasePrice(value) {  // cum atribui valori diferite fiecarei masini?
    cars.map(car => {
        car.price += value;
        console.log(car);
    })
}
increasePrice(1000);

// function addField(value) {
//     cars.map(car => {
//         car.value = value;
//         car.total = car.price + car.value
//     })
//     console.log(cars);

// }
// addField(2000);

// function addValue(car, value) {
//     car.newTotal = car.price + value;
//     console.log(car);
// }
// addValue(BMW, 3333);
// addValue(Jaguar, 5555);


// ex 3 - sum of total cars
function sum() {
    var prices = [];
    cars.forEach(car => {
        prices.push(car.price);
    }
    )
    var totalSum = prices.reduce((price1, price2) => {
        return price1 + price2;
    })
    console.log(prices);
    console.log(totalSum);
}
sum();

// sum of only 2 cars
function twoCars(car1, car2) {
    var prices = [car1.price, car2.price];
    console.log(prices);
    var total = prices.reduce((price1, price2) => {
        return price1 + price2;
    })
    console.log(total);
}
twoCars(BMW, Volvo);
twoCars(Volvo, Jaguar);

//ex 4 - string for cars
function details() {
    cars.forEach(car => {
        var index = cars.indexOf(car);
        var text = index + '.' + car.model + ' ' + car.description();
        console.log(text);
    })

}
details();