const jwt = require('jsonwebtoken');
const expresss = require('express');
const router = expresss.Router();

// module.exports = (req,res,next) => {
//     try{
//         const decoded = jwt.verify(localStorage.getItem("access_token"),process.env.JWT_KEY);
//         req.userData = decoded;
//         next();
//     }
//     catch(error){
//         res.status(401).json({
//             message:JSON.stringify(req.body),
//         })
//     }
// }

router.post('/',(req,res,next) => {
    try{
        const token = req.headers['Authorization'] && req.headers['Authorization'].split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        res.status(200).json({
            message:"Token is valid",
        })
    }
    catch(error){
        res.status(401).json({
            message:"Invalid token",
        })
    }
})
module.exports = router;