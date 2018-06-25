# Proyecto TATETI

La idea es armar un proyecto siguiendo el proceso de trabajo de una empresa, desde la presentación de las especificaciones del cliente hasta presentar el proyecto final.

En este caso nuestro cliente solicita un juego de tateti en el cual nos da el entorno visual.

*   index.html
*   css/index.css

## Detalles solicitados

### Jugadores

El juego se compone de 2 participantes:
* jugador1 (humano)
* jugador2 (CPU)

El el jugador que inicia debe ser aleatorio, pero siempre el jugador1 será X y el jugador2 será O.


### Reglas.

Cada jugador solo puede colocar un símbolo por turno y no debe ser sobre una casilla ya jugada.  Por cada X o O ingresado se cambiara el turno del jugador, indicando en pantalla el turno de quien es.

### Ganador.

Para ganar el juego se debe conseguir realizar una línea recta o diagonal por de 3 símbolos, llegado el caso de que se completen las casillas sin lograr el objetivo indicado se declarará empate.

### Fin del juego.

Una vez finalizado el juego ya sea con un ganador o empate, se debe solicitar al jugador si desea volver a jugar o finalizar el juego mostrando una nueva pantalla de gracias por participar.

### Tecnologías

* HTML
* CSS o SASS
* JS

### Extras.

El nombre del jugador no puede contener más de 10 letras y menos de 3
En la carpeta de IMG se encuentran 2 imágenes disponibles para representar los O  y las X del juego.


## Recursos

Se entrega la siguiente estructura:
+ readme.md
+ index.html
+ js
+ img
    + o.png
    + x.png
+ css
    + bulma.min.css
    + style.css

