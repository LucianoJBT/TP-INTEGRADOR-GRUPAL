

const formularioLogin = document.getElementById("formularioLogin");

const userEmail = document.getElementById("email");
const userPass = document.getElementById("pass");

const errorEmail = document.getElementById("errorEmail");
const errorPass = document.getElementById("errorPass");
const alertSuccess = document.getElementById("alertSuccess");


/*disponibilidad de usuarios*/

let usuariosRegistradosDesdeStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));

let usuarioRegistradoDesdeSesion = sessionStorage.getItem("usuariosRegistradosSesion");


usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));


const nombreUsuarioIdHTML = document.getElementById("nombreUsuarioId");

if (usuarioActual != null){
    nombreUsuarioIdHTML.innerHTML = usuarioActual.nombre + "  " + usuarioActual.apellido;
}else{
    nombreUsuarioIdHTML.innerHTML = "Visitante";
}


/*
var usuarioActual= [];
usuarioActual = sessionStorage.getItem("usuarioActual");
*/

/*comprueba la existencia del item  a travez de su user devuelve itesm o null*/
const existeUsuario = (userEmail) => {
    // alert ("hola esxiste usuario " + userEmail);
    retorno = null;
    usuariosRegistradosDesdeStorage.forEach(item => {
        if (item.email === userEmail) {
            return item;           
        }
    });
    return retorno;
};

function existeUsuarioRegistrado( userEmail){

    retorno = null;

    for (var i =0 ; i < usuariosRegistradosDesdeStorage.length; i ++){

        if ((usuariosRegistradosDesdeStorage[i].email) === userEmail){
            retorno = usuariosRegistradosDesdeStorage[i];
            break;
        }
    }
   /* usuariosRegistradosDesdeStorage.forEach(item => {
        if (item.email === userEmail) {
            return item;           
        }
    });*/
    return retorno;

}

/* comprueba la correspondencia de la password  */
const chequearContraseña = (item, passUser) => {

    if (item.password === passUser) return true

    return false;
}


// Arrow Function
const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso: ------>    onclick='window.location.href ='../index.html'";


};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.htmlId.classList.remove("d-none");
        item.htmlId.textContent = item.mensaje;
    });
    mensajesError = [];
};


var mensajesError = [];

/* si hay error de input muestra mensajes de error  caso ontrario inicia sesion con usuario*/
formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //chequeo usuarioRegistradoDesdeSesion
   // let usuario = existeUsuario(userEmail.value);
    let usuario = existeUsuarioRegistrado (userEmail.value);  

    if (usuario == null) {
        userEmail.classList.add("is-invalid");
        mensajesError.push({
            htmlId: errorEmail,
            mensaje: "El nombre de usuario es inválido"
        })

    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        errorEmail.classList.add("d-none");

    }


    if (usuario == null || (usuario != null && userPass.value != usuario.password)) {
        userPass.classList.add("is-invalid");
        mensajesError.push({
            htmlId: errorPass,
            mensaje: "La contraseña es incorrecta"
        })
    } else {
        userPass.classList.remove("is-invalid");
        userPass.classList.add("is-valid");
        errorPass.classList.add("d-none");
    }


    //chequeo  de password



    //verificar errores 
    if (mensajesError.length != 0) {
        pintarMensajeError(mensajesError);
        //return;

    } else {
    pintarMensajeExito();
 
 //se agrega una redireccion a la pagina inicial


    sessionStorage.setItem("usuarioActual", JSON.stringify(usuario ));


    //redireccionar y dejar ver mensaje exitoso  delay de 5 segundos

//     window.location.href = "../index.html";

    }
    //iniciar sesion 

});


 // existeUsuario("luisatolosa@mail.com.ar");

 /*
//convertimos a formato de srtings JSON para pode guardar en el localStorage
var usuariosRegistradosParaStorage = JSON.stringify(usuariosRegistrados);

// almaceno en localStorage para disponibilidad de otras paginas    
localStorage.setItem("usuariosRegistrados", usuariosRegistradosParaStorage);

//leemos los productos desde el strorage para chequear que se recuepren cono uno piensa que se guardaron
let usuariosRegistradosDesdeStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));
*/ 