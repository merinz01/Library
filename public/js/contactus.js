function validation(){
    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    if (fname==""){
        document.getElementById('fnameid').innerHTML="**Please fill your name";
        return false;
    }
    var pattern=/^[a-zA-Z]*$/;
    if((fname=="")||!(pattern.test(fname))){
        document.getElementById('fnameid').innerHTML="**Should contain only characters";
        return false;
    }


    if (email==""){
        document.getElementById('emailid').innerHTML="**Please fill the email id";
        return false;
    }
    var pattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
    if((email=="")||!(pattern.test(email))){
        document.getElementById('emailid').innerHTML="**Invalid email";
        return false;
    }

    if (message==""){
        document.getElementById('messageid').innerHTML="**Please leave the message ";
        return false;
    }


    else{
        alert("Message received");
        return true;
    }
}



