// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//                                              CHALLENGE AMIGO SECRETO

// *****     VARIABLES     *****

// Lista para almacenar los nombres ingresados por el usuario
let listaAmigos = [];





// *****     FUNCIONES     *****


// Limpiar caja

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = ''
}

// Agregar nombres a la lista

function agregarAmigo() {

    let nombreIngresado = document.getElementById('amigo').value
    if (nombreIngresado === '') {
        alert('Debe ingresar un nombre, por favor, inténtelo nuevamente');
    } else {
        listaAmigos.push(nombreIngresado);
        imprimirLista();
    }
    console.log(listaAmigos)
    
}

// Validar entrada

// Visualizar lista



// Sorteo aleatorio