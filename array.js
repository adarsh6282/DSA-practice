//find the largest and smallest element in an array

// let arr=[2,3,1,4,8]

// let small=arr[0]
// let large=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//         small=arr[i]
//     }
//     else if(arr[i]>large)
//     {
//         large=arr[i]
//     }
// }
// console.log(small,large)


//reverse an array

// let arr=[2,3,6,8,4,1,9]

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }


//find the sum of all elements in an array

// let arr=[2,34,67,3,1,9,8]

// let sum=0

// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }

// console.log(sum)


//Fibonacci Series

function fibonacci(n){
    let fib=[0,1]
   for(let i=2;i<n;i++)
    {
        fib[i]=fib[i-1]+fib[i-2]
    } 
    return fib
}

console.log(fibonacci(3))
console.log(fibonacci(6))
console.log(fibonacci(10))

