// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
//Función para agregar los nombres ingresados dentro de una lista, si el input está vacío se emite una alerta
function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo");
    //console.log(nombreAmigo.value);

    if (nombreAmigo.value == ""){
        alert("Por favor inserta un nombre");
    }
    else{
        listaAmigos.push(nombreAmigo.value);
        limpiarCaja();
        //console.log(listaAmigos);
        //console.log(listaAmigos.length);
        actualizarListadeAmigos();
    }
}

// Función para limpiar el input una vez se agrega un nombre
function limpiarCaja (){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}

// Función para mostrar la lista de amigos dentro de la página
function actualizarListadeAmigos (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (i=0;i<listaAmigos.length;i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);

    }

}

// Función para sortear los nombres y dar un ganador
function sortearAmigo(){
    let sortearNombre = Math.floor(Math.random()*listaAmigos.length);
    //console.log(`El amigo secreto es: ${listaAmigos[sortearNombre]}`);
    

    let nombreSorteado = document.getElementById("resultado");
    nombreSorteado.textContent= (`El amigo secreto es: ${listaAmigos[sortearNombre]}`);
}