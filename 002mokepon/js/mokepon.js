function iniciarJuego(){

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
}

function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatihueya = document.getElementById('Ratihueya')
    let spanMascotaJugador = document.getElementById ('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatihueya.checked){
        spanMascotaJugador.innerHTML = "Ratihueya"
    } else {
        alert('Selecciona tu mascota')
    }

    seleccionarMascotaEnemigo()

}

function aleatorio (min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

function seleccionarMascotaEnemigo(){
    let enemigoAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')    
    if (enemigoAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (enemigoAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratihueya'
    }
}

window.addEventListener('load',iniciarJuego)