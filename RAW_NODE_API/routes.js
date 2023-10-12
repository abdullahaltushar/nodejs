
const {sampleHandler} =require('./handlers/routerHandler/sampleHandler')
const {userHandler} =require('./handlers/routerHandler/userHandler')

const routes = {
    sample: sampleHandler,
    User: userHandler,
};
module.exports = routes;