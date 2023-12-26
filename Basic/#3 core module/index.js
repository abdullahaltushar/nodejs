//code module 
// console
console.log("hello word"); // this is  global

//directory name

console.log(__dirname);// file dirname check is also global
console.log(__filename);// file name check
//fs , Buffer , Http

//fs
const fs = require('fs'); //this is local it's for file system
fs.writeFileSync("hello.txt", "hello world")// create txt file with write

