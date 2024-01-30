var btn = document.querySelector("button")
var h = document.querySelector(".cont-h1")

var flag = 0;

btn.addEventListener("click", function(){

    if(flag == 0){
        h.innerHTML = "Friend"
        h.style.color = "green"
        btn.innerHTML = "Remove"
        btn.style.backgroundColor = "red"
        flag = 1;
    }else{
        h.innerHTML = "Stranger"
        h.style.color = "blue";
        btn.innerHTML = "Add To Friend"
        btn.style.backgroundColor = "cadetblue"
        flag = 0
    }
    
});