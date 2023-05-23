var dirx;
var diry;
var posx;
var posy;
var vel;
var obj;
var timer;

function inicio() {
    dirx = 0;
    diry = 0;
    posx = 0;
    posy = 0;
    vel = 10;
    obj = document.getElementById("foguete");
    document.addEventListener("keydown", teclaPress);
    document.addEventListener("keyup", teclaSolta);
    timer = setInterval(moverObjeto, 20);
}

window.addEventListener("load", inicio);

function teclaPress(event) {
    const tecla = event.key;
 
    if (tecla === "ArrowUp") {
        diry = -1;
    } else if (tecla === "ArrowDown") {
        diry = 1;
    }
}

function teclaSolta(event) {
    const tecla = event.key;
    if (tecla === "ArrowLeft" || tecla === "ArrowRight") {
        dirx = 0;
    } else if (tecla === "ArrowUp" || tecla === "ArrowDown") {
        diry = 0;
    }
}

function moverObjeto() {
    var limiteSuperior = 0;
    var limiteInferior = window.innerHeight - obj.offsetHeight;

    posx += dirx * vel;
    posy += diry * vel;

    // Limitar o movimento dentro das bordas superior e inferior
    if (posy < limiteSuperior) {
        posy = limiteSuperior;
    } else if (posy > limiteInferior) {
        posy = limiteInferior;
    }

    obj.style.left = posx + "px";
    obj.style.top = posy + "px";
}
