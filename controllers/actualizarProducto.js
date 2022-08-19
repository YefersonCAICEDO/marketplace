import { productosServicios } from "../sevicios/productosServicios.js";

const formulario = document.querySelector('[data-form]');

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        window.location.href = "/html/error.html"

    }

    const imageUrl = document.querySelector('[data-url]');
    const name = document.querySelector('[data-name]');
    const price = document.querySelector('[data-precio]');
    const description = document.querySelector('[data-descripcion]')

    productosServicios.detalleProducto(id).then(producto => {
        imageUrl.value = producto.imageUrl;
        name.value = producto.name;
        price.value = producto.price;
        description.value = producto.description;
    });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imageUrl = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-precio]').value
    const description = document.querySelector('[data-descripcion]').value

    productosServicios.actualizarProducto(imageUrl, name, price, description, id).then(() => {
        window.location.href = "/html/actualizacionExitosa.html";
    })

});