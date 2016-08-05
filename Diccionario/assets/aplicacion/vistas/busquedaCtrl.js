aplicacion.controller("busquedaCtrl", function ($scope,$stateParams, $http) {
    $scope.cargarEntrada = function(){
        
        $http({
            method: "GET"
            , url: "http://localhost:1337/Entrada/"+$stateParams.idEntrada
        }).then(
            function (respuesta) {

                $scope.entrada = respuesta.data;
                            }
            , function (error) {
                console.log(error);
            });
        
    }
    
    $scope.cargarEntrada();
});