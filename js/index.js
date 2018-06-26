

//-----------------------------------VARIABLES JUEGO -------------------------------------------------------//
let cuadro0 = document.getElementById("element1")
cuadro0 = cuadro0.style.backgroundImage;
let cuadro1 = document.getElementById("element2")
cuadro1 = cuadro1.style.backgroundImage;
let cuadro2 = document.getElementById("element3")
cuadro2 = cuadro2.style.backgroundImage;
let cuadro3 = document.getElementById("element4")
cuadro3 = cuadro3.style.backgroundImage;
let cuadro4 = document.getElementById("element5")
cuadro4 = cuadro4.style.backgroundImage;
let cuadro5 = document.getElementById("element6")
cuadro5 = cuadro5.style.backgroundImage;
let cuadro6 = document.getElementById("element7")
cuadro6 = cuadro6.style.backgroundImage;
let cuadro7 = document.getElementById("element8")
cuadro7 = cuadro7.style.backgroundImage;
let cuadro8 = document.getElementById("element9")
cuadro8 = cuadro8.style.backgroundImage;
let tatetiActual = [cuadro0,cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8];


function actualizarValoresTateti() {
    cuadro0 = cuadro0.style.backgroundImage;
    cuadro1 = cuadro1.style.backgroundImage;
    cuadro2 = cuadro2.style.backgroundImage;
    cuadro3 = cuadro3.style.backgroundImage;
    cuadro4 = cuadro4.style.backgroundImage;
    cuadro5 = cuadro5.style.backgroundImage;
    cuadro6 = cuadro6.style.backgroundImage;
    cuadro7 = cuadro7.style.backgroundImage;
    cuadro8 = cuadro8.style.backgroundImage;
}

//-----------------------------------Función comparar -------------------------------------------------------//
let hayGanador = false;

function comparar() {
    tatetiActual = [cuadro0, cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8]
    if (tatetiActual[0] === tatetiActual[1] === tatetiActual[2]){
        console.log('ganaste');
        let hayGanador = true;
    } else if (tatetiActual[3] === tatetiActual[4] === tatetiActual[5]){
        console.log('ganaste');
        let hayGanador = true;
        } else if (tatetiActual[6] === tatetiActual[7] === tatetiActual[8]){
            console.log('ganaste');
            let hayGanador = true;
            } else if (tatetiActual[0] === tatetiActual[3] === tatetiActual[5]) {
                console.log('ganaste');
                let hayGanador = true;
                } else if (tatetiActual[1] === tatetiActual[4] === tatetiActual[6]) {
                    console.log('ganaste');
                    let hayGanador = true;
                    } else if (tatetiActual[2] === tatetiActual[5] === tatetiActual[8]) {
                        console.log('ganaste');
                        let hayGanador = true;
                        } else if (tatetiActual[0] === tatetiActual[4] === tatetiActual[8]) {
                            console.log('ganaste');
                            let hayGanador = true;
                            } else if (tatetiActual[2] === tatetiActual[4] === tatetiActual[6]) {
                                console.log('ganaste');
                                let hayGanador = true;
                                debugger;
                                } 
    ganador()
    return false;
}

function ganador(){
    if (hayGanador && jugador1){
        console.log('gana jugador 1');
    } else if (hayGanador && jugador2) {
        console.log('gana jugador 2');
    }
}


//-----------------------------------Cambiar Turno-------------------------------------------------------//

function cambiarTurno() {
    if (jugador1 === true) {
        jugador1 = false;
        jugador2 = true;
        console.log('juega jugador2');
    } else if (jugador2 === true) {
        jugador2 = false;
        jugador1 = true;
        console.log('juega jugador1');
    } else if (jugador1 === jugador2) {
        preventDefault;
    }
}


//-----------------------------------Función O y X-------------------------------------------------------//

let jugador1;
let jugador2;
let columnas = document.getElementsByClassName("column");
let numeroAleatorio = Math.floor(Math.random() * 2);

function definirTurnoAleatorio() {
    if (numeroAleatorio === 0) {
        console.log("juega1")
        jugador1 = true;
    };

    if (numeroAleatorio === 1) {
        console.log("juega2")
        jugador2 = true;
    };
};

function cambiarTurno() {
    if (jugador1 === true) {
        console.log('juega jugador2');
        jugador1 = false;
        jugador2 = true;
        return;
    } else {
        console.log('juega jugador1');
        jugador2 = false;
        jugador1 = true;
        return;
    }

}

function cambiarImagenFondo(e) {
    if (jugador1) {
        e.target.classList.add("imageO");
  
        cambiarTurno();
    } else if (jugador2) {
        e.target.classList.add("imageX");
  
        cambiarTurno();
    }
}
let botonInicio = document.getElementById("ctaGame");
botonInicio.addEventListener("click", definirTurnoAleatorio);

for (var i = 0; i < columnas.length; i++) {
    columnas[i].addEventListener("click", cambiarImagenFondo);
}