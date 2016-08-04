/**
 * EntradaEtiqueta.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        //Claves foereanas
        idUsuario: {
            model: "usuario"
        }
        , idEtiqueta: {
            model: "etiqueta"
        }
        //clave primaria
        , contexto: {
            collection: "contexto"
            , via: "idEntradaEtiqueta"
        }
    }
};