import * as UI from './interfaz.js';

export class API {

    constructor( artista, cancion ) {

        this.artista = artista;
        this.cancion = cancion;

    }

    consultarAPI() {

        const key = '6794658b3da3496962a6080ab2b2cf25';

        const urlCanciones = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${this.cancion}&q_artist=${this.artista}&apikey=${key}`;
        const url = `https://api.allorigins.win/get?url=${encodeURIComponent(urlCanciones)}`;
        
        fetch( url )
            .then( response => response.json())
            .then( resultado => {
                const json = JSON.parse(resultado.contents);
                const { lyrics_body } = json.message.body.lyrics;

                UI.divResultado.innerHTML = lyrics_body;
                UI.headingResultado.innerHTML = `Letra de la canción ${this.cancion} de ${this.artista}`;

            })
            .catch((error) => console.log(error));

    }

}