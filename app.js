let amigos = [];

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
    renderizarAmigos();
    console.log(amigos);
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
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
        alert('Debes agregar al menos un amigo');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    // Eliminar al amigo sorteado del array
    amigos.splice(indiceSorteado, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;

    
    renderizarAmigos();
}

