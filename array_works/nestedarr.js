var arr=[
    [1,2],
    [11,3],
    [4,15],
    [5,16]
]

for(let subArray of arr){
    for(let num of subArray){
        if(num>10){
            console.log(num);
        }
    }
}