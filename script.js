
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  //
  const selectedCharacters = [];

  if (confirm("Do you want lower case letters?") == true) {
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    selectedCharacters.push.apply(selectedCharacters, lowerCase);
  }
  if (confirm("Do you want upper case letters?") == true) {
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    selectedCharacters.push.apply(selectedCharacters, upperCase);
  }
  if (confirm("Do you want numbers?") == true) {
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    selectedCharacters.push.apply(selectedCharacters, numbers);
  }
  if (confirm("Do you want special characters?") == true) {
    const specialCharacters = ['!','”','#','$','%','&','’','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',',']','^','_','`','|','}','~'];
    selectedCharacters.push.apply(selectedCharacters, specialCharacters);
  }
  const passwordLength = prompt("How long do you want the password to be?");
  const passwordArray = [];

  while (passwordArray.length < passwordLength) {
    let randomNumber = Math.floor(Math.random() * (selectedCharacters.length));
    passwordArray.push(selectedCharacters[randomNumber]);
  }
  var passwordText = document.querySelector("#password");
  var newPassword = passwordArray.join('');
  passwordText.value = newPassword;
}