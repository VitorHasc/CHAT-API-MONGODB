const { connect } = require('./db'); // Certifique-se de que a função connect está sendo importada corretamente

async function registrarUser(nick) {
    const db = await connect(); // Conecta ao banco de dados
    const collection = db.collection('usuarios'); // Obtém a coleção 'usuarios'
    return await collection.insertOne({ 'nick': nick }); // Insere o documento
}

async function deletarUser(nome) {
    const db = await connect();
    const collection = db.collection('usuarios');
    return await collection.deleteOne({ 'nick.nome': nome });
}

module.exports = {
    registrarUser,
    deletarUser
};
