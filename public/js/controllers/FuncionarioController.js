appFuncionario.controller('FuncionarioController', 
	function($scope, Funcionario, $routeParams) {

		if($routeParams.funcionarioId) {
			Funcionario.get({id: $routeParams.funcionarioId}, 
				function(funcionario) {
					$scope.funcionario = funcionario;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'Funcionario não existe. Novo funcionario.'
					};
				}
			);	
		} else {
			$scope.funcionario = new Funcionario();
		}


		$scope.salva = function() {
		  $scope.funcionario.$save()
		  	.then(function() {
		  		$scope.mensagem = {texto: 'Salvo com sucesso'};
		  		// limpa o formulário
		  		$scope.funcionario = new Funcionario();
		  	})
		  	.catch(function(erro) {
		  		$scope.mensagem = {texto: 'Não foi possível salvar'};
		  	});
		};		
});