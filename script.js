// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // GIVEN I need a new, secure password
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  // Declare the variables used to generate the password
  var randomPassword = "";
  var passwordLength;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;

  // Prompts to retrieve password length
  do {
    passwordLength = prompt("Please choose a password length, between 8 and 128 characters.")
  }
  while (!validateNumber(passwordLength));

  // Loop for the password length
  for (var i = 0; i < passwordLength; i++) {

    console.log('Generating '+i);
  
  }

  return randomPassword;

}

// Function to validate the number input is valid
function validateNumber(number) {

  // Convert the string into a number
  number = parseInt(number);

  // Check the input is a number
  if (isNaN(number)) {
    console.log('[Error] This is not a number.');
    return false;
  }
  // Check the input is between 8 and 128
  else if ((number < 8) || (number > 128)) {
    console.log('[Error] This number is outside of the range.');
    return false;
  }
  // Input is validated
  else {
    console.log("[Validated] This number meets the criteria.")
    return true;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
