var SetupUI = (function() {
const textField = document.querySelector('#textField');
const encode = document.querySelector('#encode');
const decode = document.querySelector('#decode');
const dropDown = document.querySelector('#dropDown');
})();


//setUpLogic Module (constants, variables, click handlers)
var setUpLogic = (function() {
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '-!$%^&*()_+|~@#=`{}[]:";\'<>?,.\\/'

encode.addEventListener('click', () => {
let str = textField.value.split('');
let result = '';
let cipherNo = parseInt(dropDown.value);

let encodedString = str.map((value) => {

if(/[A-Z]/.test(value)) {
  let index = upperCase.indexOf(value) + cipherNo;
  if(index > 25) {
    index -= 26;
    return upperCase[index];
  } else {
return upperCase[index];
}
}

if(/[a-z]/.test(value)) {
  let index = lowerCase.indexOf(value) + cipherNo;
  if(index > 25) {
    index -= 26;
    return lowerCase[index];
  } else {
return lowerCase[index];
  }
}

if(/[0-9]/.test(value)) {
  let index = numbers.indexOf(value) + cipherNo;
  if(index > 9) {
    index -= 10;
    return numbers[index];
  } else {
return numbers[index];
}
}

if(symbols.includes(value)) {
  let index = symbols.indexOf(value) + cipherNo;
  if(index > 31) {
    index -= 32;
    return symbols[index];
  } else {
  return symbols[index];
  }
}

else {
  return value;
}

}).join('')
textField.value = encodedString;
return encodedString;
});


/*-----------------Decode------------------*/


decode.addEventListener('click', () => {
let str = textField.value.split('');
let result = '';
let cipherNo = parseInt(dropDown.value);

let decodedString = str.map((value) => {

if(/[A-Z]/.test(value)) {
  let index = upperCase.indexOf(value) - cipherNo;
  if(index < 0) {
    index += 26;
    return upperCase[index];
  } else {
return upperCase[index];
}
}

if(/[a-z]/.test(value)) {
  let index = lowerCase.indexOf(value) - cipherNo;
  if(index < 0) {
    index += 26;
    return lowerCase[index];
  } else {
return lowerCase[index];
  }
}

if(/[0-9]/.test(value)) {
  let index = numbers.indexOf(value) - cipherNo;
  if(index < 0) {
    index += 10;
    return numbers[index];
  } else {
return numbers[index];
}
}

if(symbols.includes(value)) {
  let index = symbols.indexOf(value) - cipherNo;
  if(index < 0) {
    index += 32;
    return symbols[index];
  } else {
  return symbols[index];
  }
}

else {
  return value
}

}).join('')
textField.value = decodedString;
return decodedString;
});

})();
