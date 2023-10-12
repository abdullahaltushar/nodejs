const http = require('http');
const data = require('./data');
const express= require('express');
const app = express();
const path= require('path');
const publicpath= path.join(__dirname,'public');
const reqFilter= require('./middleware')

// another way
const route =express.Router();
route.use(reqFilter);


//app.use(reqFilter)

app.get('/', (req, res) =>{
    res.send('Welcome to Home Page');

});
app.get('/user',reqFilter,(req, res) =>{
 res.send("welcome to user page");
});

route.get('/about',(req, res) =>{
    res.send("welcome to about page");
   });
app.use('/', route);
app.listen(5000);