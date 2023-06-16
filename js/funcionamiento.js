//Función para encriptar texto
function encriptar(){

var frase = document.getElementById("areaEscritura").value.toLowerCase();

var encriptador = frase.replace(/e/img, "enter");
var encriptador = encriptador.replace(/o/img, "ober");
var encriptador = encriptador.replace(/i/img, "imes");
var encriptador = encriptador.replace(/a/img, "ai");
var encriptador = encriptador.replace(/u/img, "ufat");

document.getElementById("mensajeModificado").innerHTML = encriptador;

}


//Función para desencriptar texto
function desencriptar(){

    var frase = document.getElementById("areaEscritura").value.toLowerCase();
    
    var desencriptador = frase.replace(/enter/img, "e");
    var desencriptador = desencriptador.replace(/ober/img, "o");
    var desencriptador = desencriptador.replace(/imes/img, "i");
    var desencriptador = desencriptador.replace(/ai/img, "a");
    var desencriptador = desencriptador.replace(/ufat/img, "u");
    
    document.getElementById("mensajeModificado").innerHTML = desencriptador;
    
    }


    //Función para copiar texto
    function copiar(){

        var contenido = document.querySelector("#mensajeModificado");
        contenido.select();
        document.execCommand("copy");

    }


    function cambiarContenido() {

        var cambio = document.querySelector('.contenedor-secundario');

        // Crea un elemento <textarea> y configura su contenido y ID
        var textarea = document.createElement('textarea');
        textarea.id = "mensajeModificado";
        textarea.class = "mensajemodificado";
        textarea.cols = 40;
        textarea.rows = 20;
        textarea.style.border = "none";
        textarea.style.resize = "none";

        //Crear el elemento button de copiado
        var boton = document.createElement('button');
        boton.id = "copiado";
        boton.class = "btncopiar";
        boton.textContent = "Copiar";
        // Modificar las propiedades de CSS del div secundario
        boton.style.backgroundColor = "white";
        boton.style.borderColor = "#0A3871";
        boton.style.marginTop = "50px";
        // Elimina los elementos dentro del contenedor secundario
        while (cambio.firstChild) {
            cambio.removeChild(cambio.firstChild);
        }
      
        // Agrega el textarea al contenedor secundario
        cambio.appendChild(textarea);
        cambio.appendChild(boton);

        var btn3 = document.querySelector("#copiado");
        btn3.onclick = copiar;

        encriptar();
      }