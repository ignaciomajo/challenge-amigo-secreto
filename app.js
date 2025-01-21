// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//                                              CHALLENGE AMIGO SECRETO

// *****     VARIABLES     *****

// Lista para almacenar los nombres ingresados por el usuario
let listaAmigos = [];





// *****     FUNCIONES     *****

// Agregar nombres a la lista

function agregarNombre() {

    let nombreIngresado = document.getElementById('amigo').value
    if (nombreIngresado === '') {
        alert('Debe ingresar un nombre, por favor, inténtelo nuevamente');
    } else {
        listaAmigos.push(nombreIngresado);
    }
}

// Validar entrada

// Visualizar lista

// Sorteo aleatorio