appFuncionario.factory('Funcionario', function($resource) {
	
	return $resource('/funcionarios/:id');
});