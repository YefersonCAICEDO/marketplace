var correo = document.querySelector("#correo");
var contraseña = document.querySelector("#contraseña");
var boton_entrar = document.querySelector("#btn_entrar");
let body_login = document.querySelector("#body_login");


boton_entrar.addEventListener('click', function() {

    if (correo.value == 'yeferson@gmail.com' && contraseña.value == 'yeferson') {
        alert("bienvenido");
        administrador()
    }
    if (correo.value != 'yeferson@gmail.com' && contraseña.value != 'yeferson') {
        alert("correo y/o contraseña incorrectos")

    }
});

function administrador() {
    body_login.style.display = 'none';

}