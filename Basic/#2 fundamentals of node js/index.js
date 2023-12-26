
//export import value one function to another function
// filter use for array
// filter use specific value and condition

var x='20';
if(x===20){ // === type and value check when use == is check only value
    console.log("matched")
}

// for loop
for (i=0; i<10;i++){
    console.log(i)
}

const arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)

const app =require('./app')

// full value
console.log(app)
//function value
console.log(app.z())

// filter use only for array
arr.filter((item)=>{
    console.log(item)
})

// another way filter use for specific value
let result =arr.filter((item)=>{
    return item===3
})
console.log(result)