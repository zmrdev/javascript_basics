var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]
// console.log("nos greater than 10");
// arr.flat().filter(num=>num>10).find(num=>console.log(num))

// console.log("squares of all");
// arr.flat().map(num=>num**2).forEach(num=>console.log(num))

console.log("total sum");
var total=0
arr.flat().map(num=>total+=num)
console.log(total);

// console.log("highest element");
// console.log(arr.flat().reduce((num1,num2)=>num1>num2?num1:num2));

