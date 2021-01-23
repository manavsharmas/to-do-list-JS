var item = document.querySelector('#item');
var list = document.querySelector('#list');
var btn = document.querySelector('#add');
var btn2 = document.querySelector('#clear');

function add(){
    list.innerHTML += '<li>' + item.value + '</li>';
    item.value = "";
}

function clear(){
    list.innerHTML = "";
}

btn.addEventListener('click', add);
btn2.addEventListener('click',clear);

