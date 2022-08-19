const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const crearProductos = (name, imageUrl, price, description) => {
    return fetch(`http://localhost:3000/producto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, imageUrl, price, id: uuid.v4(), description }),

    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
        throw new Error('no fue posible crear un producto')

    })

};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",

    });

};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json())

};

const actualizarProducto = (imageUrl, name, price, description, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageUrl, name, price, description, id: uuid.v4() }),

    }).then(respuesta => respuesta).catch(err => console.log(err));

};

const mostrarProductosNombre = (ubicacion, clasificador, ubicacionCantidad) => {
    productosServicios.listaProductos().then((respuesta) => {
        respuesta.forEach(producto => {
            if (producto.name.toLowerCase().includes(clasificador.toLowerCase())) {
                ubicacion.appendChild(productosServicios.crearNuevaLinea(producto.nombre, producto.precio, producto.image, producto.id))
            }
        })
        if (ubicacion.childElementCount == 0) {
            ubicacionCantidad.textContent = `No se encontraron productos`
        } else {
            if (ubicacion.childElementCount == 1) {
                ubicacionCantidad.textContent = `Se encontró ${ubicacion.childElementCount} producto:`
            } else {
                ubicacionCantidad.textContent = `Se encontraron ${ubicacion.childElementCount} productos:`
            }
        }
    })
}


export const productosServicios = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    mostrarProductosNombre,
}