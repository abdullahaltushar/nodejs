//make a server
// create header and api body
//create an api with static data
// put data in another file

const http = require('http');
const data= require('./data');
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);