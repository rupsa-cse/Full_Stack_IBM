//Asynchronous behavior
//setTimeout setInterval queueMicrotask


// let name="synchronous"
// console.log(name);
// let surName="code";
// console.log(surName);

// setTimeout(()=>{
//     console.log('setTImeout Task,Macrotask-1')
// },2000)

// setTimeout(()=>{
//     console.log('setTImeout Task,Macrotask-2')
// },3000)

// let myPromise = new Promise((resolve,reject)=>{
//     let flag = true;
//     if(flag) {
//         resolve("Promise resolved successfully")
//     }else {

//     }
// })

// setTimeout(()=>{
//     console.log('setTImeout Task,Macrotask-3')
// },1000)
// queueMicrotask(()=>console.log('QueueMicrotask Task,Macrotask'))
// console.log(name,surName)
async function fetchData(){
    let data = await fetch('https://fakestoreapi.com/products');
    let ans = await data.json();
    console.log(data)
    console.log(ans)
}
fetchData()