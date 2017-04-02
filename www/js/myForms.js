function checkPass()
{
       
    
    //Store the password field objects into variables ...
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('password_confirm');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Passwords Match";
        $('#regBtn').prop('disabled', false);
        $('#regOwner').prop('disabled', false);
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        $('#regBtn').prop('disabled', true);
        $('#regOwner').prop('disabled', true);
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Passwords Do Not Match!"
    }
} 
function validatephone(phone) 
{
    var maintainplus = '';
    var numval = phone.value
    if ( numval.charAt(0)=='+' )
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}
// validates text only
function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
// validate email
function email_validate(email)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
   var status = document.getElementById("emailstatus");
    if(regMail.test(email) == false)
    {    
    document.getElementById("emailstatus").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
        status.style.color = "#f44336";
        $('#regBtn').prop('disabled', true);
        $('#regOwner').prop('disabled', true);
    }
    else
    {
    document.getElementById("emailstatus").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";	
        status.style.color = "#a5d6a7";
        $('#regBtn').prop('disabled', false);
        $('#regOwner').prop('disabled', false);
    }
}
// validate date of birth
function dob_validate(dob)
{
var regDOB = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;

    if(regDOB.test(dob) == false)
    {
    document.getElementById("statusDOB").innerHTML	= "<span class='warning'>DOB is only used to verify your age.</span>";
    }
    else
    {
    document.getElementById("statusDOB").innerHTML	= "<span class='valid'>Thanks, you have entered a valid DOB!</span>";	
    }
}
// validate address
function add_validate(address)
{
var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;
  
    if(regAdd.test(address) == false)
    {
    document.getElementById("statusAdd").innerHTML	= "<span class='warning'>Address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("statusAdd").innerHTML	= "<span class='valid'>Thanks, Address looks valid!</span>";	
    }
}


function loggin(field1, field2){
                $.getJSON('http://localhost/server/session.php', { get_param: 'value' }, function(data) {
                    $.each(data, function(index, element) {
                        var usernamed = element.username;
                        $('#username').html(usernamed);
                    });
                });
}


/*==========================================================
      Script for home left nav
====================================================*/
        function openNav() {
          document.getElementById('mySidenav').style.width = '300px';
        }

        function closeNav() {
          document.getElementById('mySidenav').style.width = '0';
        }    


/*================================================================================================
          ALL SCRIPTS SPECIFIC FOR USER HOME
==================================================================================================*/
    $(document).ready(function(){
      
                $.getJSON('http://localhost/server/session.php', { get_param: 'value' }, function(data) {
                    $.each(data, function(index, element) {
                        var usernamed = element.username;
                        var emaild = element.email;
                        $('#username').html(usernamed);
                        $('#user').text(usernamed);
                        $("#email").text(emaild);
                    });
                });
            
    
})
    
/*================================================================================================
          ALL SCRIPTS SPECIFIC FOR OWNER HOME
==================================================================================================*/
    $(document).ready(function(){
        
      
                $.getJSON('http://localhost/server/ownerSession.php', { get_param: 'value' }, function(data) {
                    $.each(data, function(index, element) {
                        var ownerIdno = element.idno;
                        var ownerFname = element.firstname;
                        var ownerLname = element.lastname;
                        var ownerEmail = element.email;
                        $('#ownername').html(ownerFname + " " + ownerLname);
                        $('#owner').text(ownerFname + " "+ ownerLname);
                        $("#ownerEmail").text(ownerEmail);
                    });
                });
            
    
        
$("#addCar").click(function(){
    $('#imagearea').load('addCar.html');
}) 

$("#viewCar").click(function(){
    $('#imagearea').load('viewCar.html');
}) 
        
        
})    

/*=====================================================================================================
           Accordion
=======================================================================================================*/    
  $( function() {
      
    $( "#accordion" ).accordion({heightStyle: 'panel',
                                         event: "click",
                                        active: false,
                                        collapsible: true,
                                        autoHeight: false
                                
                                });
  } );

/*=================================================================================================================
                  GROBAL FUNCTIONS
==================================================================================================================*/
$(Document).ready(function(){

        
                $.getJSON('http://localhost/server/session.php', { get_param: 'value' }, function(data) {
                    $.each(data, function(index, element) {

                       
                    });
                    
                });
                    

   
               
    function ownerLoggedin(){

    }
        

})



/*
                var username1 = $('.username').val();
                var email1 = document.getElementById('email');
                var password1 = document.getElementById('password');
                var confirmpassword1 = document.getElementById('password_confirm');

                if(username==''|| email==''|| password==''|| confirmpassword==''){
                    alert('fill in empty fields');
                }else{
                    $.post('http://gari.000webhostapp.com/register.php',{username:username1, email:email1, password:password1, confirmpassword:confirmpassword1}, function(data){
                        $('#status').html(data);
                    });
                } */