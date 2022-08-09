// var string="hello"
// var vowels=["a","e","i","o","u","A","E","I","O","U"]
// for(let char of string){
//     if(vowels.includes(char)){
//         console.log(char);
//     }
// }

// Array.from(string).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))

const array1 = [5, 12, 8, 130, 44];
const array2=[2,130,12]

const found=array1.filter(elements=>array2.includes(elements))
console.log(found)