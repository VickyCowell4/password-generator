// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  var passwordLength;
  var lowerCaseOption;
  var upperCaseOption;
  var specialCharactersOption
  var numberOption

  // Function to prompt user for password options
  function getPasswordOptions() {
  passwordLength =prompt(
    "Please enter password length. Choose a number between 8 and 128."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please enter password length. Choose a number between 8 and 128."
    );
    return;
  } 
  lowerCaseOption =confirm(
  "Do you want the password to contain lower case characters?"
  );
  upperCaseOption =confirm(
  "Do you want the password to contain upper case characters?"
  );
  specialCharactersOption =confirm(
  "Do you want the password to contain special characters?"
  );
  numberOption =confirm(
  "Do you want the password to contain numbers?"
  );
  
  if (!lowerCaseOption &&
    !upperCaseOption &&
    !specialCharactersOption &&
    !numberOption
    ) {
    alert("Please select at least one character type.");
    return;
    }
  
  var userInputChoice = {
    passLength: passwordLength,
    lowerCase: lowerCaseOption,
    upperCase: upperCaseOption,
    specialChar: specialCharactersOption,
    numbers: numberOption
  };
  return userInputChoice;
  
  }
  // Function for getting a random element from an array
  function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length); 
  return arr[randomIndex];
  }
  
  // Function to generate password with user input
  function generatePassword() {
    let result =[];
    var password =[];
    var allPossibleChars =[];
    var allGuaranteedChars =[];
    var options =getPasswordOptions();
  
    if (options.specialChar) {
      allPossibleChars = allPossibleChars.concat(specialCharacters);
      allGuaranteedChars.push(getRandom(specialCharactersOption))
    }
    if (options.numbers){
      allPossibleChars = allPossibleChars.concat(numericCharacters);
      allGuaranteedChars.push(getRandom(numericCharacters))
    }
  
    if (options.upperCase){
      allPossibleChars = allPossibleChars.concat(upperCasedCharacters);
      allGuaranteedChars.push(getRandom(upperCasedCharacters))
    }
  
    if (options.lowerCase){
      allPossibleChars = allPossibleChars.concat(lowerCasedCharacters);
      allGuaranteedChars.push(getRandom(lowerCasedCharacters))
    }

    console.log(allPossibleChars)
    // return "hello";
  for (let i = 0; i < options.passLength; i++) {
    let possibleChar = getRandom(allPossibleChars)
    result.push(possibleChar)
    console.log(result)
  }

  for (let i = 0; i < allGuaranteedChars.length; i++) {
result[i] = allGuaranteedChars[i]
console.log(allGuaranteedChars)
  }
  console.log(result)
  return result.join("")

  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);