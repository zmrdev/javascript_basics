// var arr=[4,5,6]

// var sum=0,op=[]
// for(let num of arr){
//     sum+=num
// }
// for(let num of arr){
//     op.push(sum-num);
// }
// console.log(op);

// duplicate numbers

// var arr=[10,20,10,20,11,12]
// var op=[]
// for(let i=0;i<=arr.length;i++){
//     for(let num of arr){
//         if(i==num){
            
//         }
//     }
// }
// console.log(op);

// var arr=[2,3,4,5]

// var sum1=7
// for(let i of arr){
//     for(let j of arr){
//        if((i+j)==sum1){
//            console.log(`${i},${j} pairs`);
//            break
//        }   
//     }
// }

// var sum=7
// var low=0
// var upp=arr.length-1,flag=0
// while(low<upp){
//     let currentSum=arr[low]+arr[upp]
//     if(currentSum<sum){
//         low++

//     }
//    else if(currentSum>sum){
//         upp--
//     }
//     else if(currentSum==sum){
//         flag=1
//         console.log(`pairs (${arr[low]},${arr[upp]})`);
//         break
//     }
    
// }
// if(flag==0){
//     console.log("no pairs found");
// }

var arr1=[10,11,12,20,30]
var arr2=[11,20,21,30,31]
var newarray=[]
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1 == num2){
            newarray.push(num1)
        }
    }
}
console.log(newarray);

// var p1=0,p2=0,count=1
// while(p1<arr1.length && p2<arr2.length){
//     if(arr1[p1]==arr2[p2]){
//         console.log(`common number ${arr1[p1]}`);
//         p1++
//         p2++
//     }
//     else if(arr1[p1]<arr2[p2]){
//         p1++
//     }
//     else if(arr1[p1]>arr2[p2]){
//         p2++
//     }
//     count++
// }
// console.log(count);
