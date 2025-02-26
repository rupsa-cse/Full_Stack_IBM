//ex1
// const student={
//     name:"Rupsa",
//     rollNumber:62,
//     marks:{
//         CN:80,
//         NM:65,
//         DBMS:50,
//         RM:70
//     },
//     getAverageMarks:function(){
//         let total=0, count=0;
//         for (let mark of Object.values(this.marks)){
//             total+=mark;
//             count++;
//         }
//         return total/count;
//     },
//     checkPassorFail:function(){
//         if(this.getAverageMarks()>40){
//             return "Pass";
//         }else{
//             return "Fail";
//         }
//     }
// }
// console.log(student.getAverageMarks());
// console.log(student.checkPassorFail());

//-------------------------------------------------------------------

//ex2
// const library = {
//     books: {
//         "Atomic Habits": { author: "James Clear", availableCopies: 3 },
//         "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 }
//     },
//     borrowBook: function(bookName) {
//         if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
//             this.books[bookName].availableCopies--;
//             console.log(`You have borrowed "${bookName}". Copies left: ${this.books[bookName].availableCopies}`);
//         } else {
//             console.log(`Sorry, "${bookName}" is not available or all copies are already borrowed.`);
//         }
//     },
//     returnBook: function(bookName) {
//         if (this.books[bookName]) {
//             this.books[bookName].availableCopies++;
//             console.log(`You have returned "${bookName}". Copies available now: ${this.books[bookName].availableCopies}`);
//         } else {
//             console.log(`Sorry, "${bookName}" does not belong to this library.`);
//         }
//     }
// };

// library.borrowBook("Atomic Habits");
// console.log(library.books["Atomic Habits"].availableCopies);

//ex3
// let num=5, limit=10;
// generateTable(num,limit);

// function generateTable () {
//     for(let i=1;i<=limit;i++) {
//         console.log(`${num} X ${i} = ${num*i}`)
//     }
// }

//ex4
// let n=15;
// fizzBuzz(n)
// function fizzBuzz (n) {
//     for (let i=1;i<=n;i++) {
//         if(i%3==0 && i%5==0) {
//             console.log("FizzBuzz")
//         }
//         else if(i%3==0 && i%5!=0) {
//             console.log("Fizz")
//         }
//         else if(i%5==0 && i%3!=0) {
//             console.log("Buzz")
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
 

//ex5
// let str="JavaScript";
// reverseString(str);

// function reverseString() {
//     let text="";
//     for (let i=str.length-1;i>=0;i--) {
//         text+=str[i]
//     }
//     console.log(text)
// }

//ex7 
// function longestWord(sentence) {
//     const words = sentence.split(' ');
//     let longest = '';
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }
// console.log(longestWord("Coding is amazing and challenging"));
