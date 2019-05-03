function create() {
    // create html template
    var main = document.querySelector('main');
    var header = document.createElement('header');
    var section = document.createElement('section');
    var footer = document.createElement('footer');
    main.appendChild(header);
    main.appendChild(section);
    main.appendChild(footer);
    var div = document.createElement('div');
    section.appendChild(div);
    var text = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3', 'lorem ipsum 4'];
    text.forEach(content => {
        var para = document.createElement('p');
        para.textContent = content;
        div.appendChild(para);
    });

}
create();

var flowers = [
    { id: 1, name: 'tulip', size: 'medium', price: 7, desctiption: function () { return this.name + ' ' + this.size; } },
    { id: 2, name: 'rose', size: 'high', price: 15, desctiption: function () { return this.name + ' ' + this.size; } },
    { id: 3, name: 'orchid', size: 'high', price: 35, desctiption: function () { return this.name + ' ' + this.size; } }
]

// 1. create and display html and flower object


// function showElem(arr) {
//     var div = document.createElement('div');
//     var section = document.querySelector('section');
//     arr.forEach(function (item) {
//         var p = document.createElement('p');
//         p.innerHTML = item.name + ' ' + item.size + ' ' + item.price;
//         div.appendChild(p);
//     })
//     section.appendChild(div);
// }
// showElem();


var div = document.createElement('div');
var section = document.querySelector('section');
function showElem(arr) {
    arr.forEach(item => {
        var p = document.createElement('p');
        p.innerHTML = item.name + ' ' + item.size + ' ' + item.price;
        div.appendChild(p);
    })
    section.appendChild(div);
}
showElem(flowers);

// display key:value
function displayKeyValue() {
    flowers.forEach(obj => {
        var p = document.createElement('p');
        for (var name in obj) {
            if (obj.hasOwnProperty[name]) {
                p.innerHTML = name + ': ' + obj[name];
            }
        }
        div.appendChild(p);
    })
    section.appendChild(div);
}
displayKeyValue(flowers);

// increase price with forEach()
function increasePrice(newValue) {
    flowers.forEach(obj => {
        var p = document.createElement('p');
        obj.newPrice = obj.price + newValue;
        p.innerHTML = obj.name + '\'s new price is ' + obj.newPrice;
        div.appendChild(p);
    })
    section.appendChild(div);
}
increasePrice(100);