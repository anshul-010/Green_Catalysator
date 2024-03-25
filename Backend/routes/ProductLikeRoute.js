const express = require('express');
const { ProductModel } = require('../model/ProductLikeModel');

const LikeRouter = express.Router();

LikeRouter.post("/like" ,async(req, res) => {
    const {id} = req.body;
    try {
        let product = await ProductModel.findOne({productId:id})
        if(product){
            product.like++
        }
        else{
            product = new ProductModel({ productId: id, like: 1 });
        }
        await product.save();

        return res.status(200).json({ "msg": "Like count updated", product })

    } catch (error) {
        return res.status(400).json({ "error": error.message });
    }

})

LikeRouter.get("/getlikes",async(req,res)=>{
    try {
        const productsLikes = await ProductModel.find()
        return res.status(200).json({"data": productsLikes})
    } catch (error) {
        return res.status(400).json({ "error": error.message });
    }
})

module.exports = {LikeRouter}