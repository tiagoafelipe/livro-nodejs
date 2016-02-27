appFuncionario.controller('FuncionariosController',
function($scope , $routeParams) {

	console.log($routeParams.funcionarioId);
 $scope.filtro = '';
 $scope.funcionarios = [{
					"_id": 1,
					"nome": "Funcionario Angular 1",
					"email": "func1@empresa.com.br"
					},
					{
					"_id": 2,
					"nome": "Funcionario Angular 2",
					"email": "func2@empresa.com.br"
					},
					{
					"_id": 3,
					"nome": "Funcionario Angular 3",
					"email": "func3@empresa.com.br"
					}
					];

	$scope.total = 0;

	$scope.incrementa = function(){
			
			$scope.total ++;
	};
});