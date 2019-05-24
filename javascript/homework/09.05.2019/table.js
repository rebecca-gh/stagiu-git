function create() {
    var frag = document.createDocumentFragment();
    var section = document.querySelector('section');
    var table = document.createElement('table');
    frag.appendChild(table);
    section.appendChild(frag);


    var products = [

        { id: 1001, name: 'Apple iPhone X', price: 4000, description: '64GB, 4G' },
        { id: 1002, name: 'Apple iPhone 7 plus', price: 2500, description: '32GB, black' },
        { id: 1002, name: 'Apple iPhone XR', price: 3900, description: '64GB, 4G, blue' },
        { id: 1002, name: 'Apple iPhone 8', price: 3000, description: '64GB, 4G, silver' },
        { id: 1002, name: 'Samsung Galaxy S8', price: 2400, description: 'dual SIM, 64GB, 4G, black' },
        { id: 1002, name: 'Samsung Galaxy S9', price: 2600, description: 'dual SIM, 64GB, 4G, blue' },
        { id: 1002, name: 'Samsung Galaxy A7', price: 1000, description: 'dual SIM, 64GB, 4G, gold' },
        { id: 1002, name: 'Lenovo K8 Note', price: 1200, description: 'dual SIM, 64GB, 4G, black' },
    ]

    console.log(frag);
    console.log(section);
    function addTh() {
        var obj = products[0];
        const row = createRow(Object.keys(obj));
        table.appendChild(row);

    }
    function addBody() {
        products.forEach(item => {
            item.customField = "test0";
            const row = createRow(item);
            table.appendChild(row);
        })
    }

    function createRow(item) {
        var row = document.createElement('tr');
        for (key in item) {
            var cell = document.createElement('td');
            var text = document.createTextNode(item[key]);
            console.log(text);
            cell.appendChild(text);
            row.appendChild(cell);
            cell.setAttribute('class', 'row');
        }
        return row;
    }
    addTh();
    addBody();



    var table2 = document.createElement('table');
    frag.appendChild(table2);
    section.appendChild(frag);

    function newTable() {

        var arr = [
            { id: 1, color: 'green' },
            { id: 2, color: 'red' }
        ];


        var th = table2.createTHead();
        var rowTh = th.insertRow();
        var obj = arr[0];
        for (key in obj) {
            let cell = rowTh.insertCell();
            let text = document.createTextNode(key);
            cell.appendChild(text);
        };
        arr.forEach(item => {
            let row = table2.insertRow();
            for (key in item) {
                let cell = row.insertCell();
                let text = document.createTextNode(item[key]);
                cell.appendChild(text);
            }
        })


    }

    newTable();

    // function addStyle(){

    // }

}
create();