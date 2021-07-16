import * as UI from './interfaz.js';
import { API } from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion( e ) {

    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

    if ( artista === '' || cancion === '') {

        UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios.';
        UI.divMensajes.classList.add('error');
        UI.divResultado.innerHTML = '';
        UI.headingResultado.innerHTML = '';

        setTimeout(() => {

            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
            
        }, 3000);
        
        return;

    }


    // Consultar nuestra api
    const busqueda = new API( artista, cancion );
    busqueda.consultarAPI();

    UI.formularioBuscar.reset();

}