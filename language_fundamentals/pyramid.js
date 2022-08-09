// for(let row=1;row<=6;row++){
//     let str=""
//     for(let space=5;space>=row;space--){
//         str+=" "
//     }
//     for(let col=1;col<=row;col++){
//         str+="* "

//     }
//     console.log(str);
// }

for(let row=1;row<=4;row++){ // 1 2
    let str=""
    for(let col=1;col<=7;col++){ // 1 2
        if(row==4 || row+col==5 || col-row==3){ // f
            str+="*"
        }
        else{
            str+=" "
        }
    }
    
    console.log(str);
}
 