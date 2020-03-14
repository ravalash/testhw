// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function to generate password
function generatePassword() {
  // variables for generate password function
  var password = "";
  var charSet = "";
  var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  var lowerCaseCharSet = "abcdefghiklmnopqrstuvwxyz";
  var numberCharSet = "123456789";
  var symbolCharSet = "#@!%&()/";
  // Password length
  var options = prompt("How many characters would you like in your password?");
  var integer = parseInt(options, 10);
  if (options < 8 || options > 128) {
    alert("Password length should be 8-128 characters. Please try again.");
    prompt("How many characters would you like in your password?");
  }
  else {
    alert("You have chosen a password of " + options + " characters.");
  }
  // Confirm which character types are used in password
  var lower = confirm("Would you like lowercase letters in your password?");
  var upper = confirm("Would you like uppercase letters in your password?");
  var nums = confirm("Would you like numeric characters in your password?");
  var special = confirm("Would you like special characters in your password?");
  if (lower===true) {
    charSet = charSet + lowerCaseCharSet;
  }
  if (upper===true) {
    charSet = charSet + upperCaseCharSet;
  }
  if (nums===true) {
    charSet = charSet + numberCharSet;
  }
  if (special===true) {
    charSet = charSet + symbolCharSet;
  }
  console.log(charSet);

  for (var i = 0; i < options; i++) {
    var password = password+(charSet[Math.floor(Math.random() * charSet.length)]);
    console.log(password);
  }
  console.log(password);
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
