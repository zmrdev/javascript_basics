function createAccount(){
    let accountNo=bank_accountNo.value
    let phone=bank_phoneNo.value
    let accountType=bank_accountType.value
    let emailId=bank_email.value
    let password=bank_password.value
    let balance=2000

    let account={
        accountNo,
        phone,
        accountType,
        emailId,
        password
    }
        localStorage.setItem(account.accountNo,JSON.stringify(account))
        window.location.href="login_index.html"
}

function authenticateUser(){
    let accno=acno.value
    let password=pwd.value
    if(accno in localStorage){
        let details=JSON.parse(localStorage.getItem(accno))
        if(password==details.password){
            window.location.href="user.html"
        }
        else{
            alert("Invalid password")
        }
    }
    else{
        alert("invalid account number")
    }
}