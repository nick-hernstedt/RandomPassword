// DOM elements

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var clipEl = document.getElementById("clipboard");


// object containing our functions
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};


// functions for  generator - http://www.net-comber.com/charset.html (list of charater st codes)

// pulls random number from CharCode sheet, rounds it down, multiplies it by 26 as there are 26 numbers in alphabet and add 97 to that number at lowercase numbers start at char code 97
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// pulls random number from CharCode sheet, rounds it down, multiplies it by 26 as there are 26 numbers in alphabet and add 65 to that number at uppercase numbers start at char code 65
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// pulls random number from CharCode sheet, rounds it down, multiplies it by 10 as there are 10 numbers and add 48 to that number as numbers start at char code 48
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// creates a string of symbols, then pulls a random number from the strong(rounded down) and uses that symobl
function getRandomSymbol() {
    var symbols = "!@#$%^&*()";
    return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomLower());