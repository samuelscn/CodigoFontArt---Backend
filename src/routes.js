const express = require('express');

const routes = express.Router();

const ProdutoController = require('./controllers/ProdutoController');
const CarrinhoController = require('./controllers/CarrinhoController');

routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);
routes.delete('/produtos/:id', ProdutoController.delete);
routes.put('/produtos/:id', ProdutoController.update);
routes.get('/produtos/:id', ProdutoController.show);
routes.get('/todosprodutos', ProdutoController.buscaTodos);

routes.post('/carrinho', CarrinhoController.store);
routes.delete('/carrinho/:id', CarrinhoController.delete);
routes.put('/carrinho/:id', CarrinhoController.update);
routes.get('/carrinho/:id', CarrinhoController.show);
routes.get('/todoscarrinho', CarrinhoController.buscaTodos);

module.exports = routes;