module.exports = function(){
	var controller = {};
	var funcionarios = [{'_id': 1 , 'nome':'Funcionario 1'},
	{'_id': 2 ,'nome':'Funcionario 2'},
	{'_id': 3 ,'nome':'Funcionario 3'},
	{'_id': 4 ,'nome':'Funcionario 4'}];
	controller.listaFuncionarios = function(req , res){
		res.json(funcionarios);
	}
	controller.obtemFuncionario = function(req , res){
		var idFuncionario = req.params.id;
		var funcionario = funcionarios.filter(function(funcionario){
			return funcionario._id == idFuncionario
		})[0];
		funcionario?
		res.json(funcionario):
		res.status(400).send('Funcionario não encontrado');

	}
	return controller;
};