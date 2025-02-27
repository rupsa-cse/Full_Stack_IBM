//foreach

let arr=[11,2,3,4,5,6,7,18,9,10,1,12,13,14,15,16]

// arr.forEach((el,index)=>{
//     console.log(el,index)
//     return index
// })

// let output= arr.forEach((el,index)=> {
//     return el
// })
// console.log(output)  //output=undefined

// let output= arr.map((el,index)=> {
//     return el**2
// })
// console.log(output) //will return an array

// let output=arr.filter((el,index)=>{
//     return el%2==0;
// })
// console.log(output)//return even 

// let output=arr.filter((el,index)=>{
//     return typeof el === 'string';
// })
// console.log(output) //return string in the array

// let output=arr.reduce((acc,el)=>{
//     return acc+el;
// },0 );
// console.log(output)

// let output=arr.filter((el,index)=>{
//     return typeof el !== 'string' && el%2==0;
// }).map((el,index)=>{
//     return el*10
// }).reduce((acc,el)=>{
//     return acc+el
// },0)
// console.log(output)

// let ans=arr.sort((a,b)=>b-a)
// let ans2=arr.sort((a,b)=>{ return a-b})

// console.log(ans)
// console.log(ans2)

let data =[
    {name:"watch",price:2000,ratings:2},
    {name:"phone",price:19999,ratings:4},
    {name:"shoe",price:1200,ratings:5},
    {name:"car",price:100000,ratings:5},
    {name:"earphone",price:1900,ratings:4.5}
]

let ans=data.sort((a,b)=>{
    const nameA=a.name
    const nameB=b.name
    if(nameA<nameB) {
        return -1
    }
})

console.log(ans)

