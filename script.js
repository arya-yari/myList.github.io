var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

function inputLenght(){
    return input.value.length;
}

function CreateLi() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addList(){
    if(inputLenght() > 0){
        CreateLi();
    }
}

function addListEnter(){
    if(inputLenght() > 0 && event.keyCode === 13){
        CreateLi();
    }
}

button.addEventListener("click", addList);
input.addEventListener("keypress", addListEnter);