const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message:"GET request successful for all orders......!!!!!"
    })
})

router.post('/:id',(req,res,next) => {
    const id = req.params.id;
    const order = {
        productId:req.body.productId,
        quantity:req.body.quantity
    };
    res.status(200).json({
        message:"Data Added successfully",
        order: order,
    })
})

module.exports = router;