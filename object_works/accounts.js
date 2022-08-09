var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi",method: "phone-pay"},
        {to: 1002, amount: 500, note: "emi",method: "neft"},
        {to: 1001, amount: 100, note: "erchrge",method: "phone-pay"}
      ]
    },
]
// console.log(accounts.length);
// accounts.filter(data=>data.ac_type=="savings").forEach(account=>console.log(account.acno))
// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);
// var gpayTransactions=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="g-pay")
// console.log(gpayTransactions);
// var phpayTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay")
// console.log(phpayTrans);
// accounts.map(data=>data.transactions).flat().filter(t=>t.amount>500).forEach(amount=>console.log(amount))
var credTrans=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
var debTrans=accounts.find(data=>data.acno==1002).transactions
// var highBalance=accounts.reduce((data1,data2)=>data1.balance>data2.balance?data1:data2)
// console.log(highBalance);
// var transaHistory=[]
// for(let t of credTrans){
//   transaHistory.push(t)
// }
// for(let t of debTrans){
//   transaHistory.push(t)
// }
// console.log(transaHistory);

// var transaHistory={debitTrans:debTrans,creditTrans:credTrans}
// console.log(transaHistory);
var transaHistory=[...credTrans,...debTrans]
console.log(transaHistory);