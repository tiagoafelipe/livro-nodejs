module.exports = function(app){
	var controller = app.controllers.funcionario;
	app.get('/funcionarios' , controller.listaFuncionarios);	
	app.get('/funcionarios/:id' , controller.obtemFuncionario);

};