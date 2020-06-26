// GETTING ALL INPUT TEXT ELEMENTS
var emails = document.getElementById("email");
var passwords = document.getElementById("password");

// GETTING ALL ERROR DISPLAY ELEMENTS
var emailids=document.getElementById("emailid");
var passwordids=document.getElementById("passwordid");

// SETTING ALL EVENT LISTENERS
emails.addEventListener("focusout",emailVerify);
passwords.addEventListener("focusout",passwordVerify);

//EVENT HANDLER FUNCTIONS
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
         return true;
     }
     else{
         passwords.style.border="2px solid red";
         passwordids.textContent="**Invalid password";
         passwords.focus();
         return false;
         }
       
 }


