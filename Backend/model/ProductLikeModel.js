const mongoose = require('mongoose');

const ProductLikeSchema = mongoose.Schema({
    productId :Number,
    like:Number
},{
    versionKey:false
})

const ProductModel = mongoose.model('ProductLikes',ProductLikeSchema)

module.exports = {ProductModel}