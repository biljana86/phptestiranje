   $(document).ready(function () { 
    $('#formRegister').addClass('hide');
    
     $("#Singup").click(function(e) {
           e.preventDefault();
           $('#formRegister').removeClass('hide');
      });
      
    $( "#email" ).blur(function() {
      var email=$("#email").val();
      var regEmail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if(!regEmail.test(email)){
		$('#email').css({"border": " 2px solid red"});
		$('#email').val("Please insert your email.");
       }
       else{
           $('#email').css({"border": ""});
       } });
	   
    $( "#passwd" ).blur(function() {
         var passwd=$("#passwd").val();
          var regPasswd=/^[a-z0-9_-]{3,16}$/;
          if(!regPasswd.test(passwd)){
		$('#passwd').css({"border": " 2px solid red"});
        }
        else{
            $('#passwd').css({"border": ""});} });
    
      $("#btnLogin").click(function(e){
         var forma=document.login;
         var email= $("#email").val();
         var pass=$("#passwd").val();
         var remail= 	/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if(email.match(remail)){
                $("#login").submit(); 
              }
             else{
                 $('#email').css({"border": " 2px solid red"});
                 $('#passwd').css({"border": " 2px solid red"});
                  e.preventDefault();
                } });
   
     $("#btnSubmit").click(function(e){
         var name=$('#tbname').val();
         var lastname=$('#tblastname').val();
         var email=$('#tbemail').val();
         var passwd=$('#tbpasswd').val();
         var passwd2=$('#tbpasswd2').val();
         var regName=/^[A-Z]{1}[a-z]{2,19}$/;
         var regemail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
         var regPass=/^[a-z0-9_-]{3,16}$/;
         if(!regName.test(name)|| !regName.test(lastname) || !regemail.test(email) || !regPass.test(passwd) || passwd!=passwd2){
            if(!regName.test(name)){
                 $('#tbname').css({"border": " 2px solid red"});
                 $('#tbname').val("Please insert your name. Example:Pera");
                }   
            if(!regName.test(lastname)){
                 $('#tblastname').css({"border": " 2px solid red"});
                $('#tblastname').val("Please insert your lastname. Example:Peric");
               }
            if(!regemail.test(email)){
                  $('#tbemail').css({"border": " 2px solid red"});
                 $('#tbemail').val("Please insert your email.");}
            if(!regPass.test(passwd)){
                    $('#tbpasswd').css({"border": " 2px solid red"});
              } 
            if(passwd!=passwd2){
                  $('#tbpasswd2').css({"border": " 2px solid red"});
                }
            e.preventDefault();
                          
        }
         else{  
             $('#register').submit();}
      
    });
    
     $( "#tbname" ).blur(function() {
           var name=$("#tbname").val();
           var regName=/^[A-Z]{1}[a-z]{2,19}$/;
            if(!regName.test(name)){
                 $('#tbname').css({"border": " 2px solid red"});
                 $('#tbname').val("Please insert your name. Example:Pera");
             }
             else
             {  
                 $('#tbname').css({"border": ""});
             }
        });
       $( "#tbpasswd" ).blur(function() {
            var name=$("#passwd").val();
            var regName=/^[a-z0-9_-]{3,16}$/;
            if(!regName.test(name)){
                $('#tbpasswd').css({"border": " 2px solid red"});
              }
              else{
                  $('#tbpasswd').css({"border": ""});
              }
});
     $( "#tbpasswd2" ).blur(function() {
          var pass1=$("#tbpasswd").val();
          var pass2=$("#tbpasswd2").val();
           if(pass1!=pass2){
                 $('#tbpasswd2').css({"border": " 2px solid red"});
             }
             else{
                 $('#tbpasswd').css({"border": ""});
             }
});
       $( "#tblastname" ).blur(function() {
             var name=$("#tblastname").val();
             var regName=/^[A-Z]{1}[a-z]{2,19}$/;
             if(!regName.test(name)){
                $('#tblastname').css({"border": " 2px solid red"});
                $('#tblastname').val("Please insert your lastname. Example:Peric");
            }
            else{
                $('#tblastname').css({"border": ""});
            }
});
        $( "#tbemail" ).blur(function() {
           var name=$("#tbemail").val();
           var regName=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
           if(!regName.test(name)){
                 $('#tbemail').css({"border": " 2px solid red"});
                 $('#tbemail').val("Please insert your email.");
            }
            else{
                $('#tbemail').css({"border": ""});
            }
});
 
   });

