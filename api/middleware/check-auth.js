const jwt = require('jsonwebtoken');
const expresss = require('express');
const router = expresss.Router();
const logout = require('../models/logout');
const message = require('../models/message');

module.exports = (req,res,next) => {
    
    const token = req.headers.authorization;
    logout.findOne({token:token})
    .then(result => {
        if(result.length === 1){
            res.status(401).json({
                message:"Token is invalid"
            })
        }
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })

    try{
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.userData = decoded;
        next();
    }
    catch(error){
        res.status(401).json({
            message:req.headers,
        })
    }
}

// router.post('/',(req,res,next) => {
//     try{
//         const token = req.headers['Authorization'] && req.headers['Authorization'].split(' ')[1];
//         const decoded = jwt.verify(token,process.env.JWT_KEY);
//         res.status(200).json({
//             message:"Token is valid",
//         })
//     }
//     catch(error){
//         res.status(401).json({
//             message:"Invalid token",
//         })
//     }
// })
// module.exports = router;