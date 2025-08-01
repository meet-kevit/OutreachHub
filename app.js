const express = require('express');
const app = express();
const CORS = require('cors');
app.use(CORS());

//required routes
const productRoutes = require('./api/routes/product');
const userRoutes = require('./api/routes/user');
const checkAuth = require('./api/middleware/check-auth');
const contactRoutes = require('./api/routes/contact');

//required middlewares
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/products',productRoutes);
app.use('/users',userRoutes);
app.use('/auth',checkAuth);
app.use('/contacts',contactRoutes);
mongoose.connect('mongodb+srv://meetmadani:meetmadani@cluster0.k81uvvx.mongodb.net/');



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