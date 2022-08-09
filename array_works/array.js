var expenses=[25000,30000,35000,28000,27000]

// console.log(expenses[1]);

// console.log(expenses.length);

// for(let amount of expenses){
//     console.log(amount);

// }

// find total expense
// highest expense
// lowest expense
var totalExpense=0
for(let amount of expenses){
    totalExpense+=amount

}
console.log(totalExpense);

var maxExpense=0
for(let amount of expenses){
    if(maxExpense<amount){
        maxExpense=amount
    }
   
}
console.log(maxExpense);

var minExpense=expenses[0]
for(let amount of expenses){
    if(amount<minExpense){
        minExpense=amount
    }
}
console.log(minExpense);
