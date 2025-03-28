const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ titulo: 'SNOOPY PetShop Delivery' });
});

const motorista = require('./controller/motorista');
const pedidos = require('./controller/pedidos');

// Rotas para motorista
routes.get('/motorista', motorista.read);
routes.get('/motorista/:id', motorista.readOne);
routes.post('/motorista', motorista.create);
routes.put('/motorista/:id', motorista.update);
routes.delete('/motorista/:id', motorista.del);

// Rotas para pedidos
routes.get('/pedidos', pedidos.read);
routes.get('/pedidos/:id', pedidos.readOne);
routes.post('/pedidos', pedidos.create);
routes.put('/pedidos/:id', pedidos.update);
routes.delete('/pedidos/:id', pedidos.del);

module.exports = routes;

module.exports = routes;