function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="bhaskar2002@mcb.gov.in" && password=="Bhaskar@mcb#123"){
        window.open("dashboard.html","_self");
    }
    else{
        alert("Username Or Password Is Invalid");
    }
}

function onSignUp(){
    window.open ("../HTML/register.html","_self");   
}