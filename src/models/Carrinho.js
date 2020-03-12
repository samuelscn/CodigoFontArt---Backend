const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CarrinhoSchema = new mongoose.Schema({
    ArrayId: {
        type: String,
        required: true,
    },
    QtdProduto: {
        type: Number,
        required: true,
    },
});

CarrinhoSchema.plugin(mongoosePaginate);

mongoose.model('Carrinho', CarrinhoSchema);