
const data =require('../../lib/data');
const {hash} =require('../../helpers/utilities')
const handler= {};

handler.userHandler =(requestProperties, callback) =>{
    const acceptedMethods= ['get', 'post','put', 'delete']
    if (acceptedMethods.indexOf(requestProperties.method) > -1){

        handler._users[requestProperties.method](requestProperties, callback);

    }else{
        callback(405);
    }

};

handler._users={};
handler._users.post=(requestProperties, callback) =>{
    console.log(requestProperties.body)
    const firstName = typeof(requestProperties.body.firstName) === 'string' && requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;
    const lastName = typeof(requestProperties.body.lastName) === 'string' && requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;
    const phone = typeof(requestProperties.body.phone) === 'string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;
    const password = typeof(requestProperties.body.password) === 'string' && requestProperties.body.password.trim().length > 0 ? requestProperties.body.password : false;
    const tosAgreement = typeof(requestProperties.body.tosAgreement) === 'boolean' && requestProperties.body.tosAgreement.trim().length > 0 ? requestProperties.body.tosAgreement : false;

    if( firstName && lastName && phone && password && tosAgreement){
        // make sure that user doesn't already exists
        data.read('users', phone, (error) =>{

            if(error){
                let userObject={
                    firstName,
                    lastName,
                    phone,
                    password:hash(password),
                    tosAgreement,
                };

                // store the user to db
                data.create('users',phone,userObject, (err)=>{
                    if(!err){
                        callback(200,{'message': 'user create successfully'})

                    }else{
                        callback(500, {'error': 'could not create user'});
                    }

                })

            }else{
                callback(500, {
                    error:'there was a problem in server side',
            });
            }
        })


    }
    else{
        callback(400, {
            error:' you have a problem in your request',
        })
    }
};

handler._users.get=(requestProperties, callback) =>{
    callback(200);

};
handler._users.put=(requestProperties, callback) =>{

};
handler._users.delete=(requestProperties, callback) =>{

};

module.exports = handler;