

/*
Trabajo Práctico Integrador JS
 al momento de presionar el botón “Resumen”,
 
 deberá mostrar en la sección “Total a Pagar: $”, 
 
 
 el monto correspondiente a la cantidad de tickets a comprar con el descuento correspondiente dependiendo 
 la categoría seleccionada, existen 3 categorías, Estudiante, Trainee, Junior
*/


const usuariosRegistrados = [
    {
        id: 1,
        nombre: "Luciano",
        apellido: "Bellido" ,
        email:  "lucianobellido@mail.com.ar"  ,
        password: "argento1",
        telefono : "1158682669",
        ciudad: "Tandil",
        direccion:"11 de septiembre 820"
    },
    {
        id: 2,
        nombre: "Luisa",
        apellido: "Tolosa" ,
        email:  "luisatolosa@mail.com.ar"  ,
        password: "argento1",
        telefono : "4446903",
        ciudad: "Benito Juarez",
        direccion:"Cahcabuco 532"
    },
    {
        id: 3,
        nombre: "Francisco",
        apellido: "Gomez" ,
        email:  "franciscogomez@mail.com.ar"  ,
        password: "argento1",
        telefono : "240666666",
        ciudad: "Arboleas",
        direccion:"11 de septiembre 820"
    }
];


//convertimos a formato de srtings JSON para pode guardar en el localStorage
var usuariosRegistradosParaStorage = JSON.stringify(usuariosRegistrados);

// almaceno en localStorage para disponibilidad de otras paginas    
localStorage.setItem("usuariosRegistrados", usuariosRegistradosParaStorage);

//leemos los productos desde el strorage para chequear que se recuepren cono uno piensa que se guardaron
let usuariosRegistradosDesdeStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));

sessionStorage.setItem("usuariosRegistradosSesion", usuariosRegistradosParaStorage);

var usuarioActual= [];
usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));


const nombreUsuarioIdHTML = document.getElementById("nombreUsuarioId");

if (usuarioActual != null){
    nombreUsuarioIdHTML.innerHTML = usuarioActual.nombre + "  " + usuarioActual.apellido;
}else{
    nombreUsuarioIdHTML.innerHTML = "Visitante";
}
/*
//convertimos a formato de srtings JSON para pode guardar en el localStorage
var usuariosRegistradosParaStorage = JSON.stringify(usuariosRegistrados);

// almaceno en localStorage para disponibilidad de otras paginas    
localStorage.setItem("usuariosRegistrados", usuariosRegistradosParaStorage);

//leemos los productos desde el strorage para chequear que se recuepren cono uno piensa que se guardaron
let usuariosRegistradosDesdeStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));

sessionStorage.setItem("usuariosRegistradosSesion", usuariosRegistrados);
*/ 
