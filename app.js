const express = require('express');
const app = express();
const CORS = require('cors');
app.use(CORS());

//required routes
const userRoutes = require('./api/routes/user');
const checkAuth = require('./api/middleware/check-auth');
const contactRoutes = require('./api/routes/contact');
const workspaceRoutes = require('./api/routes/workspace');
const messageRoutes = require('./api/routes/message');
const campaignRoutes = require('./api/routes/campaigns');

//required middlewares
const morgan = require('morgan');

const mongoose = require('mongoose');

//middlewares
app.use(morgan('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/users',userRoutes);
// app.use('/auth',checkAuth);
app.use('/contacts',contactRoutes);
app.use('/workspaces',workspaceRoutes);
app.use('/messages',messageRoutes);
app.use('/campaigns',campaignRoutes);
mongoose.connect('mongodb+srv://-------------@cluster0.k81uvvx.mongodb.net/');



//Error handling
app.use((req,res,next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    console.log(error);
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