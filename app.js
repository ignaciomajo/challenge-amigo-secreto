// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//                                              CHALLENGE AMIGO SECRETO

// *****     VARIABLES     *****

// Lista para almacenar los nombres ingresados por el usuario
let listaAmigos = [];

// Lista para almacenar los nombres sorteados por el sistema
let amigosSorteados = [];

// *****     FUNCIONES     *****


// Limpiar caja

function limpiarCaja() {
    // Obtener el objeto "input" y dejarlo vacío
    document.getElementById('amigo').value = '';
}

// Activar y desactivar botones 

function desactivarBoton(id) {
    // Agregar atributo "disabled" a la etiqueta del botón
    document.getElementById(id).setAttribute('disabled', true);
}

function activarBoton(id) {
    // Agregar atributo "disabled" a la etiqueta del botón
    document.getElementById(id).removeAttribute('disabled');
}

// Agregar nombres a la lista

function agregarAmigo() {

    let nombreIngresado = document.getElementById('amigo').value
    if (nombreIngresado === '') {
        // Indicar al usuario que debe ingresar un valor válido
        alert('Debe ingresar un nombre, por favor, inténtelo nuevamente');
    } else if (listaAmigos.includes(nombreIngresado)) {
        // Si el nombre ya existe, damos una alerta informando al usuario para que ingrese el nombre de otra forma.
        alert(`¡${nombreIngresado} ya existe!, debes ingresar nombres distintos, intenta agregando la primera letra del apellido de tu amigo/a.`)
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
    return;
}


// Sorteo aleatorio

function sortearAmigo() {
    // Almacenar la longitud de la lista para establecer el máximo índice
    let lenLista = listaAmigos.length;
    // Generar un número pseudo aleatorio a partir de la longitud de la lista
    // Se utiliza floor ya que el índice mínimo es 0
    let indiceAleatorio = Math.floor(Math.random() * lenLista);
    // Definir el amigo secreto
    const amigoSecreto = listaAmigos[indiceAleatorio];
    if (lenLista < 1) {
        alert(`Antes de sortear nombres, debes haber añadido los nombres de tus amigos/as en el sistema`)
    } else if (amigosSorteados.includes(amigoSecreto)) {
        // Si aun faltan amigos por sortear utilizamos recursividad para obtener siempre un amigo secreto distinto
        if (lenLista > amigosSorteados.length) {
        return sortearAmigo();
        } else {
            // Informar al usuario que ya han sido sorteados todos los nombres
            alert('Ya han sido sorteados todos tus amigos/as, ahora cada uno/a tiene su "Amigo Secreto".');
            // Borramos el ultimo nombre del amigo secreto
            let resultado = document.getElementById('resultado');
            resultado.textContent = '';
            // Borramos la lista
            let listaBorrar = document.getElementById('listaAmigos')
            listaBorrar.textContent = ''
            // Desactivamos el botón de sortear y añadir
            desactivarBoton('sortear')
            desactivarBoton('agregar')
            // Mensaje de juego finalizado en el título
            let h2 = document.querySelector('h2')
            h2.innerHTML = 'Juego finalizado'
        }
    } else {
    // Obtener el objeto "result-list"
    let resultado = document.getElementById('resultado');
    // Cambiar el valor de texto por el Amigo Secreto seleccionado aleatoriamente
    resultado.textContent = `Tu amigo/a secreto/a es: ¡${amigoSecreto}!`;
    amigosSorteados.push(amigoSecreto)
    alert('El nombre del amigo/a secreto/a desaparecerá en 5 segundos. ¡Asegúrate de recordarlo!')
    setTimeout(() => {
        resultado.textContent = '';
    }, 5000);
    // Salir de la función
    return amigoSecreto;
    }   
}

activarBoton('agregar');