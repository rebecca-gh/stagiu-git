function create() {
    // create html template
    var main = document.querySelector('main');
    main.setAttribute('style', 'max-width:900px; margin: auto')
    var header = document.createElement('header');
    var section = document.createElement('section');
    var docFrg = document.createDocumentFragment();
    var footer = document.createElement('footer');
    main.appendChild(header);
    main.appendChild(section);
    main.appendChild(docFrg);
    main.appendChild(footer);
    var div = document.createElement('div');
    section.appendChild(div);
    var text = ['lorem ipsum 1', 'lorem ipsum 2', 'lorem ipsum 3', 'lorem ipsum 4'];
    text.forEach(content => {
        var para = document.createElement('p');
        para.textContent = content;
        div.appendChild(para);
    });



    console.log(section);
    console.log(docFrg);
    var flowers = [
        { id: 1, name: 'tulip', size: 'medium', price: 7, description: function () { return this.name + ' ' + this.size; } },
        { id: 2, name: 'rose', size: 'high', price: 15, description: function () { return this.name + ' ' + this.size; } },
        { id: 3, name: 'orchid', size: 'high', price: 35, description: function () { return this.name + ' ' + this.size; } }
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


    section.appendChild(div);
    function showElem(arr) {
        arr.forEach(item => {
            var p = document.createElement('p');
            p.innerHTML = item.name + ' ' + item.size + ' ' + item.price;
            div.appendChild(p);
        })

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

    }
    displayKeyValue(flowers);

    // increase price with forEach()
    // function increasePrice(newValue) {
    //     flowers.forEach(obj => {
    //         var p = document.createElement('p');
    //         obj.newPrice = obj.price + newValue;
    //         p.innerHTML = obj.name + '\'s new price is ' + obj.newPrice;
    //         div.appendChild(p);
    //     })

    // }
    // increasePrice(100);

    //increase price with map()
    function increasePrice(value) {
        flowers.map(function (obj) {
            var p = document.createElement('p');
            obj.price += value;
            p.innerHTML = obj.name + ' ' + obj.price;
            div.appendChild(p);
        })
    }

    increasePrice(200);

    // -- cum pot afisa mai multe key:value??

    // function multiplePairs(arr) {
    //     arr.forEach(item => {
    //         var p = document.createElement('p');
    //         for (var name in item) {
    //             if (item.hasOwnProperty(name)) {
    //                 for (var id in item) {
    //                     if (item.hasOwnProperty(id)) {
    //                         var text = id + ' ' + item[id];
    //                     }
    //                 }
    //                 p.innerHTML = text + ' ' + name + ' ' + item[name];
    //             }
    //         }
    //         div.appendChild(p);
    //     })
    // }
    // multiplePairs(flowers);

    function decreasePrice(value) {
        flowers.forEach(item => {
            var p = document.createElement('p');
            item.price -= value;
            p.innerHTML = 'the new price is' + ' ' + item.price;
            div.appendChild(p);
        }
        )

    }
    decreasePrice(50);

    // using inline style 
    function createNewDivs() {
        var newDivs = ['div', 'div'];
        console.log(newDivs);
        newDivs.forEach(item => {
            var div2 = document.createElement(item);
            div2.setAttribute('style', 'width:50%');
            div.appendChild(div2);
        })
        var divParent = document.querySelector('div');
        console.log(divParent);
        var div21 = divParent.querySelector('div');
        var flowerName = [flowers[0].name, flowers[1].name, flowers[2].name];
        flowerName.forEach(item => {
            var flowerP = document.createElement('p');
            flowerP.innerHTML = item;
            div21.appendChild(flowerP);
        })
        var div22 = divParent.querySelector('div:last-child');
        console.log(div21);
        div21.setAttribute('style', 'float:left');
        div22.setAttribute('style', 'float:right');

    }
    createNewDivs();

    //using addEventListener and target.....
}
create();