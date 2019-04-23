var a = 4;
var b = 5;
var x = a + b;
console.log(x);

//function change() doesn't work for else...just doesn't work...IT WORKS WITH TOGGLE!!
//I can't change color at every click!!  RESOLVED!!!
//It doesn't work addEventListener -- only in console
//I can't put the same function for every array's item -- resolved without toggle :( --resolved with toggle functions 
function change() {
    var x = document.querySelector(" article p:first-child");
    x.classList.toggle('clicked');
}
function changeP() {
    this.classList.toggle('biggerChanged');
}
document.querySelector('#p').addEventListener('click', changeP);

function ttt(id) {
    id.classList.toggle('header');
}

function btnChange(btn) {
    btn.classList.toggle('btnClicked');
    if (btn.className === 'btnClicked') {
        btn.textContent = "I'm changed!"
    }
    else {
        btn.textContent = "Change me!"
    }
}
var show = 0;
function showHide(id, n) {
    show ? showMe(id, n) : hideMe(id, n);
}
function showMe(id, n) {
    var x = document.querySelectorAll('footer div div:last-child');
    var len = x.length;
    for (i = 0; i < len; i++) {
        if (i == n) {
            x[i].style.display = 'block';
        }
        id.textContent = 'Hide';
    }
    show = 0;
}
function hideMe(id, n) {
    var x = document.querySelectorAll('footer div div:last-child');
    var len = x.length;
    for (i = 0; i < len; i++) {
        if (i == n) {
            x[i].style.display = 'none';
        }
        id.textContent = 'Show';
    }
    show = 1;
}
