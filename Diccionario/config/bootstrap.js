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
module.exports.bootstrap = function (cb) {
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
            Entrada.create(entrada).exec(function respuestaServidor(errorServidor, entradaCreado) {
                if (errorServidor) {
                    console.log('Hubo un error del servidor');
                    console.log(errorServidor);
                }
                else {
                    console.log('Se creo el entrada: ' + entradaCreado.entrada);
                }
            });
        }
        else {
            console.log('No envio un usuario, ejecute la funcion con un usuario');
        }
    }
    //crearEntrada(entradaDiccionario);
    //crearEntrada(entradaCarro);
    //INGRESO DE CONTEXTOS A LA BASE DE DATOS    
    var contextoMasculino = {
        utilizacion: 1
        , etiquetaMorfologica: "Masculino"
        , contextoUtilizacion: "Ninguno"
        , definicion: "Repertorio en forma de libro o en soporte electrónico en el que se recogen, según un orden determinado, las palabras o expresiones de una o más lenguas, o de una materia concreta, acompañadas de su definición, equivalencia o explicación."
    }
    var contextoVerbo = {
        etiquetaMorfologica: "Verbo"
    }
    var contextoMasculino = {
        utilizacion: 1
        , etiquetaMorfologica: "Masculino"
        , contextoUtilizacion: "Ninguno"
        , definicion: "Repertorio en forma de libro o en soporte electrónico en el que se recogen, según un orden determinado, las palabras o expresiones de una o más lenguas, o de una materia concreta, acompañadas de su definición, equivalencia o explicación."
    }
    var contextoMasculinoCarro = {
            utilizacion: 1
            , etiquetaMorfologica: "Masculino"
            , contextoUtilizacion: "Ninguno"
            , definicion: "Carruaje de dos ruedas, con lanza o varas para enganchar el tiro, y cuya armazón consiste en un bastidor con listones o cuerdas para sostener la carga, y varales o tablas en los costados, y a veces en los frentes, para sujetarla."
        , }
        //Funciones Crear Contexto
    function crearContexto(contexto) {
        if (contexto) {
            Contexto.create(contexto).exec(function respuestaServidor(errorServidor, contextoCreado) {
                if (errorServidor) {
                    console.log('Hubo un error del servidor');
                    console.log(errorServidor);
                }
                else {
                    console.log('Se creo el contexto: ' + contextoCreado.etiquetaMorfologica);
                }
            });
        }
        else {
            console.log('No envio un contexto, ejecute la funcion con un contexto');
        }
    }
    
    
    
    //CREACION DE EJEMPLOS
    var ejemploDicionario1 ={
        ejemplo: "En el diccionario encuentro las palabras desconocidas."
    }
    //Funciones Crear ejemplo
    function crearEjemplo(ejemplo) {
        if (ejemplo) {
            Ejemplo.create(ejemplo).exec(function respuestaServidor(errorServidor, ejemploCreado) {
                if (errorServidor) {
                    console.log('Hubo un error del servidor');
                    console.log(errorServidor);
                }
                else {
                    console.log('Se creo el ejemplo: ' + ejemploCreado.ejemplo);
                }
            });
        }
        else {
            console.log('No envio un ejemplo, ejecute la funcion con un ejemplo');
        }
    }
    
    
    cb();
};