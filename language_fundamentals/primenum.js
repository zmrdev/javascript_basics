var num=8,flag=0
for(let i=2;i<num;i++){
    if(num%i==0){
        flag=1
        break;

    }

}
console.log(flag==0?"prime number":"not prime");


// break

// for(let i=0;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// console.log('next');