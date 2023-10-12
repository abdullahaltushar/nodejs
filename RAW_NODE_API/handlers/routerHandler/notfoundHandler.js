const handler= {};

handler.notfoundHandler =(requestProperties, callback) =>{
    console.log('notfound');
    callback(404, {
        message: ' your requested url not found'
    });
   

};

module.exports = handler;