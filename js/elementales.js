const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonElementalJugador = document.getElementById('boton-elemental')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonPlanta = document.getElementById('boton-planta')
const botonLuz = document.getElementById('boton-luz')
const botonOscuridad = document.getElementById('boton-oscuridad')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarElemental = document.getElementById('seleccionar-elemental')
const inputHidronimo = document.getElementById('hidrónimo')
const inputEmberix = document.getElementById('emberix')
const inputFloralith = document.getElementById('floralith')
const inputRadiance = document.getElementById('radiance')
const inputNocturnix = document.getElementById('nocturnix')
const spanElementalJugador = document.getElementById('elemental-jugador')
const spanElementalEnemigo = document.getElementById('elemental-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionReiniciar = document.getElementById('reiniciar')


let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    botonElementalJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonPlanta.addEventListener('click', ataquePlanta)
    botonLuz.addEventListener('click', ataqueLuz)
    botonOscuridad.addEventListener('click', ataqueOscuridad)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarElemental.style.display = 'none'
    if(inputHidronimo.checked){
        spanElementalJugador.innerHTML = 'Hidrónimo'
    }else if(inputEmberix.checked){
        spanElementalJugador.innerHTML = 'Emberix'
    }else if(inputFloralith.checked){
        spanElementalJugador.innerHTML = 'Floralith'
    }else if(inputRadiance.checked){
        spanElementalJugador.innerHTML = 'Radiance'
    }else if(inputNocturnix.checked){
        spanElementalJugador.innerHTML = 'Nocturnix'
    }else{
        alert('Debes elegir un elemental')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let elementalAleatorio = aleatorio(1, 5)
    if(elementalAleatorio== 1){
        spanElementalEnemigo.innerHTML = 'Hidrónimo'
    }else if(elementalAleatorio== 2){
        spanElementalEnemigo.innerHTML = 'Emberix'
    }else if(elementalAleatorio== 3){
        spanElementalEnemigo.innerHTML = 'Floralith'
    }else if(elementalAleatorio== 4){
        spanElementalEnemigo.innerHTML = 'Radiance'
    }else{
        spanElementalEnemigo.innerHTML = 'Nocturnix'
    }
}

function ataqueFuego(){
    ataqueJugador = 'fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'agua'
    ataqueAleatorioEnemigo()
}
function ataquePlanta(){
    ataqueJugador = 'planta'
    ataqueAleatorioEnemigo()
}
function ataqueLuz(){
    ataqueJugador = 'luz'
    ataqueAleatorioEnemigo()
}
function ataqueOscuridad(){
    ataqueJugador = 'oscuridad'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1, 5)

    if ( ataqueAleatorio == 1){
        ataqueEnemigo = 'fuego'
    }else if( ataqueAleatorio == 2){
        ataqueEnemigo = 'agua'
    }else if( ataqueAleatorio == 3){
        ataqueEnemigo = 'planta'
    }else if( ataqueAleatorio == 4){
        ataqueEnemigo = 'luz'
    }else if( ataqueAleatorio == 5){
        ataqueEnemigo = 'oscuridad'
    }  
    
    combate()
}

function crearMensaje(resultado){

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigor = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigor.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigor)
}

function crearMensajeFinal(resultadoFinal){
        sectionMensajes.innerHTML =  resultadoFinal
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonPlanta.disabled = true
        botonLuz.disabled = true
        botonOscuridad.disabled = true
        sectionReiniciar.style.display = 'block'
    }

function combate(){
    

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'fuego' && ataqueEnemigo == 'planta'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'agua' && ataqueEnemigo == 'fuego'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'planta' && ataqueEnemigo == 'agua'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'planta' && ataqueEnemigo == 'luz'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'luz' && ataqueEnemigo == 'oscuridad'){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'oscuridad' && ataqueEnemigo == 'luz'){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'luz' && ataqueEnemigo == 'fuego'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'oscuridad' && ataqueEnemigo == 'planta'){
        crearMensaje('Ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'oscuridad' && ataqueEnemigo == 'agua'){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'luz' && ataqueEnemigo == 'agua'){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'agua' && ataqueEnemigo == 'luz'){
        crearMensaje('Empate')
    }else if(ataqueJugador == 'agua' && ataqueEnemigo == 'oscuridad'){
        crearMensaje('Empate')
    }else{
        crearMensaje('Perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('Felicitaciones Ganaste 🎉')
    }else if(vidasJugador == 0){
        crearMensajeFinal('Lo siento perdiste ')
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max - min +1) + min)
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)