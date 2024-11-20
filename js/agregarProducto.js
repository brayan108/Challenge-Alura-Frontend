
import { conexionAPI } from "./conexionAPI.js";


const formulario = document.querySelector('[data-formulario]');


formulario.addEventListener('submit', e => agregarProducto(e));


async function agregarProducto(e) {
    e.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    const precioNumerico = parseFloat(precio);

    const precioFormateado = new Intl.NumberFormat('es-CO', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(precioNumerico);

    const precioFinal = `$ ${precioFormateado}`;

    try {

        await conexionAPI.enviarProducto(nombre, precioFinal, imagen);

    } catch (error) {
        alert(error);
    }
}
