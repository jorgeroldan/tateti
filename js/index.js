
//-----------------------------------VARIABLES JUEGO -------------------------------------------------------//

// VARIABLES INICIALES

let hayGanador = false;
let jugador1;
let jugador2;
let columnas = document.getElementsByClassName("column");
let numeroAleatorio = Math.floor(Math.random() * 2);

// GUARDA LAS POSICIONES


let cuadro0 = document.getElementById("element1")
let cuadro1 = document.getElementById("element2")
let cuadro2 = document.getElementById("element3")
let cuadro3 = document.getElementById("element4")
let cuadro4 = document.getElementById("element5")
let cuadro5 = document.getElementById("element6")
let cuadro6 = document.getElementById("element7")
let cuadro7 = document.getElementById("element8")
let cuadro8 = document.getElementById("element9")

// GUARDA LOS VALORES DE LAS POSICIONES ("X" o "O")
let valor0 = "Vacio 0"
let valor1 = "Vacio 1"
let valor2 = "Vacio 2"
let valor3 = "Vacio 3"
let valor4 = "Vacio 4"
let valor5 = "Vacio 5"
let valor6 = "Vacio 6"
let valor7 = "Vacio 7"
let valor8 = "Vacio 8"

// El Array "cuadrosTateti" SÓLO se consultará para saber cuál "clase" (X o O) tiene cada cuadro.
// El Array "tatetiActual" será el guardará el valor de cada jugada en la grilla (X o O).

let cuadrosTateti = [cuadro0,cuadro1, cuadro2, cuadro3, cuadro4, cuadro5, cuadro6, cuadro7, cuadro8]
let tatetiActual = [valor0, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8];

//----------------------------------- Función Define Turnos Aleatorios -------------------------------------------------------//


function definirTurnoAleatorio() {
    if (numeroAleatorio === 0) {
        console.log("juega1")
        jugador1 = true;
    };
    if(numeroAleatorio === 1){
        console.log("juega2")
        jugador2 = true;
        colocaComputadora();
    };
};
//-----------------------------------validar y agregar ficha-------------------------------------------------------//

function cambiarImagenFondo(e) {
    if (jugador1) {
          if( e.target.classList.contains("imageO") || e.target.classList.contains("imageX")   ){
            alert("elige una posicion correcta")
          }
          else{
            e.target.classList.add("imageO");
            colocaComputadora();
              iniciar();
          }
    }
    else if (jugador2) {
          if( e.target.classList.contains("imageX") || e.target.classList.contains("imageO") ){
            alert("nononono")
          }
          else{
            e.target.classList.add("imageX");
            iniciar();
          }
    }
}
//-----------------------------------Actualizar Valores de los Cuadros-------------------------------------------------------//

function actualizarValoresTateti() {
// Esta funciín actualiza las JUGADAS del TATETI.
// PRIMERO: Revisa si los cuadros tiene nuevas clases asignadas que indiquen "X" o "O"
// SEGUNDO: Si esas clases están asignadas, guarda el valor en el Array "TatetiActual"

for(i = 0; i < tatetiActual.length; i++) {

        if (cuadrosTateti[i].classList.contains("imageX")) {

            tatetiActual[i] = "X";

        } else if (cuadrosTateti[i].classList.contains("imageO")) {

            tatetiActual[i] = "O";


        }
    }

}


// ------------------ movimiento automatico de la computadora  --------- //

function colocaComputadora(){
        let numeroAleatorio = Math.floor(Math.random() * 8);
        if( columnas[numeroAleatorio].classList.contains("imageX") || columnas[numeroAleatorio].classList.contains("imageO") ){
          colocaComputadora();
        } else{
          columnas[numeroAleatorio].classList.add("imageX");
          iniciar();
        }
}


//-----------------------------------Función comparar -------------------------------------------------------//


function chequeaSiGanoTateti() {

    if (tatetiActual[0] === tatetiActual[1] && tatetiActual[1] === tatetiActual[2]){
        console.log('ganaste');
        hayGanador = true;
    } else if (tatetiActual[3] === tatetiActual[4] && tatetiActual[4] === tatetiActual[5]){
        console.log('ganaste');
        hayGanador = true;
        } else if (tatetiActual[6] === tatetiActual[7] && tatetiActual[7] === tatetiActual[8]){
            console.log('ganaste');
            hayGanador = true;
            } else if (tatetiActual[0] === tatetiActual[3] && tatetiActual[3] === tatetiActual[5]) {
                console.log('ganaste');
                hayGanador = true;
                } else if (tatetiActual[1] === tatetiActual[4] && tatetiActual[4] === tatetiActual[6]) {
                    console.log('ganaste');
                    hayGanador = true;
                    } else if (tatetiActual[2] === tatetiActual[5] && tatetiActual[5] === tatetiActual[8]) {
                        console.log('ganaste');
                        hayGanador = true;
                        } else if (tatetiActual[0] === tatetiActual[4] && tatetiActual[4] === tatetiActual[8]) {
                            console.log('ganaste');
                            hayGanador = true;
                            } else if (tatetiActual[2] === tatetiActual[4] && tatetiActual[4] === tatetiActual[6]) {
                                console.log('ganaste');
                                hayGanador = true;
                                }
    ganador()
}

function ganador(){
    if (hayGanador && jugador1){
        console.log('gana jugador 1');
        alert("GANA JUGADOR 1")
    } else if (hayGanador && jugador2) {
        console.log('gana jugador 2');
        alert("GANA JUGADOR 2")
    }
}

//-----------------------------------Chequea Empate-------------------------------------------------------//

// function chequearEmpate(){
//     alert("empate")
//
//
//
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
    }
}

function resetGame(){
      location.reload(true);
}
// ------------------ BOTON INICIO & Event Listener para JUGADA del USUARIO --------- //

let botonInicio = document.getElementById("ctaGame");
botonInicio.addEventListener("click", definirTurnoAleatorio);

let botonReset = document.getElementById("reset-button");
botonReset.addEventListener("click", resetGame);


  for (var i = 0; i < columnas.length; i++) {
      columnas[i].addEventListener("click", cambiarImagenFondo);
}



function iniciar(){
      actualizarValoresTateti();
      chequeaSiGanoTateti();
      // chequearEmpate();
      cambiarTurno();
}
