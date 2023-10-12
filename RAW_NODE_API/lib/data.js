const fs= require('fs');
const path= require('path');

const lib={};

// base directory of the data folder

lib.basedir =path.join(__dirname, '/../.data');

//write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(lib.basedir+'/'+dir+'/'+file+'.json', 'wx', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            //const stringData = json. string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) =>{
                if(!err2){
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3){
                            callback(false);

                        }else{
                            callback('Error closing the new file!');
                        }
                    });

                }else{
                    callback('Error writing to new file')
                }
            });
        }else{
            callback("There was an error, file may already exists!")
        }

    });
};


//read dat from file 

lib.read =( dir, file, callback) =>{
    fs.readFile(lib.basedir+'/'+dir+'/'+file+'.json', 'utf8', (err, data) =>{
        callback(err, data)
    });

}
// update
lib.update = (dir, file, data, callback) =>{
    // file open for writing
    fs.open(lib.basedir+'/'+dir+'/'+file+'.json','r+', (err, fileDescriptor) =>{
        if(!err && fileDescriptor){
            //convert the dta to string
            const stringData = JSON.stringify(data);

            //
            fs.ftruncate(fileDescriptor,(err)=>{
                if(!err){
                    fs.writeFile(fileDescriptor, stringData, (err1) =>{
                        if(!err1){
                            // close the file
                            fs.close(fileDescriptor, (err2) =>{
                                if(!err2){
                                    callback(false);
                                }else{
                                    callback('error closeing file');
                                }
                            })

                        }else{
                            callback("error wrinting to file");
                        }
                    })

                }else{
                    callback("error truncating erroe")
                }
            })

        }else{
            console.log('Error updating, file may not exixts')
        }
    })
};


// delete

lib.delete =(dir, file, callback) =>{
    fs.unlink(lib.basedir+'/'+dir+'/'+file+'.json', (err)=>{
        if(!err){
            callback(false);

        }else{
            callback("Not delete");
        }
    });

};

module.exports = lib;