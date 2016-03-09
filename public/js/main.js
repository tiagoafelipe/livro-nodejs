//Main
var appFuncionario = angular.module('appFuncionario', ['ngRoute','ngResource'])
.config(function($routeProvider) {

 	$routeProvider.when('/funcionarios', {
      templateUrl: 'partials/funcionarios.html',
      controller: 'FuncionariosController'
    });

    $routeProvider.when('/funcionario/:funcionarioId', {
    	templateUrl: 'partials/funcionario.html', 
    	controller: 'FuncionarioController'
    });

    $routeProvider.when('/funcionario', {
      templateUrl: 'partials/funcionario.html',
      controller: 'FuncionarioController'
    });

    $routeProvider.otherwise({redirectTo: '/funcionarios'});

});