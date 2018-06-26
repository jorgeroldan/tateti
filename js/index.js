

//-----------------------------------VARIABLES JUEGO -------------------------------------------------------//
let cuadro0 = document.getElementById("element1")
cuadro1 = cuadro1.style.backgroundImage;
let cuadro1 = document.getElementById("element2")
cuadro2 = cuadro2.style.backgroundImage;
let cuadro3 = document.getElementById("element3")
cuadro3 = cuadro3.style.backgroundImage;
let cuadro4 = document.getElementById("element4")
cuadro4 = cuadro4.style.backgroundImage;
let cuadro5 = document.getElementById("element5")
cuadro5 = cuadro5.style.backgroundImage;
let cuadro6 = document.getElementById("element6")
cuadro6 = cuadro6.style.backgroundImage;
let cuadro7 = document.getElementById("element7")
cuadro7 = cuadro7.style.backgroundImage;
let cuadro8 = document.getElementById("element8")
cuadro8 = cuadro8.style.backgroundImage;
let cuadro9 = document.getElementById("element9")
cuadro9 = cuadro9.style.backgroundImage;
let tatetiActual = [cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8, cuadro9]

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

//-----------------------------------Función comparar -------------------------------------------------------//


function chequearSiGano() {
    if (tatetiActual[0] === tatetiActual[1] === tatetiActual[2]){
        else if (tatetiActual[3] === tatetiActual[4] === tatetiActual[5]){
            else if (tatetiActual[6] === tatetiActual[7] === tatetiActual[8])
        }
        console.log("ganaste");
    }
    return false;
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

//-----------------------------------Función A -------------------------------------------------------//





//-----------------------------------Función B-------------------------------------------------------//