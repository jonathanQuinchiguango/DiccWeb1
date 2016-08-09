aplicacion.controller("agregarContextoCtrl", function ($scope, $stateParams, $http) {
   
    //FUNCION PARA CREAR CONTEXTOS
     $scope.botonCrearDeshabilitado = false;

    $scope.crearContexto = function () {

        $scope.botonCrearDeshabilitado = true;
        $scope.nuevaContexto.idEntrada=$stateParams.idEntrada;
        
        $http({
            method: "POST"
            , url: "http://localhost:1337/Contexto"
            , data: $scope.nuevaContexto
        }).then(
            function (respuesta) {
                
                $scope.entradas.push(respuesta.data);
                $scope.resetearNuevaContexto();
                $scope.cargarEntrada();
                $scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            }
            , function (error) {
                $scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }
    
    
    //FUNCION PARA CARGAR ENTRADA Y CONTEXTOS
    $scope.cargarEntrada = function(){
        
        $http({
            method: "GET"
            , url: "http://localhost:1337/Entrada/"+$stateParams.idEntrada
        }).then(
            function (respuesta) {

                $scope.entrada = respuesta.data;
                $scope.contextos = respuesta.data.contexto;
                $scope.ejemplos= respuesta.data.ejemplo;
                            }
            , function (error) {
                console.log(error);
            });
        
    }
    
    $scope.cargarEntrada();
    
    
    //FUNCION PARA EDITAR LOS CONTEXTOS
    
    $scope.editarContexto = function (contexto) {
        $http({
            method: "PUT"
            , url: "http://localhost:1337/Contexto/" + contexto.id
            , data: {
                utilizacion: contexto.utilizacion
                , etiquetaMorfologica: contexto.etiquetaMorfologica
                , contextoUtilizacion: contexto.contextoUtilizacion
                , definicion: contexto.definicion
            }
        }).then(
            function (respuesta) {
                contexto.mostrar = !contexto.mostrar
            }
            , function (error) {
                console.log(error);
            });
    }
    
    
    //FUNCION ELIMINAR CONTEXTO
    $scope.eliminarContexto = function (contexto) {

        $http({
            method: "DELETE"
            , url: "http://localhost:1337/Contexto/" + contexto.id
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.contextos.length; i++) {
                    if ($scope.contextos[i].id == contexto.id) {
                        $scope.contextos.splice(i, 1);
                    }
                }

            }
            , function (error) {
                console.log(error);
            });
    }
    
    //FUNCION QUE RESETEA EL FORMULARIO
    
    $scope.resetearNuevaContexto = function () {

        $scope.nuevaContexto = {
            utilizacion: ""
            , etiquetaMorfologica: ""
            , contextoUtilizacion: ""
            , definicion: ""
            
        }
    }
    
    //FUNCION PARA CREAR CONTEXTOS
    

    $scope.crearEjemplo = function () {

        $scope.botonCrearDeshabilitado = true;
        $scope.nuevaEjemplo.idEntrada=$stateParams.idEntrada;
        
        $http({
            method: "POST"
            , url: "http://localhost:1337/Ejemplo"
            , data: $scope.nuevaEjemplo
        }).then(
            function (respuesta) {
                
                $scope.ejemplos.push(respuesta.data);
                $scope.resetearNuevaEjemplo();
                $scope.cargarEntrada();
                $scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            }
            , function (error) {
                $scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }
    
    
    //FUNCION QUE RESETEA EL FORMULARIO EJEMPLO
    
    $scope.resetearNuevaEjemplo = function () {

        $scope.nuevaEjemplo = {
            ejemplo: ""
            
            
        }
    }
    
    //FUNCION ELIMINAR CONTEXTO
    $scope.eliminarEjemplo = function (ejemplo) {

        $http({
            method: "DELETE"
            , url: "http://localhost:1337/Ejemplo/" + ejemplo.id
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.ejemplos.length; i++) {
                    if ($scope.ejemplos[i].id == ejemplo.id) {
                        $scope.ejemplos.splice(i, 1);
                    }
                }

            }
            , function (error) {
                console.log(error);
            });
    }
    
    
});