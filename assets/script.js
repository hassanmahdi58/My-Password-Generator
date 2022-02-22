var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#securepassword");



generateBtn.addEventListener("click", enterPassword);

let lowercaseOptions = "abcdefghijklmnopqrstuvwxyz"
let uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numberOptions = "0123456789"
let symbolOptions = "!%&,*+-./<>?~"

function generatePassword(){ 
var length = prompt (" Please enter 8 to 128 number for the password"); 
// the length for the password 
while(length < 8 || length > 128){
  alert("Please Try again the passwod");
  var length= prompt("This  should be  8 and 128 numbers");
}
// user can decide which these want to have in the password variable
var lowercase = confirm ("Click Ok to have lowercase");
var uppercase = confirm ("Click Ok to have uppercase");
var numbers = confirm ("Click Ok to have numbers");
var symbols = confirm ("Click Ok to have symbols");

console.log({})

console.log({lowercaseOptions , uppercaseOptions , numberOptions, symbolOptions})

let useroptions = lowercaseOptions + numberOptions + uppercaseOptions + symbolOptions

console.log(useroptions)

useroptions[Math.floor(Math.random()*useroptions.length)];




// create the password

var createPassword = '';

  for ( var i=0; i<length ; i++){
    createPassword = createPassword + useroptions[Math.floor(Math.random()*useroptions.length)];
    console.log(createPassword);
  }
  return createPassword
}



// enter password 
function enterPassword() {
  var securepassword = generatePassword();
 

  passwordText.value = securepassword;
}