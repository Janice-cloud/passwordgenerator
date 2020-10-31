// DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("formControlRange");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const selectValue = document.getElementById("selectValue");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomnNumber,
  symbol: getRandomnSymbol,
};

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

console.log(getRandomnSymbol());
