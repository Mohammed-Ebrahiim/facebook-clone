function formValidate(){
    let Email = document.getElementById("emailId").value;
    let Password = document.getElementById("passwordId").value;
    let error = document.getElementById("error");
    let text ;

    // if (Email.indexOf("@") == -1 || Email.length < 8) {
    //     text = 'please enter a valid email';
    //     error.innerHTML = text;
    //     return false;
    // }
    // else if(Password.length < 8){
    //     text = 'plz enter strong pass';
    //     error.innerHTML = text;
    //     return false;
    // }
    
    if(Email.indexOf("@") == -1 || Email.length < 8 || Password.length < 8){
        text = 'Check Email or password'
        error.innerHTML = text;
        return false;
    }
    else{
        alert("done");
        return true;
    }
}
 