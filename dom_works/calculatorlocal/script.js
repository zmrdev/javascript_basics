function displayNum(num){
    result.value+=num
}
function clearBox(){
    result.value=""
}
function evaluateExpression(){
    result.value=eval(result.value)
}
function backSpace(){
    let curValue=result.value
    result.value=curValue.slice(0,-1)
}