function onEnter() {
    var user = document.getElementById("input-name").value.trim();
    var email = document.getElementById("input-email").value.trim();
    var message = document.getElementById("input-message").value.trim();
    if(user !="" && email !="" && message !=""){
        alert("Your Message Has Been Sent ");
    }
    else{
        alert("Please Provide The Required Fields");
    }
}