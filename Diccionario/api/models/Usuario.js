/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    attributes: {
        correo: {
            type: "email",
            required: true, 
            unique: true
        }
        , password: {
            type: "string",
            minLength: 6,
            required: true
        }
        
    }
    
};