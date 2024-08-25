const { criarSalas, listarSalas } = require("../models/salaModel");

const listar = async (req, res) => {
  try {
    let salas = await listarSalas();
    res.json(salas);
  } catch (err) {
    res.status(500).send("Erro ao listar salas");
  }
}

const entrar = async (req, res) => {
  res.send('Hello World!');
}

const sair = async (req, res) => {
  res.send('Hello World!');
}

const criar = async (req, res) => {
  try {
    const novaSala = await criarSalas(req.body);
    console.log(novaSala)
    res.status(201).json(novaSala);
  } catch (error) {
    console.error("Erro no controller:", error); // Adicione logging para debug
    res.status(500).json({ message: 'Erro ao criar sala', error: error.message });
  }
}  

const listarmen = async (req, res) => {
  res.send('Hello World!');
}

const enviarmen = async (req, res) => {
  res.send('Hello World!');
}

module.exports = {
  listar,
  entrar,
  sair,
  listarmen,
  enviarmen,
  criar
};