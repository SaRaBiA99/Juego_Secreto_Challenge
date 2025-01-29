// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){

    let nombre = document.querySelector('#amigo').value;
    if(nombre === ""){
        alert("El campo está vacio");
    }
    else{
        // Actualizar el array de amigos
        amigos.push(nombre);

        // Limpiar el campo de entrada
        document.querySelector('#amigo').value = "";

        resultadoAmigo();
    }

}


function resultadoAmigo(){
    let lista = document.querySelector('#resultado');

    // Limpiar la lista existente
    lista.innerHTML = "";
    for(let x= 0; x<amigos.length; x++){
        let agregar = document.createElement('li');
        agregar.textContent = amigos[x];
        lista.appendChild(agregar);
        console.log(amigos)
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No se ha ingresado ningún nombre, Intentalo de nuevo");
    }
    else{
        let numeroSorteado = Math.floor(Math.random()*amigos.length);
        let amigoSeleccionado = amigos[numeroSorteado];
        document.querySelector('#resultado').innerHTML=`El amigo seleccionado es: ${amigoSeleccionado}`;
    }
}