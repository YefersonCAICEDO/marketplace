const listaCliente = () => fetch("http://http://localhost:3000/usuario").then((respuesta) => respuesta.json());


const crearCliente = (nombre, email) => {
    console.log(nombre, '...........', email)
    return fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

export const serviciosCliente = {
    crearCliente,
}