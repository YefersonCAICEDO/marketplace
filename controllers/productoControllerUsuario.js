const nuevaLinea = (name, price, imageUrl) => {
    const card = document.createElement("div");

    const contenido = `

        <img  src="${imageUrl}"></img>
        <h3>${name}</h3>   
        <p>${price}<p>
        <a href="">Ver producto</a>


    `;
    card.classList.add("card")
    card.innerHTML = contenido;

    return card;
};

const productos = document.querySelector('[data-productos]')

const http = new XMLHttpRequest();
http.open("GET", "https://630ab2bced18e82516493888.mockapi.io/api/v1/producto");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(producto => {
        const nuevaLinea2 = nuevaLinea(producto.name, producto.price, producto.imageUrl);
        productos.appendChild(nuevaLinea2);
    });
};
