function onAddClick() {
    document.getElementById("addBox").hidden=false;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onUpdateClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=false;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onDeleteClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=false;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onRecoverClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=false;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onKycClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=false;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onCashClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=false;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onCardClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=false;
    document.getElementById("resetpassword").hidden=true;
}

function onResetPasswordClick(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cashservices").hidden=true;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=false;
}

function onLogOutClick(){
    window.open("../HTML/Login Page (ROUGH).html","_self")
}

function onAdd() {
    var name = document.getElementById("name").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var aadhar = document.getElementById("aadhar").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var mstatus = document.getElementById("mstatus").value.trim();
    var address = document.getElementById("address").value.trim();
    if(name !="" && dob !="" && phone !="" && aadhar !="" && gender !="" && mstatus !="" && address !=""){
        alert("Your Account Has Been Created");
    }
    else{
        alert("Please Fill All The Fields!!!");
    }
}

function newUser(value){

    if (value=="no"){
        document.getElementById("addBox").hidden=true;
        document.getElementById("newUser").hidden=true;
        document.getElementById("updateBox").hidden=false;
        document.getElementById("deleteBox").hidden=true;
    }
    else{
        document.getElementById("addBox").hidden=true;
        document.getElementById("newUser").hidden=false;
        document.getElementById("updateBox").hidden=false;
        document.getElementById("deleteBox").hidden=true;
    }
   
}



function onUpdate() {
    var acc = document.getElementById("accountnumber").value.trim();
    var cadr = document.getElementById("changeaddress").value.trim();
    var cmn = document.getElementById("changetel").value.trim();
    //var add = document.getElementById("my-select").value.trim();
    // var per = document.getElementById("user").value.trim();
    // var aad = document.getElementById("aadhar-number").value.trim();
    // var dob = document.getElementById("dob").value.trim();
    
    if(acc !="" && cmn !="" && cadr !="" ){
        alert("Your Account Has Been Updated");
        alert("A OTP Has Been Sent To Your Email Address");
    }
    else{
        alert("Please Put The Values");
    }
}
    function onDelete() {
        var id = document.getElementById("delaccount").value.trim();
        var re = document.getElementById("Reason").value.trim();
        var self = document.getElementById("self").value.trim();
        if (id != "" && re !="" && self !="") {
            alert("Your Account Would Be Inactive After 48 Hours");
        }
}

function onRecover(){
    window.open("../Images/accountstatement.jpg","")

}

function onEnterCash(){
    document.getElementById("cash").hidden=false;
}

function onWithCash(){
    var a = document.getElementById("with").value.trim();
    if (a !="") {
        alert("New balance Will Be Updated Soon");
    }
}

function cash(){
    document.getElementById("addBox").hidden=true;
    document.getElementById("newUser").hidden=true;
    document.getElementById("updateBox").hidden=true;
    document.getElementById("deleteBox").hidden=true;
    document.getElementById("recoverBox").hidden=true;
    document.getElementById("updatekyc").hidden=true;
    document.getElementById("cash").hidden=false;
    document.getElementById("cashservices").hidden=false;
    document.getElementById("cardservices").hidden=true;
    document.getElementById("resetpassword").hidden=true;
}

function onReset(value){
    if(value=="no"){
        document.getElementById("addBox").hidden=true;
        document.getElementById("newUser").hidden=true;
        document.getElementById("updateBox").hidden=true;
        document.getElementById("deleteBox").hidden=true;
        document.getElementById("recoverBox").hidden=true;
        document.getElementById("updatekyc").hidden=true;
        document.getElementById("cash").hidden=true;
        document.getElementById("cashservices").hidden=true;
        document.getElementById("cardservices").hidden=true;
        document.getElementById("reset").hidden=true;
        document.getElementById("resetpassword").hidden=false;
    }else{
        document.getElementById("addBox").hidden=true;
        document.getElementById("newUser").hidden=true;
        document.getElementById("updateBox").hidden=true;
        document.getElementById("deleteBox").hidden=true;
        document.getElementById("recoverBox").hidden=true;
        document.getElementById("updatekyc").hidden=true;
        document.getElementById("cash").hidden=true;
        document.getElementById("cashservices").hidden=true;
        document.getElementById("cardservices").hidden=true;
        document.getElementById("reset").hidden=false;
        document.getElementById("resetpassword").hidden=false;
    }
   
}

function onProceed() {
    var ca = document.getElementById("card").value.trim();
    if (ca !="") {
        alert("Your Card Will Reach Your Home In 15 Days");    
    }
    else{
        alert("Please Put The Values");    
    }
}

function onUpdateKYCC(){

    var accnumber = document.getElementById("accnum").value.trim();
    if (accnumber !="") {
        alert("Please Put Your Thumb On FingerPrint Reader");

    setTimeout(function(){ alert("FingerPrint Resgisterd Successfully");

    // window.open("Untitled.jpg","_self");
    var left = 20;
    var top = 30;
     window.open("../Images/Capture.JPG", "test", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width="50px", height="50px", top='+top+', left='+left);
    }, 3000);    
    }

}