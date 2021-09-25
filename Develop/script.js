// Assignment Code
// var generateBtn = document.querySelector("btn");
var symbols = ["!@#$%^&*_-+="];
var letters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
var arrayLength = symbols.length
var i;


var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
//const generateBtn = document.getElementById("generate");


 

function generatePassword() {
  // TODO: Your code to generate a password goes here. Be sure to return a password
  
  // string. You will need to change the following two lines of code.
   letters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
   symbols = ["!@#$%^&*_-+="];
   //password = [""];

   

}
 // var password = "password1234";
  // return password;

  
  generateBtn.addEventListener("click", writePassword);
  // document.getElementById("generate").innerHTML = password;


// Write password to the #password input
 function writePassword() {
  for (i = 0; i < 10; i++) {
    let generatedPassword = letters[Math.floor(Math.random() * 62)]
  }

  var password = generatePassword();
  generatePassword(); 
  
 // passwordTxt = document.querySelector("#password");

  passwordTxt.value = password;
//  passwordTxt.textContent = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


  // let characters = letters;
  // incNumbers(characters += numbers) = "";
  // incSymbols (characters += symbols) = "";
  // incNumbers.checked ? (characters += numbers) : "";
  // incSymbols.checked ? (characters += symbols) : "";
  // passwordTxt.value = generatePassword(length.value, characters);
