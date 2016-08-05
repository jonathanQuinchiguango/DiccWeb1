/**
 * Entrada.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        entrada: {
            type: "string"
        }
        , pronunciacion: {
            type: "string"
        }
        , inflexion: {
            type: "string"
        }
        , palabraCompuesta: {
            type: "string"
        }
        , entradaEtiqueta: {
            collection: "entradaEtiqueta"
            , via: "idEntrada"
        }
    }
};