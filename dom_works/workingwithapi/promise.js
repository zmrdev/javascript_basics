var luckyContext=new Promise((res,rej)=>{
    let lotNum=4
    let drawNum=Math.floor(Math.random()*10)
    if(drawNum!=lotNum){
        rej("you lost")
    }
})
luckyContext.then(data=>console.log(data)).catch(err=>console.log(err))

