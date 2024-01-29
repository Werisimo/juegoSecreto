let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el nùmero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El nùmero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El nùmero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
   
    
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  // si ya mostramos todos los nùmeros 
  if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los nùmeros posibles');
    } else {
        // Si el nùmero generado està incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del nùmero secreto');
    asignarTextoElemento('p', `indica un nùmero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo
    condicionesIniciales();
    // generar el nùmero aleatorio
    // reiniciar el nùmero de intentos
   // deshabilitar el botòn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

    condicionesIniciales();

