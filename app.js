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

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Porta: ' + PORT);
});

let livros = [
  { id: 0, titulo: 'O Iluminado', autor: 'Stephen King', ano: 1980 },
  { id: 1, titulo: 'A Cabana', autor: 'William P. Young', ano: 2017 },
  { id: 2, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945 },
  { id: 3, titulo: 'O Senhor dos Anéis: A Sociedade do Anel', autor: 'J.R.R. Tolkien', ano: 1954 },
  { id: 4, titulo: '1984', autor: 'George Orwell', ano: 1949 },
  { id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943 },
  { id: 6, titulo: 'Dom Quixote', autor: 'Miguel de Cervantes', ano: 1605 },
  { id: 7, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997 },
  { id: 8, titulo: 'A Culpa É das Estrelas', autor: 'John Green', ano: 2012 },
  { id: 9, titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', ano: 1813 },
  { id: 10, titulo: 'Cem Anos de Solidão', autor: 'Gabriel García Márquez', ano: 1967 },
  { id: 11, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', ano: 1866 },
  { id: 12, titulo: 'A Menina que Roubava Livros', autor: 'Markus Zusak', ano: 2005 },
  { id: 13, titulo: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa', autor: 'C.S. Lewis', ano: 1950 },
  { id: 14, titulo: 'Moby Dick', autor: 'Herman Melville', ano: 1851 },
  { id: 15, titulo: 'O Sol É para Todos', autor: 'Harper Lee', ano: 1960 },
  { id: 16, titulo: 'A Metamorfose', autor: 'Franz Kafka', ano: 1915 },
  { id: 17, titulo: 'Anna Karenina', autor: 'Liev Tolstói', ano: 1877 },
  { id: 18, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', ano: 'século IV a.C.' },
  { id: 19, titulo: 'O Morro dos Ventos Uivantes', autor: 'Emily Brontë', ano: 1847 },
  { id: 20, titulo: 'O Código Da Vinci', autor: 'Dan Brown', ano: 2003 },
];


app.get('/', (req, res) => {
    let titulo = req.query?.titulo || '';
    let array = livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
    res.render('index', { lista: array });
});

app.get('/:ano', (req, res) => {
    let { ano } = req.params;
    let array = livros.filter(livro => ano == livro.ano);
    res.render('index', { lista: array });
})