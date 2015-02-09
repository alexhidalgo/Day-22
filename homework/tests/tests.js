var expect = chai.expect;

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

describe('max', function() {
	it('should not allow non-numeric arguments', function() {
		expect(function() {max('a', 1)}).to.throw('The first argument must be a number.');
		expect(function() {max(1, 'b')}).to.throw('The second argument must be a number.');
		expect(function(){max(1, 2, 3)}).to.throw('You must supply two arguments');
	});

	it('should return the max', function() {
		expect(max(1, 2)).to.equal(2);
		expect(max(0.1, 0.2)).to.equal(0.2);
		expect(max(-2, -1)).to.equal(-1);
		expect(max(0, 0)).to.equal(0);
	});
});

describe('maxOfThree', function(){
	it('should not allow non-numeric arguments', function() {
		expect(function() {maxOfThree('a', 1, 2)}).to.throw('The first argument must be a number.');
		expect(function() {maxOfThree(1, 'b', 2)}).to.throw('The second argument must be a number.');
		expect(function(){maxOfThree(2, 3, 'c')}).to.throw('The third argument must be a number.');
	});

	it('should return the max', function() {
		expect(maxOfThree(1, 2, 3)).to.equal(3);
		expect(maxOfThree(0.1, 0.2, 0.3)).to.equal(0.3);
		expect(maxOfThree(-2, -1, 0)).to.equal(0);
		expect(maxOfThree(0, 0, 0)).to.equal(0);
	});
})
