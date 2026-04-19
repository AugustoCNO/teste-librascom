const express = require('express');

const app = express();
app.use(express.json());

// rota principal
app.get('/', (req, res) => {
  res.send('API LibrasCom funcionando');
});

// rota de teste
app.get('/usuarios', (req, res) => {
  const usuarios = [
    { id: 1, nome: 'Victor', email: 'victor@email.com' },
    { id: 2, nome: 'Augusto', email: 'augusto@email.com' }
  ];

  res.json(usuarios);
});

//rota para criar usuario
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;

  res.json({
    mensagem: 'Usuário criado (simulação)',
    usuario: { nome, email }
  });
});

app.listen(3000, () => {
  console.log('Rodando em http://localhost:3000');
});