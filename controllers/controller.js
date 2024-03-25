const model = require('../models/model');

async function pesquisarTitulo(req, res) {
  let titulo = req.query?.titulo || ''; // se não tiver titulo substituir para uma string vazia
  let array = await model.pesquisarTitulo(titulo);
  res.render('index', { lista: array });
}

async function pesquisarAno(req, res) {
  let { ano } = req.params;
  let array = [];
  if (!isNaN(ano)) { // se for um número realizar a pesquisa, caso contrário retorna um array vazio
    array = await model.pesquisarAno(ano);
  }
  res.render('index', { lista: array });
}

module.exports = {
  pesquisarTitulo,
  pesquisarAno
};