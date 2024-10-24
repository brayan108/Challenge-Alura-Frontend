
import { conexionAPI } from "./conexionAPI.js";


const contenedorProductos = document.querySelector('.lista-productos__container');


contenedorProductos.addEventListener('click', async (event) => {
    
    const botonEliminar = event.target.closest('[data-eliminar]');
      
        if (botonEliminar) {
            try {

                const respuesta = confirm("¿Estás seguro de que deseas eliminar este producto?");
    
                if (respuesta) {
    
                    const productoId = botonEliminar.getAttribute('data-id');
                    await conexionAPI.eliminarProducto(productoId);
                    location.reload();
                }
                
    
            } catch (error) {
                console.log('Error al eliminar el producto:', error);
        }
    }
});
