var arrObj = [
    {
        id: 1, name: 'a', values: [
            { id: 1.1, name: 'a.1', values: [] },
            { id: 1.2, name: 'a.2', values: [] }
        ]
    },
    { id: 2, name: 'b', values: [] }];

// function create(item) {
//     var sect = document.querySelector('section');

//     var ul = document.createElement('ul');
//     var li = document.createElement('li');
//     var input = document.createElement('input');
//     var label = document.createElement('label');
//     input.type = 'checkbox';
//     input.id = item.id
//     label.htmlFor = item.id;
//     label.appendChild(document.createTextNode(item.name));
//     li.appendChild(input);
//     li.appendChild(label);
//     ul.appendChild(li);
//     sect.appendChild(ul);
//     if (item.name.length > 0) {
//         create(item.name);
//     }
// };
//arrObj.forEach(create);

function check(item) {
    // var input = document.createElement('input');
    // var label = document.createElement('label');
    // input.type = 'checkbox';
    // input.id = item.id
    // label.htmlFor = item.id;
    // label.appendChild(document.createTextNode(item.name));

    return '<input type = "checkbox" </><label>' + item.name + '</>';
}
var div = ' ';
function createItem(arr) {
    div += '<ul>';
    for (var i = 0; i < arr.length; i++) {
        var option = arr[i];
        var input = check(option);
        div += '<li>' + input;
        if (option.values.length > 0) {
            createItem(option.values);
        }
        div += '</li>';
    }
    div += '</ul>';
}

createItem(arrObj);
document.querySelector('section').innerHTML = div;

function test(arr) {   //??????????????
    var len = arr.length

    for (i = 0; i < len; i++) {
        var item = arr[i];
        console.log(item);
        if (item.name.length > 0) {
            test(item.name);
        }

    }
}
//test(arrObj);



//16.05.2019
var nissan = {
    'name': 'Nissan',
    'type': 'coupe',
    'startEngine': function (engineSound) {
        console.log(engineSound);
    }
};

var honda = Object.create(nissan); // o metoda
honda.name = 'Honda';

var toyota = Object.create(honda);

//sa afisez prototype-ul fiecarui obiect
//object.getPrototypeof()

function Car(name, type) { //pt prop dinamice -- constructor 
    this.name = name;
    this.type = type;
}

Car.prototype.starEngine = function () {  //prototype exista doar pe functie --pt prop comune
    console.log('vrrom');
}

var nissan = new Car('Nissan', 'coupe');
var honda = new Car('Honda', 'coupe');

//var din es6 pt Obj.prototype
class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    startEngine() {
        console.log('vrrom');
    }
}

var honda = new Car('honda', 'copue');
var nissan = new Car('nissan', 'coupe');

//extindere clasa
class Coupe extends Car {
    constructor(name) {
        super(name);
        this.type = 'coupe';
    }
}