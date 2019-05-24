(function create() { //nu mai fac functii fara autoapelare sau daca nu creez module;
    var elem = [
        {
            id: 'elec', name: 'electronics', checked: true, children: [
                {
                    id: 'tv', name: 'tv', checked: true, children: [
                        { id: 'tvSam', name: 'samsung', checked: true, children: [] },
                        { id: 'tvSon', name: 'sony', checked: true, children: [] }]
                },
                {
                    id: 'laptop', name: 'laptops', checked: true, children: [
                        { id: 'lapAsus', name: 'asus', checked: true, children: [] },
                        { id: 'lapLen', name: 'lenovo', checked: true, children: [] }]
                },

                {
                    id: 'radio', name: 'radio', checked: true, children: [
                        { id: 'blk', name: 'blaupunkt', checked: true, children: [] }
                    ]
                },

                {
                    id: 'phone', name: 'phones', checked: true, children: [
                        { id: 'phoneIph', name: 'iPhone', checked: true, children: [] },
                        { id: 'phoneSam', name: 'samsung', checked: true, children: [] },
                        { id: 'phoneSon', name: 'sony', checked: true, children: [] }]
                }]
        },
        {
            id: 'food', name: 'food', checked: true, children: [
                {
                    id: 'veg', name: 'vegetables', checked: true, children: [
                        { id: 'tomato', name: 'tomatoes', checked: true, children: [] },
                        { id: 'cucumber', name: 'cucumbers', checked: true, children: [] }
                    ]
                },
                {
                    id: 'fruit', name: 'fruits', checked: true, children: [
                        { id: 'apple', name: 'apples', checked: true, children: [] },
                        { id: 'orange', name: 'oranges', checked: true, children: [] }
                    ]
                }
            ]
        }
    ];

    function createList() {
        var ul = document.createElement('ul');
        ul.className = 'nonStyle';
        return ul;
    }

    function createItems(labelText, id) {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        var label = document.createElement('label');

        checkbox.type = 'checkbox';
        checkbox.id = id;
        label.innerHTML = labelText;
        li.append(checkbox, label);
        return li;
    }

    function createListProduct(products) {
        var ulProduct = createList();
        // console.log(ulProduct);

        products.forEach(element => {
            var liProduct = createItems(element.name, element.id);
            //console.log(liProduct);
            ulProduct.append(liProduct);

            if (element.children) {
                var product = createListProduct(element.children);
                liProduct.append(product);
            }
        });
        return ulProduct;
    }

    document.querySelector('section').append(createListProduct(elem));
    console.log(createListProduct(elem));




})();