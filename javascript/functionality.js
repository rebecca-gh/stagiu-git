var a = 4;
var b = 5;
var x = a + b;
console.log(x);

//function change() doesn't work for else...just doesn't work...IT WORKS WITH TOGGLE!!
//I can't change color at every click!!  RESOLVED!!!
//It doesn't work addEventListener
function change() {
    var x = document.querySelector(" article p:first-child");
    x.classList.toggle('clicked');
}

function ttt(id) {
    id.innerHTML = "i'm HERE!";
}

function btnChange(btn) {
    btn.classList.toggle('btnClicked');
    if (btn.className === 'btnClicked') {
        btn.innerHTML = "I'm changed!"
    }
    else {
        btn.innerHTML = "Change me!"
    }
}

