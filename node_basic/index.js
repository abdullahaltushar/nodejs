const http = require('http');
const data = require('./data');
const express= require('express');
const app = express();
const path= require('path');
const publicpath= path.join(__dirname,'public');

app.set('view engine', 'ejs');

// http.createServer((req, res)=>{
//     res.writeHead(200, {'content-Type': 'applications\json'});
//     res.write(JSON.stringify(data));
//     res.end();

// }).listen(3000);

app.get('', (req, res) =>{
    res.sendFile(`${publicpath}/index.html`);

});
app.get('/about',(req, res) =>{
    res.sendFile(`${publicpath}/about.html`);
});

app.get('/help',(req, res) =>{
    res.sendFile(`${publicpath}/help.html`);
});

app.get('/profile',(req, res) =>{
    const user ={
        name:'tushar',
        email:'tushar@gmail.com',
        skils:['php','js','c++'],

    }
    res.render('profile',{user:user});
});
app.get('/login',(req, res) =>{
    res.render('login');
});
app.get('*',(req, res) =>{
    res.sendFile(`${publicpath}/404.html`);
});

app.listen(5000);