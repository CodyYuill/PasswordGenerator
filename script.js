var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var charLists = []; //empty by default will have each list added as user confirms which 

var passwordLength = 0;
var minPasswordLength = 8;
var maxPasswordLength = 128;


var useSpecialChars = true;
var useNumericChars = true;
var useUppercaseChars = true;
var useLowerCaseChars = true;


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPasswordCriteria() {

  charLists.length = 0; //make sure array is empty before pushing onto it 

  useSpecialChars = confirm("Would you like to use special characters?");
  useNumericChars = confirm("Would you like to use numerical characters?");
  useUppercaseChars = confirm("Would you like to use uppercase characters?");
  useLowerCaseChars = confirm("Would you like to use lowercase characters?");
  
  //console.log(useSpecialChars);
  //console.log(useNumericChars);
  //console.log(useUppercaseChars);
  //console.log(useLowerCaseChars);
  
  if (useSpecialChars == true) 
    charLists.push(specialChars);
  
  if (useNumericChars == true) 
    charLists.push(numericChars);
  
  if (useUppercaseChars == true) 
    charLists.push(upperChars);
  
  if (useLowerCaseChars == true) 
    charLists.push(lowerChars);
  
}

function generatePassword() 
{
  passwordLength = prompt(`Please enter a length between ${minPasswordLength} and ${maxPasswordLength}`);
  // console.table(passwordLength);
  // console.table(isNaN(passwordLength));
  //keep asking for a password length if length is less than 8 or greater than 128 or is not even a number
  while (passwordLength < minPasswordLength || passwordLength > maxPasswordLength || isNaN(passwordLength) == true) 
  {
    passwordLength = prompt(`Please enter a length between ${minPasswordLength} and ${maxPasswordLength}`);
    // console.table(passwordLength);
    // console.table(isNaN(passwordLength));
  }

  getPasswordCriteria();

  //console.log(charLists.length);

  while (charLists.length == 0) 
  {
    alert("hahahahahaha lets try this again...")
    getPasswordCriteria();
  }

  var password = "";

  for(var i = 0; i < passwordLength; i++)
  {
    var index1 = Math.floor((Math.random()) * charLists.length);
    var index2 = Math.floor((Math.random()) * charLists[index1].length);

    //console.log(index1, index2);
    //console.log("----------------------------")

    password += charLists[index1][index2];
  } 

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

