//ex1
// let x = "5";
// let y = 5;
// console.log(x == y);
// console.log(x === y);

// because "==" is comparing value but "===" comaparing value and datatype

//--------------------------------------------------

//ex2
// const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// function LongestWordLength(arr) {
//   let longestLength = 0;
  
//   arr.forEach(word => {
//     if (word.length > longestLength) {
//       longestLength = word.length;
//     }
//   });
  
//   return longestLength;
// }
// console.log(LongestWordLength(words)); // Output: 11

//------------------------------------------------------------------

//ex3
// function testScope() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// testScope();
//explanation- a will be printed as it is but b and c are declared as block scope variable so they will only accesible in the if block. so,it will show reference error

//-------------------------------------------------------------------

//ex4
// const name = "John";
// function greet() {
//     let message;
//     if (true) {
//         message = "Hello " + name;
//     }
//     console.log(message);
// }
// greet();
//using let outside the if block 

//--------------------------------------------------------------------

//ex5
// const a=10;
// const b=10;
// const multiply = (a, b) => a * b;
// console.log(multiply(a,b))

//-------------------------------------------------------------------

//ex6
// const obj = {
//     name: "Alice",
//     sayHello: function() {
//       setTimeout(() => {
//         console.log("Hello, " + this.name);
//       }, 1000);
//     }
//   };
  
//   obj.sayHello();

//----------------------------------------------------------------------

//ex7
// console.log(a); //undefined
// var a = 10;
// console.log(b); //reference error
// let b = 20;

//------------------------------------------------------------------------

//ex8
// console.log(square(5));

// function square(n) {
//     return n * n;
// }

// var double = function(n) {
//     return n * 2;
// };
// console.log(double(4));

//-------------------------------------------------------------------------

//ex9
// console.log(5 + "5"); //55
// console.log(5 - "3"); //2
// console.log(5 * "2"); //10
// console.log("10" / 2); //5
// console.log(10 % "3"); //1

//-------------------------------------------------------------------------

//ex10
// let x = 10;
// x += 5;
// x *= 2;
// x -= 3;
// x /= 2;

//------------------------------------------------------------------------

//ex11
// console.log(5 > 3 && 10 < 20); //true and true=true
// console.log(5 > 3 || 10 > 20); //true or false=false
// console.log(!(5 > 3)); // not true=false

//-------------------------------------------------------------------------

//ex12
function sum(a, b, c = 5) {
    return a + b + c;
}
console.log(sum(2, 3));
console.log(sum(2, 3, 10));
console.log(sum(3,5,9));
console.log(sum())

