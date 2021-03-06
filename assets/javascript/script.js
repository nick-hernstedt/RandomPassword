

// // DOM elements

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');


// // object containing our functions
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

// // creates event that watches for click on button, then see what option boxes are checked then passes result into the password bar
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
    
    // //copy to clipboard
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// //generate password function

function generatePassword(lower, upper, number, symbol, length) {
    //     // 1. Init pw var
//     // 2. filter out unchecked types
//     // 3. loop over length call generator function for each type
//     // 4. Add final pw to the pw var and return 
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	// //  allows for 1 length passwords even if all 4 options are checked
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}


// // functions for  generator - http://www.net-comber.com/charset.html (list of charater st codes)

// // pulls random number from CharCode sheet, rounds it down, multiplies it by 26 as there are 26 numbers in alphabet and add 97 to that number at lowercase numbers start at char code 97

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


// // pulls random number from CharCode sheet, rounds it down, multiplies it by 26 as there are 26 numbers in alphabet and add 65 to that number at uppercase numbers start at char code 65
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


// // pulls random number from CharCode sheet, rounds it down, multiplies it by 10 as there are 10 numbers and add 48 to that number as numbers start at char code 48
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


// // creates a string of symbols, then pulls a random number from the strong(rounded down) and uses that symobl
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}







