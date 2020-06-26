// GETTING ALL INPUT TEXT ELEMENTS
var names = document.getElementById("name");
var mobilenos = document.getElementById("mobileno");
var emails = document.getElementById("email");
var passwords = document.getElementById("password");
var confirmpasswords = document.getElementById("confirmpassword");
// var registers = document.getElementById("register");


// GETTING ALL ERROR DISPLAY ELEMENTS
var nameids=document.getElementById("nameid");
var mobilenoids=document.getElementById("mobilenoid");
var emailids=document.getElementById("emailid");
var passwordids=document.getElementById("passwordid");
var confirmpasswordids=document.getElementById("confirmpasswordid");


// SETTING ALL EVENT LISTENERS
names.addEventListener("focusout",nameVerify);
mobilenos.addEventListener("focusout",mobilenoVerify);
emails.addEventListener("focusout",emailVerify);
passwords.addEventListener("focusout",passwordVerify);
confirmpasswords.addEventListener("focusout",confirmpasswordVerify);
// registers.addEventListener("focusout",registerVerify);

// if (document.feedback.field.value == '') {
// 	return false;
// }


//EVENT HANDLER FUNCTIONS
 // name validation
    function nameVerify(){
        if (names.value==""){
            names.style.border="2px solid red";
            nameid.textContent="**Please enter your name";
            names.focus();
            return false;
        }
        var pattern=/^[A-Za-z]{2,18}$/;  
        if  (names.value.match(pattern)){
            names.style.border="2px solid green";
            nameids.textContent="";
            mobilenos.focus();
            return true;
        }
        else{
            names.style.border="2px solid red";
            nameids.textContent="**Should contain only characters";
            names.focus();
            return false;
            }
        }

 // mobile no validation
       function mobilenoVerify(){
        if (mobilenos.value==""){
            mobilenos.style.border="2px solid red";
            mobilenoids.textContent="**Please enter your Mobile No.";
            mobilenos.focus();
            return false;
        }
        var pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if  (mobilenos.value.match(pattern)){
            mobilenos.style.border="2px solid green";
            mobilenoids.textContent="";
            emails.focus();
            return true;
        }
        else{
            mobilenos.style.border="2px solid red";
            mobilenoids.textContent="**Should contain only 10 digits";
            mobilenos.focus();
            return false;
            }
    }

    // email validation
    function emailVerify(){
        if (emails.value==""){
            emails.style.border="2px solid red";
            emailid.textContent="**Email is required";
            emails.focus();
            return false;
        }
        var pattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
        if  (emails.value.match(pattern)){
            emails.style.border="2px solid green";
            emailids.textContent="";
            passwords.focus();
            return true;
        }
        else{
            emails.style.border="2px solid red";
            emailids.textContent="**Invalid email";
            emails.focus();
            return false;
            }
    }

    // password validation
    function passwordVerify(){
        if (passwords.value==""){
             passwords.style.border="2px solid red";
             passwordids.textContent="Password required";
             passwords.focus();
             return false;
         }
         var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
         if  (passwords.value.match(pattern)){
             passwords.style.border="2px solid green";
             passwordids.textContent="";
             confirmpasswordids.focus();
             return true;
         }
         else{
             passwords.style.border="2px solid red";
             passwordids.textContent="**Invalid password";
             passwords.focus();
             return false;
             }
           
     }
 
    //  check if two passwords match
    function confirmpasswordVerify(){
        if (confirmpasswords.value==""){
            confirmpasswords.style.border="2px solid red";
            confirmpasswordids.textContent="**Re-enter password";
            passwords.focus();
            return false;
        }
        
        if  (passwords.value==confirmpasswords.value){
            confirmpasswords.style.border="2px solid green";
            confirmpasswordids.textContent="";
            // registers.focus();
            return true;
        }
        else{
            passwords.style.border="2px solid red";
            confirmpasswords.style.border="2px solid red";
            confirmpasswordids.textContent="**Passwords do not match";
            confirmpasswords.focus();
            return false;  
        }
    }

   
    // password strength validation
    passwords.addEventListener('keyup',function(){
        strength();
    })
    function strength(){
        let passwords = document.getElementById("password");
        let status= document.getElementById("length");
        let counter=0;
   
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{13,16})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{10,12})");
        var weekRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");

        if (passwords!=""){
        if ((passwords.length<8 && passwords.length<9)||(passwords.value.match(weekRegex)))
        counter=1;
        if((passwords.length>10 && passwords.length<=12)||(passwords.value.match(mediumRegex)))
        counter=2;
        if((passwords.length>13 && passwords.length<=16)||(passwords.value.match(strongRegex)))
        counter=3;

        if(counter == 1){
        status.innerHTML="Weak";
        status.style.background="red";
        status.style.color="#ffffff";
       }
       if(counter == 2){
        status.innerHTML="Good";
        status.style.background="orange";
        status.style.color="#ffffff";
       }
       if(counter == 3){
        status.innerHTML="Strong";
        status.style.background="green";
        status.style.color="#ffffff";
       }
   
    }
}

function success(){
    alert("Registration Successful.Please LOGIN");
}

