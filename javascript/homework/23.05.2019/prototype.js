//create users with form

(function createUsersWithForm() {
    var form = document.createElement('form');
    var divInput = document.createElement('div');
    var divBtn = document.createElement('div');
    var divResult = document.createElement('div');
    var frag = document.createDocumentFragment();
    var section = document.querySelector('section');

    divBtn.className = 'divButtons';
    divResult.className = 'divResult';

    form.append(divInput);
    form.append(divBtn);

    /**
     * @param  {} id -- id input 
     * @param  {} name -- text content for label
     * creates pairs of label and input     
     */
    function createInput(id, name) {
        var label = document.createElement('label');
        var input = document.createElement('input');
        var divInputDetails = document.createElement('div');

        label.htmlFor = id;
        label.textContent = name + ':';
        input.type = 'text';
        input.id = id
        input.required = true; //??

        divInputDetails.append(label, input);
        divInput.append(divInputDetails);
        //form.append(divInput);
    }


    /**
     * @param  {} id -- id button
     * @param  {} name -- text content button
     * creates button
     */
    function createButton(id, name) {
        var button = document.createElement('button');

        button.id = id;
        button.type = 'button';
        button.textContent = name;

        console.log(button.id);
        divBtn.append(button);
        form.append(divBtn);
    }

    frag.append(form);
    console.log(frag);
    section.append(frag);
    console.log(frag);

    createInput('inputName', 'Name');
    console.log(document.getElementById('inputName'));
    createInput('inputSurname', 'Surname');
    createInput('inputMail', 'Mail');
    //createInput('inputSome', 'Some'); -- trebuie sa o includ in creare user!!!
    createButton('btnSubmit', 'Submit');
    //createButton('btnClear', 'Clear');
    //createButton('btnSome', 'Some');
    createInput('inputSome', 'Some');


    console.log(document.getElementById('btnSubmit'));

    //createInput('here', 'hereme');


    /**
     * creates object 'person' with constructor
     */
    // function Person(name, surname, mail) {
    //     this.name = name;
    //     this.surname = surname;
    //     this.mail = mail;
    // }
    // Person.prototype.showName = function () {
    //     console.log(this.name + ' ' + this.surname);
    // }

    /** 
     * creates object 'person' with prototype ec6
    */
    class Person {
        constructor(name, surname, mail) {
            this.name = name;
            this.surname = surname;
            this.mail = mail;
        }
        showName() { console.log(this.name + ' ' + this.surname) };
    }


    function getInputInfo() {
        var inputName = document.getElementById('inputName').value;
        console.log(inputName);
        var inputSurname = document.getElementById('inputSurname').value;
        var inputMail = document.getElementById('inputMail').value;

        var person = new Person(inputName, inputSurname, inputMail);
        person.showName();
        return person;


        //creates object 'person' with object prototype
        // var person = {
        //     name: inputName,
        //     surname: inputSurname,
        //     mail: inputMail,
        //     //message: (function () { alert('Welcome, ' + inputName + '!') })()
        // }
        // return person;
    }

    /**
     * creates new user with data from getInputInfo() and display new user under form
     */
    function createUser() {
        var divUser = document.createElement('div');
        var hr = document.createElement('hr');
        var userDetails = getInputInfo();

        for (key in userDetails) {
            var p = document.createElement('p');
            p.textContent = key + ': ' + userDetails[key];
            divResult.appendChild(divUser).appendChild(p);
            divResult.appendChild(hr);
        }

        //console.log(userDetails);

        frag.append(divResult);
        section.append(frag);
    }


    //de facut validare:
    //1. input!= null !!!
    //2. daca mail exista in users, nu mai crea user cu acelasi mail!! + de afisat mesaj 

    // function clearInputs() {
    //     var forClear = getInputInfo();
    //     //console.log(forClear);

    //     var inputText = document.getElementsByTagName('input');
    //     console.log(inputText[0]);
    //     inputText.forEach(item => {
    //         item.value = ' ';
    //     })
    //     return inputText;

    // }


    document.getElementById('btnSubmit').addEventListener('click', createUser);
    //document.getElementById('btnClear').addEventListener('click', clearInputs);  -- nu functioneaza!! de refacut!!

})();


