// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("formControlRange");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const selectValue = document.getElementById("selectValue");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomnNumber,
  symbol: getRandomnSymbol,
};

// Generate event listener
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

//Generate password function
function generatePassword(length, lower, upper, number, symbol) {
  // 1. Initialise password var
  // 2. Filter out unchecked types
  // 3. Loop over the length call generator function for each type
  // 4. Add the final password to the password var and return.

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  //console.log('typesCount', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item)[0]
  );

  //console.log('typesArr:', typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //console.log("funcName:", funcName);

      generatedPassword += randomFunc[funcName]();

    });
  }
  
  const finalPassword = generatedPassword.slice(0, length);

  //console.log(finalPassword)

  return finalPassword
}

// Slider function

selectValue.innerHTML = lengthEl.value;

lengthEl.oninput = function () {
  selectValue.innerHTML = this.value;
  selectValue.style.left = this.value + "%";
  selectValue.style.marginLeft = "-50px";
};

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomnNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomnSymbol() {
  const symbols = "!@#$%^&*(){}[]|/<>,.?':;~`_+=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomnSymbol());
