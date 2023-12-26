// make Basic server
// function as parameter in node
// arrow function
// get output on browser

const http =require('http') // request and response handle kore
http.createServer((req, res)=>{
    res.write("<h1>hello this is tushar</h1>");
    res.end();
}).listen(4500);

// function ways
function dataControl(req, res)
{
    res.write("<h2>this is function page</h2>");
    res.end();

}
http.createServer(dataControl).listen(4500);

// this is use arror function
const dataControl=(req, res)=>
{
    res.write("<h1>this is arrow function page</h1>");
    res.end();

}
http.createServer(dataControl).listen(4500);