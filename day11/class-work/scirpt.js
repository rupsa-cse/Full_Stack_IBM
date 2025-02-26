// console.log(this)
// let obj ={
//     name:"Rupsa",
//     class:"B tech",
//     myFunction:()=>{
//         // console.log(this)
//         // console.log(this.name,this.class) //we cannot use 'this' function inside arrow function
//         console.log("I am method inside object")
//     },
//     subjects:["DBMS","CN","NM"],
//     newObj:{
//         1:12,
//         myNewFunction:function() {
//             // console.log(this)
//             return this[1]
//         }
//     }
// }

// console.log(obj.myFunction()) 
// console.log(obj.newObj.myNewFunction())

// const arrowFunction=()=>{
//     let a=10;
//     let b=20;
//     let c=a+b;

//     return c
// }
// let ans=arrowFunction()
// console.log(ans)

//----------------------------------------------------------------

//condtion

// let num=10 , num2=20;

// if(num<num2) {
//     console.log(`${num} is less than ${num2}`);
// }
// else if (num>num2) {
//     console.log(`${num} is greater than ${num2}`);
// }
// else {
//     console.log(`${num} is equal to ${num2}`);
// }


//let suppose you have one num as input you have to check if num is multiple of 3 then print "Fizz",if num is multiple of 5 print "Buzz".if both print "fizz buzz


// num=20;
// if(num%3==0 && num%5!=0) {
//     console.log("Fizz")
// }
// if (num%5==0 && num%3!=0) {
//     console.log("Buzz")
// }
// if (num%3==0 && num%5==0){
//     console.log("Fizz Buzz")
// }



//for loop

let num=10;

for(let i=0;i<num;i++) {
    console.log(i,num); 
}


let arr=[1,2,3,4,5,6,7,8]

for(let i=1;i<=arr.length;i++) {
    console.log(arr[i]);
}