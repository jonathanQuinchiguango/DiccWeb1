var aplicacion = angular.module("diccionario", ['ui.router']);
aplicacion.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: "/"
        , templateUrl: "vistas/home.html"
        , controller: "homeCtrl"
    }).state('login', {
        url: "/login"
        , templateUrl: "vistas/login.html"
        , controller: "loginCtrl"
    }).state('busqueda', {
        url: "/busqueda/:idEntrada"
        , templateUrl: "vistas/busqueda.html"
        , controller: "busquedaCtrl"
    }).state('agregarEntrada', {
        url: "/agregarEntrada"
        , templateUrl: "vistas/agregarEntrada.html"
        , controller: "agregarEntradaCtrl"
    })
        //Router pasando el ID
        .state('agregarContexto', {
        url: "/agregarContexto/:idEntrada"
        , templateUrl: "vistas/agregarContexto.html"
        , controller: "agregarContextoCtrl"
    })
        .state('ayuda', {
        url: "/ayuda"
        , templateUrl: "vistas/ayuda.html"
        , controller: "ayudaCtrl"
    });
});