const bancoDeDados = require('./bcdd'); 

async function pesquisarTitulo(titulo) {
  titulo = "%" + titulo + "%";
  let [rows] = await bancoDeDados.query('select * from livros where titulo like ?', [titulo]);
  return rows;
}

async function pesquisarAno(ano) {
  ano = Number(ano);
  let [rows] = await bancoDeDados.query('select * from livros where ano = ?', [ano]);
  return rows;
}

module.exports = {
  pesquisarTitulo,
  pesquisarAno
};