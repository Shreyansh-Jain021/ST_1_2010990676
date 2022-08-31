function printReq(){
    var paraTag=document.getElementById("password-info");
    paraTag.innerHTML="Password should have an Uppercase, a Lowercase, a Digit, and a Special character";
    paraTag.style.color="white";
}

function check(tagId){
    var inputTag=document.getElementById(tagId);
    var paraTag=document.getElementById(tagId+"-info");
    if (inputTag.value.length>0){
        if (tagId=="password" && inputTag.value.length<8){
            paraTag.innerHTML="Password length is too short.";
            paraTag.style.color="white";
        }
        else if(tagId=="c-password" && inputTag.value != document.getElementById("password").value){
            paraTag.innerHTML="Password doesn't match";
            paraTag.style.color="white";
        }
        else{
            paraTag.innerHTML="Correct";
            paraTag.style.color="green";
        }
    }
}

function onSubmit(){
    var user = document.getElementById("name").value.trim();
    var mobileno = document.getElementById("mobileno").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var cpassword = document.getElementById("c-password").value.trim();
    if(user !="" && mobileno !="" && email !="" && password !="" && cpassword !=""){
        alert("A Verification Mail Has Been Sent To Your Email Address ")
    }
}