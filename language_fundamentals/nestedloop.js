// gcd of 24,48 & 12,60

// var num1=12,num2=60
// var gcd=1
// for(let i=1;i<=num2;i++){
//     if((num1%i==0) && (num2%i==0)){
//         gcd=i
//     }
// }
// console.log(gcd);




// ####
// ####
// ####


// for(let row=1;row<=3;row++){
//     let str=""
//     for(let col=1;col<=4;col++){
//         str+=col
//     }
//     console.log("####");
// }

// *
// **
// ***
// ****

// var num=8
// for(let i=1;i<=num;i++){
//     let str=""
//     for(let j=0;j<i;j++){
// str+="*"

//     }
//     console.log(str);
// }


for(let row=1;row<=4;row++){
    let str=""
    for(let col=1;col<=row;col++){
        str+=row

    }
    console.log(str);
}