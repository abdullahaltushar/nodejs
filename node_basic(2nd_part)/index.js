const http = require('http');
const data = require('./data');
const express= require('express');
const app = express();
const path= require('path');
const publicpath= path.join(__dirname,'public');

const reqFilter=(req, res, next) =>{
    if (!req.query.age){
        res.send("Plese provide age")
    }
    else if (req.query.age<17){
        res.send("you are under age so you cannot access this page")
    }
    else{
        next();
    }
    
}

app.use(reqFilter)

app.get('/', (req, res) =>{
    res.send('Welcome to Home Page');

});
app.get('/user',(req, res) =>{
 res.send("welcome to user page");
});
app.listen(5000);