var enter = document.getElementById('show-popup-form');
var form = document.getElementById("popup-form");
enter.onclick = function(){
    form.setAttribute("class","popup");
    enter.setAttribute('class', "invisible");
};
document.getElementById('exit').onclick = function(){
    form.setAttribute("class","invisible");
    enter.innerHTML = "Click me!";
    enter.setAttribute('class', "btn btn-main");
};
