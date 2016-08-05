/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    
     var entradaDiccionario = {
       entrada: "Diccionario"
        , inflexion: "ninguna"
        , palabraCompuesta: "ninguna"
        
    }
    var entradaCarro = {
        entrada: "Carro"
        , inflexion: "ninguna"
        , palabraCompuesta: "ninguna"
    }
    

        //Funciones para crear base

    function crearEntrada(entrada) {
        if (entrada) {
            Entrada
                .create(entrada)
                .exec(function respuestaServidor(errorServidor, entradaCreado) {
                    if (errorServidor) {
                        console.log('Hubo un error del servidor');
                        console.log(errorServidor);
                    } else {
                        console.log('Se creo el entrada: ' + entradaCreado.entrada);
                    }

                });
        } else {
            console.log('No envio un usuario, ejecute la funcion con un usuario');
        }

    }

    crearEntrada(entradaDiccionario);
crearEntrada(entradaCarro);
    
    
    
    
    
    
  cb();
};
