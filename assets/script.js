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
let lowercaseOptions = "abcdefghijklmnopqrstuvwxyz"
let uppercaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numberOptions = "0123456789"
let symbolOptions = "!%&,*+-./<>?~"

console.log({})

console.log({lowercaseOptions , uppercaseOptions , numberOptions, symbolOptions})

let useroptions = lowercaseOptions + numberOptions + uppercaseOptions + symbolOptions

console.log(useroptions)

useroptions[Math.floor(Math.random()*useroptions.length)];

lowercaseOptions[Math.floor(Math.random()*lowercaseOptions.length)];

let password = useroptions[Math.floor(Math.random()*useroptions.length)];

password = password + useroptions[Math.floor(Math.random()*useroptions.length)];


  


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