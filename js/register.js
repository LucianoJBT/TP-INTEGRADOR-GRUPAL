// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')

            }, false)
        })
})()


//const productos = localStorage.getItem("productos");

// TODO: Registrar en el localstorage el email y la contraseña registradas para poder realizar el login



usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));


const nombreUsuarioIdHTML = document.getElementById("nombreUsuarioId");

if (usuarioActual != null) {
    nombreUsuarioIdHTML.innerHTML = usuarioActual.nombre + "  " + usuarioActual.apellido;
} else {
    nombreUsuarioIdHTML.innerHTML = "Visitante";
}



//form
const formularioRegistro = document.getElementById("formularioRegistro");

//inputs
const validationNombreHTML = document.getElementById("validationNombre");
const validationApellidoHTML = document.getElementById("validationApellido");
const validationCustomEmailHTML = document.getElementById("validationCustomEmail");
const validationCustomPasswordHTML = document.getElementById("validationCustomPassword");
const validationCiudadHTML = document.getElementById("validationCiudad");
const validationDireccionHTML = document.getElementById("validationDireccion");
const validationTelefonoHTML = document.getElementById("validationTelefono");

//usuarios registrados
//


//usuariosRegistradosDesdeStorage = JSON.parse(localStorage.getItem("usuariosRegistrados"));

let usuariosRegistrados;

usuariosRegistrados =  JSON.parse(sessionStorage.getItem("usuariosRegistradosSesion"));

formularioRegistro.addEventListener("submit", (event) => {

    event.preventDefault();



    //ejemplo para formar un dato JSON
    /*let text = '{"employees":[' +
 '{"firstName":"John","lastName":"Doe" },' +
 '{"firstName":"Anna","lastName":"Smith" },' +
 '{"firstName":"Peter","lastName":"Jones" }]}'; */

 //let elemento = `{"item":[{ "id":${null},
   var proximoId = usuariosRegistrados.length +1;

    let elemento = `{[{ "id":${proximoId},"nombre":${validationNombreHTML.value},"apellido":${validationApellidoHTML.value},"email":${validationCustomEmailHTML.value},"password":${validationCustomPasswordHTML.value},"telefono":${validationTelefonoHTML.value},"ciudad":${validationCiudadHTML.value},"direccion":${validationDireccionHTML.value} }]}`;

    let u = usuariosRegistrados.push(elemento);
    var i = 0;
    i = i+1;


    var usuariosRegistrados = JSON.stringify(usuariosRegistradosDesdeSesion);

// almaceno en localStorage para disponibilidad de otras paginas    
localStorage.setItem("usuariosRegistrados", usuariosRegistrados);
// almaceno en localsession
sessionStorage.setItem("usuariosRegistradosSesion", usuariosRegistrados);

});