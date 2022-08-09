var account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}
function validateAccountNum(ac_no){
    return ac_no in account_details?true:false
}
console.log(validateAccountNum(1009));

function authenticate(ac_no,password){
    if(validateAccountNum(ac_no)){
        let pwd=account_details[ac_no].password
        if(pwd==password){
            return "login success"
        }
        else{
            return "invalid password"
        }
    }
    else{
        return "invalid ac no"
    }
}
console.log(authenticate(1002,"usert"));