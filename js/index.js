

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


// function chequearSiGano() {
//     for (let i = 0; i < tatetiActual.length; i++) {
//         for (let j = 0; j < tatetiActual[i].length; j++) {
//             if (i * 3 + (1 + j) !== tatetiActual[i][j]) {
//                 return false;
//             }
//         }
//     }
//     console.log("ganaste");
//     return true;
// }



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


//-----------------------------------Función B-------------------------------------------------------//


//-----------------------------------Arrays Ganadores-------------------------------------------------------//

// let tatetiWin1 = [
//     [tatetiActual[0], tatetiActual[1], tatetiActual[2]],
//     ['', '', ''],
//     ['', '', '']
// ];

// let tatetiWin2 = [
//     [false, false, false],
//     [cuadro4, cuadro5, cuadro6],
//     [false, false, false]
// ];

// let tatetiWin3 = [
//     [false, false, false],
//     [false, false, false],
//     [cuadro7, cuadro8, cuadro9]
// ];

// let tatetiWin4 = [
//     [cuadro1, false, false],
//     [cuadro4, 0, 0],
//     [cuadro6, 0, 0]
// ];

// let tatetiWin5 = [
//     [false, cuadro2, false],
//     [false, cuadro5, false],
//     [false, cuadro7, false]
// ];

// let tatetiWin6 = [
//     [false, false, cuadro3],
//     [false, false, cuadro6],
//     [false, false, cuadro9]
// ];

// let tatetiWin7 = [
//     [cuadro1, false, false],
//     [false, cuadro5, false],
//     [false, false, cuadro9]
// ];

// let tatetiWin8 = [
//     [false, false, cuadro3],
//     [false, cuadro5, false],
//     [cuadro3, false, false]
// ];