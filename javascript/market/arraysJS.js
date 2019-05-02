
var fruitsMarket = ['melon', 'grapes', 'cherries'];
var fruitsWarehouse = ['plums', 'watermelon', 'mango'];

// add fruits in market
function market() {
    var parent = document.querySelector('.market');
    var lastChild = parent.lastElementChild;
    console.log(lastChild);
    fruitsMarket.forEach(function (item) {
        var p = document.createElement('p');
        p.textContent = item;
        parent.insertBefore(p, lastChild);
    })
}
market();

// add fruits in warehouse
function warehouse() {
    var parent = document.querySelector('.warehouse');
    var title = parent.lastElementChild;
    console.log(title);
    fruitsWarehouse.forEach(function (item) {
        var p = document.createElement('p');
        p.textContent = item;
        parent.insertBefore(p, title.nextElementSibling);
    })
}
warehouse();

// add fruits in market from warehouse
function supply() {
    var add = fruitsWarehouse.pop();
    console.log(add);
    fruitsMarket.push(add);
    console.log(fruitsMarket);
    var parent = document.querySelector('.market');
    var firstChild = parent.firstElementChild;
    console.log(firstChild);
    var p = document.createElement('p');
    p.textContent = add;
    parent.insertBefore(p, firstChild.nextElementSibling);
    var child = document.querySelector('.warehouse');
    var span = child.firstElementChild;
    child.removeChild(span.nextElementSibling);

}

//remove fruits from market 
function discard() {
    var dis = fruitsMarket.pop();
    fruitsWarehouse.push(dis);
    var parent = document.querySelector('.warehouse');
    var p = document.createElement('p');
    p.textContent = dis;
    parent.appendChild(p);
    var child = document.querySelector('.market');
    var first = child.firstElementChild;
    child.removeChild(first.nextElementSibling);
}