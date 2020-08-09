import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//http://localhost:3333/users
//http://localhost:3333/contacts

// GET : Buscar uma informação
// POST : Criar alguma nova informação
// PUT : Atualizar uma informação existente
// DELETE: Apagar uma informação

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: paginação, filtro, ordenação

//app.post('/', (request, response) => {
  //  return response.json({message : 'Hello Word!'});
    //console.log(request.query);
    //const users = [
    //    {name: 'Ivo', age: 29},
    //    {name: 'Fulco', age: 29}
    //];
    //return response.json(users);
//})



//localhost:3333

app.listen(3333);