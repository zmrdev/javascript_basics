var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alappuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukky",1000,50,9500,9,6]
]

// console.log(covid_data.map(data=>data[2]));
// console.log(covid_data.map(data=>[data[1],data[2]]));

console.log("highest test positive cases district");

var redCat=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(redCat[1]);
// for(let datas of covid_data){
//     if(datas[2]>=70000){
//         console.log(datas[1]);
//     }
// }
// console.log(covid_data.find(data=>data[2]>=70000)[1]);
console.log("highest 1st dose vaccination rate");
var highDose=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
var highDoseDist=covid_data.filter(d=>d[5]==highDose[5])
console.log(highDoseDist);
// for(let datas of covid_data){
//     if(datas[5]>=9){
//         console.log(datas[1]);
//     }
// }
// console.log(covid_data.filter(data=>data[5]>=9));
console.log("lowest death cases district");
var lowDose=covid_data.reduce((d1,d2)=>d1[5]<d2[5]?d1:d2)
var lowDoseDist=covid_data.filter(d=>d[5]==lowDose[5])
console.log(lowDoseDist);
// for(let datas of covid_data){
//     if(datas[3]<=50){
//         console.log(datas[1]);
//     }
// }
// console.log(covid_data.find(data=>data[3]<=50)[1]);
// console.log("districts sorted with positive cases");
//     covid_data.sort((post1,post2)=>post2[2]-post1[2])
//     console.log(covid_data);
// console.log(covid_data.sort((post1,post2)=>post2[2]-post1[2]));
// console.log("districts sorted with 1st dose");
// covid_data.sort((dos1,dos2)=>dos2[5]-dos1[5])
// console.log(covid_data);
// console.log(covid_data.sort((dos1,dos2)=>dos2[5]-dos1[5]));
// console.log("districts with +ve cases > 60000");
// for(let datas of covid_data){
//     if(datas[2]>60000){
//         console.log(datas[1]);
//     }
// }
// console.log(covid_data.filter(data=>data[2]>60000));
// console.log("thrissur details");
// for(let datas of covid_data){
//     if(datas[1]=="thrissur"){
//         console.log(datas);
//     }
// }
// console.log(covid_data.filter(data=>data[1]=="thrissur"));
// console.log("total number of positive cases");
// var total=0
// for(let datas of covid_data){
//     total+=datas[2]
// }
// console.log(total);
// var total=0
// var op=covid_data.map(data=>total+=data[2]);
// console.log(op[6]);
// console.log("total no:of cured cases");
// var curedTotal=0
// for(let datas of covid_data){
//     curedTotal+=datas[4]
// }
// console.log(curedTotal);
// var curedTotal=0

// var op=covid_data.map(data=>curedTotal+=data[4]);
// console.log(op[6]);
// console.log("cured numbers of idukky");
// for(let datas of covid_data){
//     if(datas[1]=="idukky"){
//         console.log(datas[4]);
//     }
// }
// console.log(covid_data.find(data=>data[1]=="idukky")[4]);