function Car(id, name, model, engine) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.engine = engine;
}

var cars = [
    { id: 1, name: 'bmw', model: 'x1', engine: 2000 },
    { id: 2, name: 'audi', model: 'a5', engine: 2500 }
];

function createCarItem(arr) {
    arr.forEach(element => {
        for (key in element) {
            var item = element[key];
            console.log(item);
        }

        // var newCar = new Car(element.id, element.name, element.model, element.engine);
        // console.log(newCar);
    });
};


// function createCarItem(arr) {
//     arr.forEach(item => {
//         var car = {
//             id: item.id,
//             name: item.name,
//             model: item.model,
//             engine: item.engine
//         }

//         console.log(car);
//     })
// };

createCarItem(cars);