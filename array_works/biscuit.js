var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]

products.forEach(p=>console.log(p[1]))
// var isAvailable=products.some(p=>p[3]>100)
// console.log(isAvailable);

// var isAvailable=products.some(p=>p[2]>=10 && p[2]<=20)
// console.log(isAvailable);

// var isAvailable=products.filter(p=>p[2]>=10 && p[2]<=20)
// console.log(isAvailable);

// print costly product detail reduce

// console.log("costly product details");
// var costlyProdDetails=products.reduceRight((det1,det2)=>det1[2]>det2[2]?det1:det2)
// console.log(costlyProdDetails);
// print outofstock products filter

// console.log("out of stock products");
// var outStockProd=products.filter(det=>det[3]==0)
// console.log(outStockProd[0][1]);
// print oreo details find

// console.log("oreo details");
// var oreoDet=products.find(det=>det[1]=="oreo")
// console.log(oreoDet);
// sort products based on available stock order by desc sort

// console.log("sorted products on avail stock by desc order");
// var sortProd=products.sort((det1,det2)=>det2[3]-det1[3])
// console.log(sortProd);
// print product details having maximum available stock reduce

// console.log("prod details having max avail stock");
// var maxAvailStock=products.reduce((det1,det2)=>det1[3]>det2[3]?det1:det2)
// console.log(maxAvailStock);