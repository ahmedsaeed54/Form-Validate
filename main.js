
// function formValidate() {
//     var userName = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var error = document.getElementById("error");
//     var text = "";

//     if (userName.length < 3) {
//         text = "Please Enter a Valid Name";
//         error.innerHTML = text;
//         return false
//     }
//     else if (email.indexOf("@") == -1){
//         text = "Please Enter a Valid Email";
//         error.innerHTML = text;
//         return false
//     }
//     else if (isNaN(phone)){
//         text = "Please Enter a Valid phone";
//         error.innerHTML = text;
//         return false
//     }
//     else{
//         alert("Done")
//         return true
//     }
// }

function formValidate1(){
    var userName = document.getElementById("username").value;
    
    var pass = document.getElementById("pass").value;
    var error= document.getElementById("error");
    var error2= document.getElementById("error2");
    var text = "";

    if (userName.length < 3 && userName.indexOf("@") ) {
        text = "The email address or mobile number you entered isn't connected to an account. Find your account and log in.";
        error.innerHTML = text;
        error.style.marginTop="-17px"
        error.style.height="40px"
        error.style.color="red"
        document.getElementById("username").style.border="1px solid red"

        return false;
    }
    
    
    else if(isNaN(pass) || pass.length <3){
        text = "enter valid number ";
        error2.innerHTML = text;
        error2.style.marginTop="-17px"
        error2.style.height="30px"
        error2.style.color="red"
        return false;
    }
    else{
        
        return true; 
    }
}

// function openForm (){
//     document.getElementById("popform").style.width= "400px";
//     document.body.style.backgroundColor="aqua";
    
// }
function closeForm(){
    document.getElementById("pop").style.display= "none";
    
}

function openForm(){
    document.getElementById("pop").style.display="block";
    

}

