// factorial of a number?
// num=4(1*2*3*4)

// var num = 4
// var i = 1
// total = 1
// while (i <= num) { //1<4 2<4 3<4 4=4 5!<=4
//     total*=i //1 2 3 4
//     i++ //2 3 4 5
// }
// console.log(total);


// armstrong number?
// 123(1**3+2**3+3**3)=36
// 153(1**3+5**3+3**3)=153

// var num = 153
// var sum=0
// while (num != 0) {
// let digit=num%10
// sum+=digit**3
// num=Math.floor(num/10)

// }
// console.log(sum);



// var num=2
// var lowLimit=8
// var upperLimit=36
// 2**2=4
// 3**2=9

var num=3,low=8,upp=36
var i=1
while(i<=upp){
    let res=i**num
    if(res>=low && res<=upp){
        console.log(i);

    }
    i++
}
