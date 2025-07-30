const express = require('express');
const app = express();

//required routes
const productRoutes = require('./api/routes/product');
const ordersRoutes = require('./api/routes/orders');

//required middlewares
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/products',productRoutes);
app.use('/orders',ordersRoutes);

mongoose.connect('mongodb+srv://@cluster0.k81uvvx.mongodb.net/');



//solve CORS(Cross-Origin Resource Sharing) issue or give Access to apis 
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods","PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})


//Error handling
app.use((req,res,next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message : "Error founded!!"
        }
    })
})

// app.use((req,res,next) =>{
//     res.status(200).json({
//         message:"Working "
//     })
// })
module.exports = app