import { serviciosCliente } from "../js/agregar-usuario.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, email)
    serviciosCliente
        .crearCliente(nombre, email)
        .then(() => {
            window.location.href = "../html/login.html";
        })
        .catch((err) => console.log(err));
});