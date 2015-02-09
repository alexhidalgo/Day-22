// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if(!_.isNumber(a)) {
		throw 'The first argument must be a number.';
	}
	 if(!_.isNumber(b)) {
		throw 'The second argument must be a number.';
	}
	 if(arguments.length > 2 || arguments.length < 2) {
		throw 'You must supply two arguments';
	}

  if(a > b) {
  	return a;
  } else {
  	return b;
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    throw 'The first argument must be a number.';
	}
	 if(!_.isNumber(b)) {
		throw 'The second argument must be a number.';
	}
	 if(!_.isNumber(c)) {
		throw 'The third argument must be a number.';
	}
	 if(arguments.length > 3 || arguments.length < 3) {
		throw 'You must supply three arguments';
	}

  if(a > b) {
  	a = maxNum;
  } else {
  	b = maxNum;
  }
  if (c > maxNum) {
  	return c;
  } else {
  	return maxNum;
  }
}
