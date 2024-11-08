
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
    resultados= "¡HABÉIS EMPADADO!"

}else if (
    (miOpcion === "piedra" && opcionOrdenador === "tijera") 
){
    resultados= "¡GANASTE!, el ordenador ha escogido " + opcionOrdenador
    contadorUsuario ++
}else if (   
    (miOpcion === "papel" && opcionOrdenador === "piedra") 
){
    resultados="¡GANASTE! el ordenador ha escogido " + opcionOrdenador
    contadorUsuario ++
}else if (   
    (miOpcion === "tijera" && opcionOrdenador === "papel")         
){
    resultados="¡GANASTE! el ordenador ha escogido " + opcionOrdenador
    contadorUsuario ++


}else{
    resultados="¡PERDISTE! el ordenador ha escogido " + opcionOrdenador
    contadorOrdenador ++
}
 document.getElementById("resultado-final").textContent= resultados
 document.getElementById("contador-usuario").textContent= "Tus puntos: " + contadorUsuario
 document.getElementById("contador-ordenador").textContent= "Puntos de la máquina: " + contadorOrdenador
 
}
