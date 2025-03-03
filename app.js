let amigos = [];
let sorteado = false; // Variable para controlar la visibilidad de la lista

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim(); // Evitar espacios vacíos

    if (!nombreAmigo) {
        alert('Debes ingresar un nombre válido.');
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    sorteado = false; // Permitir que la lista se muestre nuevamente
    renderizarAmigos();
    console.log(amigos);
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Si ya se sorteó, ocultar la lista
    if (sorteado) {
        listaAmigos.style.display = "none";
        return;
    }

    listaAmigos.style.display = "block"; // Mostrar la lista si hay amigos y aún no se ha sorteado
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;

        // Botón para eliminar manualmente un amigo
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = "❌";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    renderizarAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo para continuar.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Eliminar al amigo sorteado del array
    amigos.splice(indiceSorteado, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;

    
    sorteado = true;
    renderizarAmigos(); 

