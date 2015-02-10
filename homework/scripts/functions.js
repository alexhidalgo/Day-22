// // ---------------------
// // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// // ---------------------

// function max(a, b){
//     "use strict";
//     if(!_.isNumber(a)) {
// 		throw 'The first argument must be a number.';
// 	}
// 	 if(!_.isNumber(b)) {
// 		throw 'The second argument must be a number.';
// 	}
// 	 if(arguments.length > 2 || arguments.length < 2) {
// 		throw 'You must supply two arguments';
// 	}

//   if(a > b) {
//   	return a;
//   } else {
//   	return b;
//   }
// }

// // ---------------------
// // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// // ---------------------

// function maxOfThree(a, b, c) {
//     "use strict";
//   if(!_.isNumber(a)) {
//     throw 'The first argument must be a number.';
// 	}
// 	 if(!_.isNumber(b)) {
// 		throw 'The second argument must be a number.';
// 	}
// 	 if(!_.isNumber(c)) {
// 		throw 'The third argument must be a number.';
// 	}
// 	 if(arguments.length > 3 || arguments.length < 3) {
// 		throw 'You must supply three arguments';
// 	}
// 	var maxNum = 0;
//   if(a > b) {
//   	a = maxNum;
//   } else {
//   	b = maxNum;
//   }
//   if (c > maxNum) {
//   	return c;
//   } else {
//   	return maxNum;
//   }
// }

// // ---------------------
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // ---------------------

// function isVowel(char) {
//     "use strict";
//  	if(_.isNumber(char)) {
//   	throw 'The argument must be a character string.';
// 	}
//   if(char.length === 1 && char == /[aeiou]/i) {
//   	return true
//   } else {
//   	return false;
//   }
// }

// // ---------------------
// // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------

// function rovarspraket(phrase){
//     "use strict";
//     //...
// }

// // ---------------------
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// // ---------------------

// function sum(array){
// 	"use strict";
// 	if(!_.isNumber(array[i])) {
// 		throw 'The argument must be an array of numbers.';
// 	}
// 	if(array.length < 2) {
// 		throw 'You must have more than one element in the array.'
// 	}
//     array.reduce(function(a, b){
//     	return a.concat(b);
//     })
//   }
// function multiply(array){
//     "use strict";
//   var result = 0;
//   for(var i = 0; n = array.length; i < n; i++) {
//   	result *= array[i];
//   }
// }

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    if(!_.isString(string)) {
    	throw 'The argument must be a string.';
    }
    if(typeof(string) != 'string') {
    	throw 'The argument must be a string.';
    }
    if(string.length < 1) {
    	throw 'The argument must have more than one character.';
    }
    return string.split("").reverse().join("");
}

// // ---------------------
// // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// // ---------------------

// function findLongestWord(words){
//     "use strict";
//     //...
// }

// // ---------------------
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// // ---------------------

// function filterLongWords(words, i){
//     "use strict";
//     //...
// }

// // ---------------------
// // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // ---------------------

// function charFreq(string){
//     "use strict";
//     //...
// }
