import { productosServicios } from "../sevicios/productosServicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const name = document.querySelector('[data-name]').value;
    const url = document.querySelector('[data-url]').value;
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    productosServicios.crearProductos(name, url, descripcion, precio).then(respuesta => {
        window.location.href = "../html/productoAgregado.html"

        console.log(respuesta)

    }).catch(err => alert("ocurrio un error"))


});