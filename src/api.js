require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const userController = require('./controllers/userController');
const salaController = require('./controllers/salaController');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');

const corsOptions = {
  origin: true, 
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

///////////////////////////////////////////////////////////////////////////////////////////////
//entrar no site
app.post('/entrar', (req, res) => {
    userController.entrar(req, res);
}); 

//sair do site
app.delete('/sair', (req, res) => {
    userController.sair(req, res);
}); 

///////////////////////////////////////////////////////////////////////////////////////////////
//listar salas
app.get('/salas', (req, res) => {
    salaController.listar(req, res);
});

//sair da sala
app.put('/sala/sair', (req, res) => {
    
    salaController.sair(req, res);
});

//entrar na sala
app.put('/sala/entrar', (req, res) => {
    
    salaController.entrar(req, res);
});

//criar sala
app.post('/sala/criar', (req, res) => {
    
    salaController.criar(req, res);
});

///////////////////////////////////////////////////////////////////////////////////////////////
//listar mensagens
app.get('/sala/mensagens', (req, res) => {
    salaController.listarmen(req, res);
});

//enviar mensagens
app.post('/sala/mensagem', (req, res) => {
    salaController.enviarmen(req, res);
});

app.get('/', (req, res) => {
    res.send('API - CHAT   AUTOR: VÍTOR HUGO DE ABREU SCHELL');
}); 

///////////////////////////////////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;
