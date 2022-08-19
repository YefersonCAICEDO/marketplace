import { productosServicios } from "../sevicios/productosServicios.js";

const nuevoProducto = (name, price, imageUrl, id) => {

    const card = document.createElement("div");

    const contenido = `

        <img  src="${imageUrl}"></img>
        
        <h3>${name}</h3>
            
        <p>${price}<p>
        <button type=""button id="${id}" class="eli"> <a> Eliminar</a> </button> 
        <a href="../html/editar.html?id=${id}"class="eli" >Editar</a>  <br>
        <a href="">Ver producto</a> 
        

    `;
    card.classList.add("card")
    card.innerHTML = contenido;
    const btn = card.querySelector("button")

    btn.addEventListener("click", () => {
        const id = btn.id
        productosServicios.eliminarProducto(id).then(respuesta => {
            console.log(respuesta)

        }).catch(err => alert("ocurrio un error"))

    });


    return card;
};

const productos = document.querySelector('[data-productos]')

const render = async() => {
    try {
        const listaProductos = await productosServicios.listaProductos()
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.id))
        })
    } catch (erro) {
        console.log(erro)
    }
}

render();