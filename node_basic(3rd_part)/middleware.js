const reqFilter=(req, res, next) =>{
    if (!req.query.age){
        res.send("Plese provide age")
    }
    else if (req.query.age<17){
        res.send("you are under age so you cannot access this page")
    }
    else{
        next();
    }
    
}

module.exports =reqFilter