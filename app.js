const form = document.getElementById('form');
const passwordRange = document.getElementById('passwordRange');
const passwordNumber = document.getElementById('passwordNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');

const generatedPassword = document.getElementById('generated-password');
passwordRange.addEventListener('input', passwordCount);
passwordNumber.addEventListener('input', passwordCount);


// Array of Character Codes
const UPPERCASE = fromLowtoHigh(65, 90);
const LOWERCASE = fromLowtoHigh(97, 122);
const NUMBER = fromLowtoHigh(48, 57)
const SYMBOL = fromLowtoHigh(33, 47).concat(
  fromLowtoHigh(58, 64)
).concat(
  fromLowtoHigh(91, 96)
).concat(
  fromLowtoHigh(123, 126)
)

// This will determine the length of the password
function passwordCount(e) {
    const value = e.target.value;
    passwordRange.value = value;
    passwordNumber.value = value;
}

form.addEventListener('submit', e=> {
    e.preventDefault();
    const passwordCount = passwordNumber.value;

    // It will save the value of checkbox if it is checked it will return true and false if not, then it will be save to a variable
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(passwordCount, includeUppercase, includeNumbers, includeSymbols);
    generatedPassword.innerHTML = password;
});


function generatePassword(passwordCount, includeUppercase, includeNumbers, includeSymbols) {
  // For the default Password are all lowercase [65 - 90]
  let charCodes = LOWERCASE 
  
  // If uppercase is enabled it will concat all the UPPERCASE Charater codes [97, 122]
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE);

  // If Numbers is enabled it will concat all the NUMBERS Charater codes [48, 57]
  if (includeNumbers) charCodes = charCodes.concat(NUMBER);
  

  // If symbol is enabled it will concat all the SYMBOLS Charater codes [33, 47], [58, 64], [91, 96], [123, 126]
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL);

  // The code will assign a random value from CharCodes and save it to passwordCharacters
  const passwordCharacters = []
  for (let i = 0; i < passwordCount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  // This will return a string value of passwordCharacters
  return passwordCharacters.join('')
}

function fromLowtoHigh(low,high) {
    const array = [];
    for(let i = low; i<=high; i++) {
        array.push(i);
    }
    return array;
}