var expect = chai.expect;

// // ---------------------
// // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// // ---------------------

// describe('max', function() {
// 	it('should not allow non-numeric arguments', function() {
// 		expect(function() {max('a', 1)}).to.throw('The first argument must be a number.');
// 		expect(function() {max(1, 'b')}).to.throw('The second argument must be a number.');
// 		expect(function(){max(1, 2, 3)}).to.throw('You must supply two arguments');
// 	});

// 	it('should return the max', function() {
// 		expect(max(1, 2)).to.equal(2);
// 		expect(max(0.1, 0.2)).to.equal(0.2);
// 		expect(max(-2, -1)).to.equal(-1);
// 		expect(max(0, 0)).to.equal(0);
// 	});
// });

// // ---------------------
// // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// //

// describe('maxOfThree', function(){
// 	it('should not allow non-numeric arguments', function() {
// 		expect(function() {maxOfThree('a', 1, 2)}).to.throw('The first argument must be a number.');
// 		expect(function() {maxOfThree(1, 'b', 2)}).to.throw('The second argument must be a number.');
// 		expect(function() {maxOfThree(2, 3, 'c')}).to.throw('The third argument must be a number.');
// 	});

// 	it('should return the max', function() {
// 		expect(maxOfThree(1, 2, 3)).to.equal(3);
// 		expect(maxOfThree(0.1, 0.2, 0.3)).to.equal(0.3);
// 		expect(maxOfThree(-2, -1, 0)).to.equal(0);
// 		expect(maxOfThree(0, 0, 0)).to.equal(0);
// 	});
// })

// // ---------------------
// // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // ---------------------

// describe('isVowel', function() {
// 	it('should not allow non-string characters', function() {
// 		expect(function() {isVowel(1)}).to.throw('The argument must be a character string.');
// 		expect(function() {isVowel('')}).to.throw('The argument must be a character string.');
// 		expect(function() {isVowel('a', 'b')}).to.throw('The argument must be a character string.');
// 		expect(function() {isVowel({ key: value })}).to.throw('The argument must be a character string.');
// 		expect(function() {isVowel(['a', 1])}).to.throw('The argument must be a character string.');
// 		expect(function() {isVowel(true)}).to.throw('The argument must be a character string.');
// 	})
// 	it('should return a bolean', function() {
// 		expect(isVowel('e')).to.equal(true);
// 		expect(isVowel('i')).to.equal(true);
// 	})
// })

// // ---------------------
// // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// // ---------------------

// describe('rovarspraket', function() {
// 	it('should not allow non-string characters', function() {
// 		expect(function() {rovarspraket(1)}).to.throw('The argument must be a string.');
// 		expect(function() {rovarspraket('')}).to.throw('The argument must be a string.');
// 		expect(function() {rovarspraket('a', 'b')}).to.throw('The argument must be only one string.');
// 		expect(function() {rovarspraket({ key: value })}).to.throw('The argument must be a string.');
// 		expect(function() {rovarspraket(['a', 1])}).to.throw('The argument must be a string.');
// 		expect(function() {rovarspraket(true)}).to.throw('The argument must be a string.');
// 	})
// 	it('should return a bolean', function() {
// 		expect(rovarspraket('alex hidalgo')).to.equal('alolexox hohidodalolgogo');
// 		expect(rovarspraket('alex')).to.equal('alolexox');
// 	})
// })

// // ---------------------
// // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// // ---------------------

// describe('sum', function() {
// 	it('should not allow non-numeric arguments', function() {
// 		// expect(function() {sum('')}).to.throw('The argument must be an array of numbers.');
// 		// expect(function() {sum('a')}).to.throw('The argument must be an array of numbers.');
// 		// expect(function() {sum([])}).to.throw('The argument must be an array of numbers.');
// 		// expect(function() {sum([1, 'a'])}).to.throw('The argument must be an array of numbers.');
// 		// expect(function() {sum([])}).to.throw('The argument must be an array of numbers.');
// 		expect(function() {sum([1])}).to.throw('You must have more than one element in the array.');
// 		// expect(function() {sum(true)}).to.throw('The argument must be an array of numbers.');
// 		// expect(function() {sum({ key: value })}).to.throw('The argument must be an array of numbers.');
// 	})
// 	it('should return the sum of that number array', function() {
// 		expect(sum([1, 2, 3])).to.equal(6, 6);
// 		expect(sum([4, 5])).to.equal(9, 20);
// 	})
// })

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

// describe('reverse', function() {
// 	it('should allow only a string', function() {
// 		expect(function() {reverse('')}).to.throw('The argument must have more than one character.');
// 		expect(function() {reverse(1)}).to.throw('The argument must be a string.');
// 		expect(function() {reverse(true)}).to.throw('The argument must be a string.');
// 		expect(function() {reverse([1, 'a'])}).to.throw('The argument must be a string.');
// 		// expect(function() {reverse({ key: value })}).to.throw('The argument must be a string.');
// 	});

// 	it('should return a reversed string', function() {
// 		expect(reverse('alex hidalgo')).to.equal('ogladih xela');
// 	});
// });

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

describe('findLongestWord', function() {
	it('should not take numeric arguments', function() {
		expect(function() {findLongestWord('')}).to.throw('The argument must be an array of strings');
		expect(function() {findLongestWord(1)}).to.throw('The argument must be an array of strings');
		expect(function() {findLongestWord(true)}).to.throw('The argument must be an array of strings');
		expect(function() {findLongestWord([1, 'a'])}).to.throw('The argument must be an array of strings');
		// expect(function() {findLongestWord({ key: value })}).to.throw('The argument must be an array of strings');
	});
	it('should return length of the longest word', function() {
		expect(findLongestWord(['alex', 'hidalgo'])).to.equal(7);
	});
});

// // ---------------------
// // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// // ---------------------

// describe('filterLongWords', function() {
// 	it('should not take numeric arguments', function() {
// 		expect(function() {filterLongWords('')}).to.throw('The argument must be an array of strings');
// 		expect(function() {filterLongWords(1)}).to.throw('The argument must be an array of strings');
// 		expect(function() {filterLongWords(true)}).to.throw('The argument must be an array of strings');
// 		expect(function() {filterLongWords([1, 'a'])}).to.throw('The argument must be an array of strings');
// 		expect(function() {filterLongWords({ key: value })}).to.throw('The argument must be an array of strings');
// 	})
// 	it('should return length of the longest word', function() {
// 		expect(filterLongWords(['alex', 'hidalgo'], 4)).to.equal(['hidalgo']);
// 	})
// })

// // ---------------------
// // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// // ---------------------

// describe('charFreq', function() {
// 	it('should not take numeric arguments', function() {
// 		expect(function() {charFreq('')}).to.throw('The argument must be an array of strings');
// 		expect(function() {charFreq(1)}).to.throw('The argument must be an array of strings');
// 		expect(function() {charFreq(true)}).to.throw('The argument must be an array of strings');
// 		expect(function() {charFreq([1, 'a'])}).to.throw('The argument must be an array of strings');
// 		expect(function() {charFreq({ key: value })}).to.throw('The argument must be an array of strings');
// 	})
// 	it('should return length of the longest word', function() {
// 		expect(charFreq('abbabcbdbabdbdbabababcbcbab')).to.equal({a:7, b: 14, c:3, d: 3});
// 	})
// })
