aplicacion.controller("agregarEntradaCtrl",function($scope, $http){
    
    

//FUNCION PARA CREAR ENTRADAS
    $scope.crearEntrada = function () {

        $scope.botonCrearDeshabilitado = true;
        
        
        $http({
            method: "POST"
            , url: "http://localhost:1337/Entrada"
            , data: $scope.nuevaEntrada
        }).then(
            function (respuesta) {

                //                $scope.cargarUsuarios();
                $scope.entradas.push(respuesta.data);
                $scope.resetearNuevaEntrada();
                
                $scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            }
            , function (error) {
                $scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }
    
    
    $scope.cargarEntrada = function () {
        $http({
            method: "GET"
            , url: "http://localhost:1337/Entrada"
        }).then(function (respuesta) {
            $scope.entradas = respuesta.data;
            console.log(respuesta);
        }, function (error) {
            console.log(error);
        });
    }
    $scope.cargarEntrada();
    
    
     $scope.editarEntrada = function (entrada) {
        $http({
            method: "PUT"
            , url: "http://localhost:1337/Entrada/" + entrada.id
            , data: {
                entrada: entrada.entrada
                , inflexion: entrada.inflexion
                , palabraCompuesta: entrada.palabraCompuesta
            }
        }).then(
            function (respuesta) {
                entrada.mostrar = !entrada.mostrar
            }
            , function (error) {
                console.log(error);
            });
    }
    
     
     //FUNCION ELIMINAR ENTRADA
    $scope.eliminarEntrada = function (entrada) {

        $http({
            method: "DELETE"
            , url: "http://localhost:1337/Entrada/" + entrada.id
        }).then(
            function (respuesta) {

                for (var i = 0; i < $scope.entradas.length; i++) {
                    if ($scope.entradas[i].id == entrada.id) {
                        $scope.entradas.splice(i, 1);
                    }
                }

            }
            , function (error) {
                console.log(error);
            });
    }
    
    //FUNCION QUE RESETEA EL FORMULARIO
    
    $scope.resetearNuevaEntrada = function () {

        $scope.nuevaEntrada = {
            entrada: ""
            , inflexion: ""
            , palabraCompuesta: ""
            
        }
    }

    
    
});