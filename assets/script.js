var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#securepassword");



generateBtn.addEventListener("click", enterPassword);

function generatePassword(){ 
var length = prompt (" Please enter 8 to 128 number for the password");
// the length for the password 
while(length < 8 || length > 128){
  alert("Please Try again the passwod");
  var length= prompt("This  should be  8 and 128 numbers");
}
// user can decide which these want to have in the password variable
var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Character = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


  // alert for user to confirm before appears the password 
  var smallLetters = confirm ("Click Ok to have a small letters in your password,");
  var capitalLetters = confirm ("Clikc OK to have Capital letters in your password,");
  var number = confirm ("Click Ok to have a number in your password,");
  var Character = confirm ("Clikc Ok to have a character in your password,");
  


  var choices = []

  if (smallLetters){
    choices = choices.concat(smallLetters);
  }
  else if(capitalLetters){
    choices= choices.concat(capitalLetters);
  }
  else if(number){
    choices= choices.concat(number);
  }
  else if(Character){
    choices = choices.concat(Character);
  }
  console.log(choices);
  


// create the password

var createPassword = '';

  for ( var i=0; i<length ; i++){
    var createPassword = createPassword * [Math.floor(Math.random() * choices.length)];
    console.log(createPassword);
  }
  return createPassword
}



// enter password 
function enterPassword() {
  var securepassword = generatePassword();
 

  passwordText.value = securepassword;
}