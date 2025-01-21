// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//                                              CHALLENGE AMIGO SECRETO

// *****     VARIABLES     *****

// Lista para almacenar los nombres ingresados por el usuario
let listaAmigos = [];


// *****     FUNCIONES     *****


// Limpiar caja

function limpiarCaja() {
    // Obtener el objeto "input"
    let valorCaja = document.getElementById('amigo');
    // Limpar el valor para dejarlo vacío
    valorCaja.value = '';
}

// Agregar nombres a la lista

function agregarAmigo() {

    let nombreIngresado = document.getElementById('amigo').value
    if (nombreIngresado === '') {
        // Indicar al usuario que debe ingresar un valor válido
        alert('Debe ingresar un nombre, por favor, inténtelo nuevamente');
    } else {
        // Agregar nombre ingresado por el usuario a la lista de amigos
        listaAmigos.push(nombreIngresado);
        // Limpiar el contenido de la caja de texto
        limpiarCaja();
        // Obtener el objeto "lista" del HTML (ul)
        const listaImprimir = document.getElementById('listaAmigos');
        // Crear "Nodes" (enumeración) en la lista
        const li = document.createElement('li');
        // Cambiar el contenido del texto del "Node" creado con el nombre ingresado 
        li.textContent = nombreIngresado;
        // Agregar el "Node" a la lista ul
        listaImprimir.append(li);
    }
    console.log(listaAmigos)
    
}


// Sorteo aleatorio

function sortearAmigo() {
    // Almacenar la longitud de la lista para establecer el máximo índice
    let lenLista = listaAmigos.length;
    console.log(lenLista);
    // Generar un número pseudo aleatorio a partir de la longitud de la lista
    // Se utiliza floor ya que el índice mínimo es 0
    let indiceAleatorio = Math.floor(Math.random() * lenLista);
    console.log(indiceAleatorio);
    console.log(listaAmigos[indiceAleatorio]);

    return listaAmigos[indiceAleatorio]
    
}