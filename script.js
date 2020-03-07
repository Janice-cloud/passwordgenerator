//writen code will show in #password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


generateBtn.addEventListener("click", writePassword);


  function writePassword() {
      
    do var passwordlength = prompt("How long do you want your password to be? Must pick a number between 8 - 128");
      while (passwordlength <= 8 || passwordlength >= 128);

      if ( passwordlength >= 8 || passwordlength <= 128) {
        alert("length of password is " + passwordlength);
        }
      
      var length = parseInt(passwordlength);
      //console.log(length);

      do {var lowercase = confirm("Do you want lowercases in your password?"); 
        var uppercase = confirm("Do you want UPPERCASES in your password?");
        var numbers = confirm("Do you want numbers in your password?");
        var symbols = confirm("Would you like to include special characters?");}
        while (lowercase === false && uppercase === false && numbers === false && symbols === false);

      if (lowercase === true && uppercase === true && numbers === true && symbols === true) {            
        var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      }    
      
      if (lowercase === true && uppercase === true && numbers === true) {
        var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      }

      if (lowercase === true && uppercase === true && symbols === true)  {
        var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      }

      if (lowercase === true && numbers === true && symbols === true) {            
        var values = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (uppercase === true && numbers === true && symbols === true) {            
        var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (lowercase === true && uppercase === true) {            
        var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (lowercase === true && numbers === true) {            
        var values = "abcdefghijklmnopqrstuvwxyz0123456789";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (lowercase === true && symbols === true) {            
        var values = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (uppercase === true && numbers === true) {            
        var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (uppercase === true && symbols === true) {            
        var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 

      if (numbers === true && symbols === true) {            
        var values = "ß0123456789!@#$%^&*()_+";
        var password = "";
        for (var i = 0; i <= length; i++) { 
          password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
          passwordText.value = password;
        }
      } 
    }
    
  






  
