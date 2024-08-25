const db = require("./db");

let listarSalas = async () => {
  try {
    const database = await db.connect();
    const salas = await database.collection('salas').find().toArray();
    return salas;
  } catch (error) {
    console.error('Erro ao listar salas:', error);
    throw error; 
  }
}

let criarSalas = async (salaData) => {
  try {
    console.log(salaData);
    const database = await db.connect();
    const result = await database.collection('salas').insertOne(salaData);
    return result;
  } catch (error) {
    console.error('Erro ao criar sala:', error);
    throw error;
  }
}


module.exports = {
  listarSalas,
  criarSalas
}