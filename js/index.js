let puntosUsusario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPC = document.querySelector("#puntos-pc");
let mensaje = document.querySelector("#mensaje");
let contnedorGanarPunto = document.querySelector("#gana-punto");
let elegirArma = document.querySelector("#elegir-arma");

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-pc");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
})

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;
    
    // piedra => 0
    // papel => 1
    // tijera => 2

    if (eleccionPC === 0) {
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel🧻"
    } else if (eleccionPC === 2) {
        eleccionPC = "tijera✂️"
    }

    // piedra vence tijera
    // tijera vence papel
    // papel vence apiedra
    //si son iguales empate

    if (
        (eleccionUsuario = "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPC === "papel🧻") ||
        (eleccionUsuario === "papel🧻" && eleccionPC === "piedra🪨") 
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC = "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPC === "tijera✂️" && eleccionUsuario === "papel🧻") ||
        (eleccionPC === "papel🧻" && eleccionUsuario === "piedra🪨")
    ) {
        ganaPC();
    } else {
        empate();
    }
}

function ganaUsuario() {
    puntosUsusario++;
    contenedorPuntosUsuario.innerText = puntosUsusario;
    contenedorGanaPunto.innerText = "¡Ganaste un punto! 🔥"
}

function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora gana un punto! 😢"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate! 😲"
}