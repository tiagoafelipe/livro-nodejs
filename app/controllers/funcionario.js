module.exports = function(){

	var ID_CONTATO_INC = 4;

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

	controller.removeFuncionario = function(req, res) {
		var idFuncionario = req.params.id;
		funcionarios = funcionarios.filter(function(funcionario) {
			return funcionario._id != idFuncionario;
		});
		res.status(204).end();


	};

	controller.salvaFuncionario = function(req, res) {
		var funcionario = req.body;
    	funcionario = funcionario._id ?
      	atualiza(funcionario) :
      	adiciona(funcionario);
    	res.json(funcionario);
  };

 function adiciona(funcionarioNovo) {

    funcionarioNovo._id = ++ID_CONTATO_INC;
    funcionarios.push(funcionarioNovo);
    return funcionarioNovo;
  }

  function atualiza(funcionarioAlterar) {

    funcionarios = funcionarios.map(function(funcionario) {
      if(funcionario._id == funcionarioAlterar._id) {
        funcionario = funcionarioAlterar;
      }
      return funcionario;
    });
    return funcionarioAlterar;
  }


	return controller;
};