appFuncionario.controller('FuncionariosController',function($scope, $routeParams, $resource) {

$scope.funcionarios = [];
$scope.filtro = '';
$scope.mensagem = {texto: ''};

var Funcionario = $resource('/funcionarios/:id');

function buscaFuncionarios() {
	Funcionario.query(
		function(funcionarios) {
			$scope.funcionarios = funcionarios;
		},
		function(erro) {
			$scope.mensagem = {texto: 'Não foi possível obter a lista.'};
			console.log(erro)
		});
}

buscaFuncionarios();
$scope.remove = function(funcionario) {
	Funcionario.delete({id: funcionario._id},
		buscaFuncionarios,
		function(erro) {
			$scope.mensagem = {texto: 'Não foi possível remover o funcionario.'};
			console.log(erro);
		}
	);
};


});