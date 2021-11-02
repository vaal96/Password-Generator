// Assignment Code
// var generateBtn = document.querySelector("btn");
var symbolsA = "!@#$%^&*_-+=";
var symbols = symbolsA.split(""); 
var lettersA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letters = lettersA.split(""); 
var numbersA ="0123456789"
var numbers = numbersA.split(""); 
var lowerLettersA = "abcdefghijklmnopqrstuvwxyz";
var lowerLetters = lowerLettersA.split("");
//var resultP = "";
//var charsType = [];
//var i;
//var length = passLength;
//var passwordTxt = document.getElementById("password");
//var length = document.getElementById("length");
//var incNumbers = document.getElementById("numbers");
//var incSymbols = document.getElementById("symbols");
//ar generateBtn = document.getElementById("generate");
//const generateBtn = document.getElementById("generate");
//dynamic vars
window.onload = alert("Click 'Generate Password' to start!");



function generatePassword() {
  var resultP = "";
  var charsType = [];
  // TODO: Your code to generate a password goes here. Be sure to return a password
  var lengthT = prompt("How long would you like your password to be?");
   
  if(lengthT < 8 || lengthT > 128){
    alert("Password must be between 8 to 128 characters long.\nTry again")
    return generatePassword();
  }

  if (confirm("Include lowercase letters?")){
    charsType = charsType.concat(lowerLetters)
  }
  if (confirm("Include uppercase letters?")){
    charsType = charsType.concat(letters)
  }
  if (confirm("Include numbers?")){
    charsType = charsType.concat(numbers)
  }
  if (confirm("Include symbols?")){
    charsType = charsType.concat(symbols)
  } for (var i = 0; i < lengthT; ++i){
        var random = Math.floor(Math.random() * charsType.length);
        resultP += charsType[random];
      }
      document.getElementById("password").innerHTML = resultP;


  
};
 // var password = "password1234";
  // return password;

  //generateBtn.addEventListener("click", writePassword);
  
  

// this snip?
generatePassword(); 
document.getElementById("password").innerText = resultP;
  
 // passwordTxt = document.querySelector("#password");


 // bottom line 
//resultP.value = password;
//  passwordTxt.textContent = password;


