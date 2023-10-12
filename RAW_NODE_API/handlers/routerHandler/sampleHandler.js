const handler= {};

handler.sampleHandler =(requestProperties, callback) =>{
    console.log( ' sample handler function')
    callback( 200, {
        message: 'this is a sample url'
    });

};

module.exports = handler;