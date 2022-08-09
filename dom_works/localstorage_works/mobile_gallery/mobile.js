function addMobile(){
    let name=mb_name.value
    let brand=mb_brand.value
    let display=mb_display.value
    let ram=mb_ram.value
    let processor=mb_pro.value
    let price=mb_price.value

    let mobile={
        name,
        brand,
        display,
        ram,
        processor,
        price
    }
    if(name in localStorage){
        alert("already exists")
    }
    else{
        localStorage.setItem(mobile.name,JSON.stringify(mobile))
        alert("mobile has been added")
    }
}
function findMobile(){
    let mobile_name=mob_name.value
    if(mobile_name in localStorage){
        let mobile=JSON.parse(localStorage.getItem(mobile_name))
        console.log(mobile);
        let html_data=`<p>${mobile.name}</P>
        <p>mobile brand:${mobile.brand}</P>
        <p>${mobile.display}</P>
        <p>${mobile.ram}</P>`
        document.querySelector("#result").innerHTML=html_data
    }
    else{
        document.querySelector("#result").innerHTML="mobile does not exist with this name"
    }
}