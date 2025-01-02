//find the largest and smallest element in an array

let arr=[2,3,1,4,8]

let small=arr[0]
let large=0

for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        small=arr[i]
    }
    else if(arr[i]>large)
    {
        large=arr[i]
    }
}
console.log(small,large)