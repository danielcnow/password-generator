// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// variables for generatePassword function
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var omegaArray;
var userChoices = [];
// variables for possible characters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// upperCase
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "_",
  "=",
  ".",
  ",",
  " < ",
  ">",
  ";",
  ":",
  "[",
  "]",
  "\\",
  "{",
  "}",
  "_",
  "`",
  "|",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function for checking array
const isOneTrue = (element) => element === true;

// password function
function generatePassword() {
  // prompt for length
  passwordLength = prompt(
    "How many characters would you like to generate? (8-128)"
  );
  // empty array
  userChoices=[]
  omegaArray=[]
  passwordBlank=[]
  // error messages
  if (!passwordLength) {
    alert("Please enter a value.");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Choose an integer between 8 and 128");
  } else {
    while (!userChoices.some(isOneTrue)) {
      // prompts for character type and arraying the booleans\
      confirmLower = confirm("Will this contain lower case letters?");
        userChoices.push(confirmLower);
          if (confirmLower) {
            omegaArray = lowerCase
          }
      confirmUpper = confirm("Will this contain upper case letters?");
        userChoices.push(confirmUpper);
        if (confirmUpper) {
          omegaArray = omegaArray.concat(upperCase)
        }
      confirmNumber = confirm("Will this contain numbers?");
        userChoices.push(confirmNumber);
        if (confirmNumber) {
          omegaArray = omegaArray.concat(numbers)
        }
      confirmSpecial = confirm("Will this contain special characters?");
        userChoices.push(confirmSpecial);
        if (confirmSpecial) {
          omegaArray = omegaArray.concat(special)
        }
    };
  
  // random password loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = omegaArray[Math.floor(Math.random() * omegaArray.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // return password
  var password = passwordBlank.join("");
  return password;
  }
}

