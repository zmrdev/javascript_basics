// function one(){
//     console.log("inside one");
// }
// function two(){
//     console.log("inside two");
// }

// function parent(){
//     one()
// }
// parent()

// is javascript synchronous or asynchronous?
console.log("line 1");
console.log("line 2");
setTimeout(()=>console.log("inside 2.2"),2000)
console.log("line 3");