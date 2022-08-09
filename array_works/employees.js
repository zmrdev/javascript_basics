var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",25000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
var fresher=employees.reduceRight((emp1,emp2)=>emp1[5]<emp2[5]?emp1:emp2)
console.log(fresher);

var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(totalSalary);

var minSalary=employees.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(minSalary[4]);

var maxSalary=employees.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(maxSalary);

// for(let employee of employees){
//     console.log(employee[1]);
// }
// console.log(employees.map(emp=>emp[1]));
// console.log(employees.length);

// for(let developer of employees){
//     if(developer[2]=="developer"){
//         console.log(developer);
//     }
// }

// console.log(employees.filter(emp=>emp[2]=="developer"));
// for(let employee of employees){
//     if(employee[4]>35000){
//         console.log(employee);
//     }
// }

// console.log(employees.filter(emp=>emp[4]>35000));
// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// }
// console.log(employees.filter(emp=>emp[1]=="arjun"));
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);
// console.log(employees.sort((emp1,emp2)=>emp1[4]-emp2[4]));
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employees);
// console.log(employees.sort((emp1,emp2)=>emp1[5]-emp2[5]));
// console.log(employees.map(emp=>emp[1]));
// console.log((employees.filter(emp=>emp[2]=="developer")));
