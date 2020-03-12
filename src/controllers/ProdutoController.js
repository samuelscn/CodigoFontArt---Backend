const mongoose = require('mongoose');

const Produto = mongoose.model('Produto');

module.exports = {
    async index(req, res) {
        const { page = 1 } =  req.query;
        const produto = await Produto.paginate({}, { page, limit: 4});

        return res.json(produto);
    },

    async store(req, res) {
        const produto = await Produto.create(req.body);
        console.log(req.body);

        return res.json(produto);
    },

    async delete(req, res) {
        await Produto.findByIdAndRemove(req.params.id);

        return res.json();
    },

    async update(req, res) {
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true} );

        return res.json(produto);
    },

    async show(req, res) {
        const produto = await Produto.findById(req.params.id);

        return res.json(produto);
    },

    async createProduto(req, res) {
        console.log(req.body);
        
        const novoProduto = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
        
        new Produto(novoProduto).save().then(() => {
            console.log("Produto criado com sucesso!");
        }).catch((err) => {
            console.log("Erro ao criar Produto!");
        })
    },

    async buscaTodos(req, res) {
        const produto = await Produto.find();

        return res.json(produto);
    }
};