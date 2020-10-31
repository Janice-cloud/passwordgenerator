// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomnNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomnSymbol() {
  const symbols = "!@#$%^&*(){}[]|\/<>,.?':;~`_+=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomnSymbol());

