/**
 * Contexto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        utilizacion: {
            type: "integer"
        }
        , etiquetaMorfologica: {
            type: "string"
        }
        , contextoUtilizacion: {
            type: "string"
        }
        , definicion: {
            type: "string"
        }, //Claves foereanas
        idEntrada: {
            model: "entrada"
        }
    }
};