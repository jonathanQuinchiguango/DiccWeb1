/**
 * Contexto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        utilizacion: {
            type: "string"
        }
        , contextoUtilizacion: {
            type: "integer"
        }
        , definicion: {
            type: "string"
        }
        //Clave foranea
        
        , idEntradaEtiqueta: {
            model: "entradaEtiqueta"
        }
        //clave primaria
        
        , ejemplo: {
            collection: "ejemplo"
            , via: "idContexto"
        }
    }
};