aplicacion.controller("homeCtrl",function($scope, $http){
    
    
    
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
});