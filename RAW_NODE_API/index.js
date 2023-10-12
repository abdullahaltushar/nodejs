// title: uptime monitoring application
// descriptiom a resfulappi

//depenencies

const http = require('http');
const {handleReqRes}= require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data')



//app object - module dcaffolding

const app={};

// testing
// data.create('test','newfile', {'name': 'Bangladesh','language':'bangla'}, (err) =>{
//     console.log('error was ', err);
// });
// data.read('test', 'newfile', (err, data)=>{
//     console.log(err, data);
// })
// data.update('test', 'newfile', {'name':'england', 'language':'english'}, (err) =>{
//     console.log(err)
// })
// data.delete('test', 'newfile', (err) =>{
//     console.log(err);
// })
//configuration

// app.config={
//     port: 3000
// };

// create server

app.createServer =() =>{
    const server= http.createServer(app.handleReqRes);
    server.listen(environment.port, () =>{
        console.log(`listening to port ${environment.port}`);
    });
};

//handle request response

app.handleReqRes= handleReqRes;
//server start

app.createServer();