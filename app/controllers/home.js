module.exports = function() {
  var controller = {};
  controller.index = function(req, res) {
    res.render('index', {nome: 'Funcionarios - V1'  });
  };
  return controller;
}