//Main
var appFuncionario = angular.module('appFuncionario', ['ngRoute'])
.config(function($routeProvider) {
$routeProvider.when('/funcionarios', {
templateUrl: 'partials/funcionarios.html',
controller: 'FuncionariosController'
});
$routeProvider.when('/funcionario/:funcionarioId', {
templateUrl: 'partials/funcionario.html',
controller: 'FuncionariosController'
});

$routeProvider.otherwise({redirectTo: '/funcionarios'});

});