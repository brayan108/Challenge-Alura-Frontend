
const botonLimpiar = document.getElementById('limpiar');


botonLimpiar.addEventListener('click', (e) => {

    e.preventDefault();
    
    document.querySelector('[data-nombre]').value = '';
    document.querySelector('[data-precio]').value = '';
    document.querySelector('[data-imagen]').value = '';
});
