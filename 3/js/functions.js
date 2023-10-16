// Функция 1
const checkString = (string, length) => string.length <= length;
checkString('проверяемая строка', 20);

// Функция 2
const isPalindrome = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i=string.length-1; i>=0; i--) {
    reverseString+=string[i];
  }
  return string===reverseString;
};
isPalindrome('ДовОд');

// Функция 3
const getNumber = function(string) {
  string = string.toString().replaceAll(' ', '');
  let number = '';
  for (let i=0; i<string.length; i++) {
    if (Number(string[i]) || string[i] === '0') {
      number += string[i];
    }
  }
  return number==='' ? NaN : parseInt(number, 10);
};
getNumber('2023 год');
