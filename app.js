const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const express = require('express');
const app = express();

// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Configurar as rotas do servidor
const rotas = require('./routes/rotas');
app.use(rotas);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Porta: ' + PORT);
});