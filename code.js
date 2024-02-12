
const dist = "210px"

function lightOnOff(bolaId){
    let bola = document.getElementById(bolaId);
    
    if (bola.style.right == dist || bola.style.right === "") {
        bola.style.right = "auto";
        bola.style.left = dist;
    } else {
        bola.style.right = dist;
        bola.style.left = "auto";
    }
}

light1.onclick = function() {
    if (bola.style.right == dist || bola.style.right === "") {
        bola.style.right = "auto";
        bola.style.left = dist;
    } else {
        bola.style.right = dist;
        bola.style.left = "auto";
    }    
};