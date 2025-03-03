let amigo = [];

function agregarAmigo () {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo) {
        return;
    }

amigo.push(nombreAmigo);
inputAmigo.value = '';
inputAmigo.focus();
rendeizarAmigos();
console.log(amigo);
}

function rendeizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigo[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert('Debes agregar al menos dos amigos');
        return;
    }

let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
let resultado = document.getElementById('resultado');
resultado.innerHTML = "Tu amigo secreto es" + amigoSorteado;    

let limpiarLista = document.getElementById('limpiarLista');
limpiarLista.innerHTML = '';
}
