var express = require('express');
var app = express();

app.use(express.json());


function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return 'Erro: divisão por zero!';
  }
  return a / b;
}


app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
  var { a, b } = req.body;
  var resultado = soma(a, b);
  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});


app.post('/subtracao', function (req, res) {
  var { a, b } = req.body;
  var resultado = subtracao(a, b);
  res.send(`O resultado da subtração de ${a} e ${b} é ${resultado}`);
});


app.post('/multiplicacao', function (req, res) {
  var { a, b } = req.body;
  var resultado = multiplicacao(a, b);
  res.send(`O resultado da multiplicação de ${a} e ${b} é ${resultado}`);
});


app.post('/divisao', function (req, res) {
  var { a, b } = req.body;
  var resultado = divisao(a, b);
  res.send(`O resultado da divisão de ${a} e ${b} é ${resultado}`);
});

var port = 3001;
app.listen(port, function() {
  console.log(`App de Exemplo iniciado na porta http://localhost:${port}/`);
});
