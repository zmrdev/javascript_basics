var num1=10,num2=20,num3=30

// largest number?
// 2nd largest number?
// sorted numbers?

if(num1>num2 && num1>num3){
console.log(`${num1} is largest`);
if(num2>num3){
    console.log(`${num2} is 2nd largest`);
    console.log(`sorted numbers are ${num1},${num2},${num3}`);

}
else{
    console.log(`${num3} is 2nd largest`);
    console.log(`sorted numbers are ${num1},${num3},${num2}`);

}
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is largest`);
    if(num1>num3){
        console.log(`${num1} is 2nd largest`);
        console.log(`sorted numbers are ${num2},${num1},${num3}`);
    }
    else{
        console.log(`${num3} is 2nd largest`);
        console.log(`sorted numbers are ${num2},${num3},${num1}`);

    }

}
else if(num3>num1 && num3>num2){
    console.log(`${num3} is largest`);
    if(num1>num2){
        console.log(`${num1} is 2nd largest`);
        console.log(`sorted numbers are ${num3},${num1},${num2}`);

    }
    else{
        console.log(`${num2} is 2nd largest`);
        console.log(`sorted numbers are ${num3},${num2},${num1}`);

    }

}
else if(num1==num2 && num2==num3){
    console.log("numbers are equal");
}


