const url= require('url');
const {StringDecoder} =require('string_decoder');
const routes= require('../routes');
const {notfoundHandler} = require('../handlers/routerHandler/notfoundHandler')
const {parseJSON}= require('../helpers/utilities')

const handler={};

handler.handleReqRes= (req, res) =>{
    //request handling

    const parsedUrl= url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject= req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData=''

    const chosseHandler= routes[trimedPath] ? routes[trimedPath] : notfoundHandler;

    chosseHandler(requestProperties, (statusCode, payload) =>{
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload :{};

        const paylodString= JSON.stringify(payload);

        // return response
        res. setHeader('Content-Type','applcation/json');
        res.writeHead(statusCode);
        res.end(paylodString);

    });




    req.on('data', (buffer) => {
        realData += decoder.write(buffer);

    });

    req.on('end', () => {
        realData += decoder.end();
        requestProperties.body = parseJSON(realData);
        chosseHandler(requestProperties, (statusCode, payload) =>{
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload :{};

        const paylodString= JSON.stringify(payload);

        // return response

        res.writeHead(statusCode);
        res.end(paylodString);

    });
         //response handle
        res.end('hello programs');
    });
    // //response handle
    // res.end('hello world');
};


module.exports = handler;