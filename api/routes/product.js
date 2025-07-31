const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/',(req,res,next) => {
    Product.find()
    .select('_id name price')
    .then(products =>{
        res.status(200).json({
            message:"GET request for all products succeeded",
            products:products.map(doc => ({
                _id:doc._id,
                name: doc.name,
                price:doc.price,
                about:{
                    type:'GET',
                    url:'http://loclhost:3000/products/'+doc._id
                }
            }))
            
        });
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        });
    })
})

router.post('/',(req,res,next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    });
    
    product.save().then(result => {
        console.log(result);
        res.status(200).json({
        message:"POST request succeeded",
        product:product
    });
    })
    .catch(err => {
        console.log(product);
        console.log(err);
    })
    
});

router.get('/:pid',(req,res,next) => {
    const id = req.params.pid;
    Product.findById(id)
    .then(product =>{
        res.status(200).json({
            message:"GET request for specific product succeeded",
            product:product
        });
    }).catch(err =>{
        res.status(500).json({
            error:err
        });
    })
});

router.delete('/:pid',(req,res,next) => {
    const id = req.params.pid;
    Product.deleteOne({_id:id})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    })
});

router.patch('/:pid',(req,res,next) => {
    const id = req.params.pid;
    const obj = {};
    for(let key in req.body){
        obj[key] = req.body[key];
    }
    Product.updateOne({_id:id},{$set:obj})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({
            error:err
        })
    });
})

module.exports = router;
