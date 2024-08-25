const SECRET = "1234"
const jwt = require('jsonwebtoken');

const entrar = async (req, res) => {
    const {nome} = req.body;
    const token = jwt.sign({ nome: nome }, SECRET, { expiresIn: '48h' });
    res.json(token);
  } 
    
  const sair = async (req, res) => {
    res.send('Hello World!');
  } 
    
  module.exports = {
    entrar,
    sair
  };