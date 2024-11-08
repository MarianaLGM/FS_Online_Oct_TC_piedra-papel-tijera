
let contadorUsuario= 0;
let contadorOrdenador=0;
let resultados=""

const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");

botonPiedra.addEventListener("click", function() {
    inicioJuego ("piedra");
});
botonPapel.addEventListener("click", function() {
    inicioJuego ("papel");
});
botonTijera.addEventListener("click", function() {
    inicioJuego ("tijera");
});


function inicioJuego (miOpcion){
    const opciones=["piedra", "papel", "tijera"]
    const opcionOrdenador = opciones[Math.floor(Math.random()*3)]   

if (miOpcion===opcionOrdenador){
    resultados= "Empate"

}else if (
    (miOpcion === "piedra" && opcionOrdenador === "tijera") 
){
    resultados= "Ganaste"
    contadorUsuario ++
}else if (   
    (miOpcion === "papel" && opcionOrdenador === "piedra") 
){
    resultados="Ganaste"
    contadorUsuario ++
}else if (   
    (miOpcion === "tijera" && opcionOrdenador === "papel")         
){
    resultados="Ganaste"
    contadorUsuario ++


}else{
    resultados="Perdiste"
    contadorOrdenador ++
}
 document.getElementById("resultado-final").textContent= resultados
 document.getElementById("contador-usuario").textContent= "Tus puntos: " + contadorUsuario
 document.getElementById("contador-ordenador").textContent= "Puntos de la máquina: " + contadorOrdenador
 
}