//dependencies

// model_ scaffolding
const environments={}

environments.staging ={
    port:3000,
    envName:'staging',
    secretKey: 'hsjdhsdhsjdhjshdjshd'
};

environments.production ={
    port:5000,
    envName:'production',
    secretKey: 'dsjdhsdhsjdhjshdjshd'
};

//determine which environment was passed
const currentEnviroment =typeof(process.env.NODE_ENV)=== 'string' ? process.env.NODE_ENV : 'staging';

//export corresponding enviroment object
const enviromentToExport = typeof(environments[currentEnviroment]) === 'object' ? environments[currentEnviroment] : environments.staging;

//export module
module.exports = enviromentToExport;