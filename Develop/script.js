// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
// variables for possible characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var toUpper = function (x) {
  return x.toUpperCase();
};

var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", ".", ",", " < ", ">", ";", ":", "[", "]", "\\", "{", "}", "_", "`", "|", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password function
function generatePassword() {
  // prompt for length 
  passwordLength = prompt("How many characters would you like to generate? (8-128)")
  
    // error messages
    if(!passwordLength) {
      alert("Must enter value");  
    }
  // prompt for character types
  // generate password
  // display password
}

