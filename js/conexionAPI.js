

async function listaProductos() {

    try {        
        const conexion = await fetch('http://localhost:3001/Productos', {
            method : 'GET',
            headers: {
                "Content-type":"application/json"
            }
        });

        const conexionConvertida = await conexion.json();
        
        return conexionConvertida;

    } catch (error) {
        console.log(error);   
    }
}




async function enviarProducto(nombre, precio, imagen) {
    try {
        
        const conexion = await fetch('http://localhost:3001/Productos', {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });

        if (!conexion.ok) {
            throw new Error("No fue posible enviar el video");
        }

        const conexionConvertida = await conexion.json();

        return conexionConvertida;

    } catch (error) {
        console.log(error);
    }
}



async function eliminarProducto(id) {
    try {
        const conexion = await fetch(`http://localhost:3001/Productos/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!conexion.ok) {
            const errorText = await conexion.text(); 
            throw new Error(`Error en el servidor: ${conexion.status} - ${errorText}`);
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;

    } catch (error) {
        console.log(error);
    }
}





export const conexionAPI 
    = { listaProductos, enviarProducto, eliminarProducto }
