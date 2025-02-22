// let str= "   "
// console.log(str.length)

// let a="10",b=+"10"
// c=+a+b
// console.log(typeof(c))
// console.log(c)

var a=10
var b=30
myFunction(a,b)

function myFunction(f,g) {
     console.log(f+g)
} 

// var a=10
// var b=30

// const myFunction=(a,b)=> {
//     console.log(a+b)
// }
// myFunction(a,b)

(() => {
    console.log("IIFE")
  })();