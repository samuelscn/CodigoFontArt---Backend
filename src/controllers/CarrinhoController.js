const mongoose = require('mongoose');

const Carrinho = mongoose.model('Carrinho');

module.exports = {
    async store(req, res) {
        const carrinho = await Carrinho.create(req.body);

        return res.json(carrinho);
    },

    async delete(req, res) {
        await Carrinho.findByIdAndRemove(req.params.id);

        return res.json();
    },

    async update(req, res) {
        const carrinho = await Carrinho.findByIdAndUpdate(req.params.id, {QtdProduto: `${req.body}`}, { new: true} );

        return res.json(carrinho);
    },

    async show(req, res) {
        const carrinho = await Carrinho.findById(req.params.id);

        return res.json(carrinho);
    },

    async buscaTodos(req, res) {
        const carrinho = await Carrinho.find();

        return res.json(carrinho);
    },

    async deleteAll(req, res) {
        await Carrinho.deleteMany();

        return res.json();
    }
};