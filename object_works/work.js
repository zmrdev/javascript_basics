products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  ];
  
  
  
  
  // # print product names only
  // console.log("product names");
  // products.forEach(m=>console.log(m.p_name))
  // # print all mobile details whose display="amoled"
  // console.log("mobile details with amoled display");
  // products.filter(m=>m.display=="amoled")
  // # print 5g moboile names
  // console.log("5g mobiles");
  // products.filter(p=>p.band=="5g").forEach(type=>console.log(type.p_name))
  // # sort mobiles based on price
  // console.log("mobiles based on high price");
  // products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p))
  // # print costly mobile
  console.log("costly mobile");
  var costlyMobile=products.reduce((costly1,costly2)=>costly1.price>costly2.price?costly1:costly2)
  console.log(costlyMobile);
  // # print low cost mobile
  console.log("low cost mobile");
  var cheapMobile=products.reduce((costly1,costly2)=>costly1.price<costly2.price?costly1:costly2)
  console.log(cheapMobile);
  