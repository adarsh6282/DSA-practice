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

// function fibonacci(n){
//     let fib=[0,1]
//    for(let i=2;i<n;i++)
//     {
//         fib[i]=fib[i-1]+fib[i-2]
//     } 
//     return fib
// }

// console.log(fibonacci(3))
// console.log(fibonacci(6))
// console.log(fibonacci(10))


//factorial of a number

// function factorial(n){
//     let sum=1
//     for(let i=2;i<=n;i++)
//     {
//         sum*=i
//     }
//     return sum
// }

// console.log(factorial(5))


//prime number

// function prime(n){
//     for(let i=2;i<n;i++)
//     {
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// console.log(prime(9))


//power of two

// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }

//     while (n>1) {
//         if(n%2!==0)
//             {
//                 return false
//             }else{
//                 n=n/2
//             }
//     }
//     return true
    
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))


//recursion in factorial

// function factorial(n){
//     if(n<=1){
//         return 1
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(5))


// function f(n){
//     if(n<=1){
//         return 1
//     }
//     f(n-1)
//     console.log(n)
//     f(n-1)
// }

// console.log(f(3))


//linear search

// let arr=[3,2,5,7,54,9,8] //target=9
// let searchkey=9
// for(let i=0;i<arr.length;i++)
// {
//     if(searchkey==arr[i]){
//         console.log(i) 
//     }
// }

//binary search

function binarysearch(arr,target){
    let left=0
    let right=arr.length-1

    while (left<=right) {
        let mid=Math.floor((left+right)/2)

        if(target===arr[mid]) return mid
        if(target<arr[mid]){ right=mid-1}
        else
        { left=mid+1}
    }
    return -1
}

console.log(binarysearch([2,5,6,89,889],5))