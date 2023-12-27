// Set input from command line
// Create file with input 
// Delete the file with input 
console.log(process.argv[2])
console.log(process.argv[3])
const fs = require('fs')

const input = process.argv;
if(input[2] =='add')
{
    fs.writeFileSync(input[3], input[4])
}else if(input[2] =='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("invalid Input")
}


