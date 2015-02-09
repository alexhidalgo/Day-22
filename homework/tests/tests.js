var expect = chai.expect;

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

describe('max', function() {
	it('should not allow non-numeric arguments', funciton() {
		expect(function() {
			max('a', 1)
		}).to.throw('The first argument must be a number.');
		expect(function() {max()}).to.throw('You must supply two number arguments');
		expect(function(){max('')}).to.throw('You must supply number arguments');
		expect(function(){max(1, 2, 3)}).to.throw('You must supply two or less arguments');
	});

	it('should return the max', function() {
		expect(max(1, 2)).to.equal(2);
		expect(max(0.1, 0.2)).to.equal(0.2);
		expect(max(-2, -1)).to.equal(-1);
		expect(max(0, 0)).to.equal(0);
	});
});
