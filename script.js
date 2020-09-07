// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare the variables used to generate the password
var randomPassword = "";
var passwordLength;
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
var chosenParameters = [];

// Function to generate a random number, to choose the characters
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to reset variables
function resetVariables() {
  randomPassword = "";
  lowercase = false;
  uppercase = false;
  numeric = false;
  special = false;
  chosenParameters = [];
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

// Function to validate at least one choice was selected
function validateParameter() {

  var checkTrue = false;

  if (lowercase) {
    checkTrue = true;
    chosenParameters.push("lowercase");
  }
  if (uppercase) {
    checkTrue = true;
    chosenParameters.push("uppercase");
  }
  if (numeric) {
    checkTrue = true;
    chosenParameters.push("numeric");
  }
  if (special) {
    checkTrue = true;
    chosenParameters.push("special");
  }

  if (checkTrue) {
    console.log('You selected: ' + chosenParameters.toString());
    return true;
  }
  else {
    alert("Warning!\nYou need to select at least ONE parameter.");
    return false;
  }
}

// Function to generate a lowercase (false) or uppercase (true) character
function generateCharacter(isUppercase) {

  // Declare the available options
  var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Choose the option randomly
  var choice = generateRandomNumber(1, options.length);
  var chosen = options[choice - 1];

  // Return the chosen character, either lowercase or uppercase
  if (isUppercase) {
    return chosen.toUpperCase();
  }
  else {
    return chosen;
  }
}

// Function to generate a number
function generateNumeric() {

  // Declare the available options
  var options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Choose the option randomly
  var choice = generateRandomNumber(1, options.length);
  var chosen = options[choice - 1];

  // Return the chosen character
  return chosen;
}

// Function to generate a special character
function generateSpecial() {

  // Declare the available options
  var options = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "z@", "[", "\\", "]", "^", "_", "{", "|", "}", "~"];

  // Choose the option randomly
  var choice = generateRandomNumber(1, options.length);
  var chosen = options[choice - 1];

  // Return the chosen character
  return chosen;
}

// Function to generate the password
function generatePassword() {

  // Reset the variables
  resetVariables();

  // Prompts to retrieve password length
  do {
    passwordLength = prompt("Step 1/5:\nPlease choose a password length, between 8 and 128 characters.")
  }
  // Validate the password input
  while (!validateNumber(passwordLength));

  // Check remaining parameter
  do {
    // Check for lowercase characters
    lowercase = confirm("Step 2/5:\nWould you like to use lowercase characters in your password?");

    // Check for uppercase characters
    uppercase = confirm("Step 3/5:\nWould you like to use uppercase characters in your password?");

    // Check for numeric characters
    numeric = confirm("Step 4/5:\nWould you like to use numeric characters in your password?");

    // Check for special characters
    special = confirm("Step 5/5:\nWould you like to use special characters in your password?");
  }
  // Validate the entered parameters, with at least ONE selected
  while (!validateParameter());

  // Time to generate the password
  // Loop for the password length
  for (var i = 0; i < passwordLength; i++) {

    // Reset the result to an empty string before generating
    var result = "";

    // Randomly select the parameter type
    var choice = generateRandomNumber(1, chosenParameters.length);
    var chosen = chosenParameters[choice - 1];

    // Choose which type of character to generate
    switch (chosen) {

      case "lowercase":
        result = generateCharacter(false);
        break;

      case "uppercase":
        result = generateCharacter(true);
        break;

      case "numeric":
        result = generateNumeric();
        break;

      case "special":
        result = generateSpecial();
        break;
    }

    // Add the returned character to the password
    randomPassword += result;
    console.log('Generating password(' + i + '): ' + randomPassword);

  }

  // Return the password to the function
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);