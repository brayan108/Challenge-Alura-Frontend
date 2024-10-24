
import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]");


export default function construyeCard(id, nombre, precio, imagen) {
    const card = document.createElement('div');
    card.className = 'lista-productos_card';

    card.innerHTML = `<header><p class="lista-productos_card-titulo">${nombre}</p></header>
                        <img src="${imagen}" alt="Imagen">
                            <div class="lista-productos_card__footer">
                                <p class="lista-productos_card-precio">${precio}</p>
                                <button data-eliminar data-id="${id}"><i class="bi bi-trash-fill"></i></button>
                            </div> `;

    return card;
}



async function listaProductos() {
    try {
        const listaAPI = await conexionAPI.listaProductos();

        listaAPI.forEach(producto => 
            lista.appendChild(construyeCard(producto.id, producto.nombre, producto.precio, producto.imagen)));

    } catch (error) {
        lista.innerHTML=`<h2>No fue posible cargar la lista de productos</h2>`;
    }
}


listaProductos();