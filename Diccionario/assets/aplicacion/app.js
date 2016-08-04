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
    }).state('ayuda', {
        url: "/ayuda"
        , templateUrl: "vistas/ayuda.html"
        , controller: "ayudaCtrl"
    });
});