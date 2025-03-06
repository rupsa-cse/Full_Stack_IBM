 //Create a custom function that will take array as input and return sorted array 
 //input arr=[3,6,9,2,56,34,98,56,23,12,90]

 function Sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(j=i+1;j<arr.length;j++) {
            if(arr[j]<arr[i]) {
                let min=arr[j];
            }
        }
    }

 
}

let arr=[3,6,9,2,56,34,98,56,23,12,90];
let sortedNum= Sort(arr);
console.log(sortedNum);