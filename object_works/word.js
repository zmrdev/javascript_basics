var text="hello hai hello hai"
// var words=text.split(" ")
var wordCount={}

// for(let word of words){
//     if(word in wordCount){
//         wordCount[word]+=1

//     }
//     else{
//         wordCount[word]=1
//     }
// }
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);

// first recursive character
// var pattern="ABBBBC"
// var letters=pattern.split("")
// console.log(letters);
// var wordCount={}
// for(let char of pattern){
//     if(char in wordCount){
//         console.log(`${char} is the first recursive character`);
//         break
//     }
//     else{
//         wordCount[char]=1
//     }
// }

var arr=[10,10,20,20,30,30,40,40,50,50,50]

var numCount={}
arr.map(num=>num in numCount?numCount[num]+=1:numCount[num]=1)
console.log(numCount);
