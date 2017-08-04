// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  var copy = array.slice(0);
  if (copy.length === 0) {
    return 0;
  } return copy[0] += sum(copy.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
/*  I: An array
    O: A number, the sum of all elements in the array
    C: Must use recursion, cannot mutate the input array
    E: Empty arrays return 0, arrays with one integer return that integer
 */

var arraySum = function(array) {
// If the array is empty
if (array.length === 0) {
  // Reutrn 0
  return 0;
}
// Create a variable to hold the total of all the numbers in the array added
var sum = 0;
// Iterate through the array
for (var i = 0; i < array.length; i++) {
  // If the current value is another array
  if (Array.isArray(array[i])) {
    // Recurse
    sum += arraySum(array[i]);
  } // Add the value in the array to the total
  else {
  sum += array[i];}
}
// Return the sum
return sum; 
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0){
    n = n * -1;
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;}
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*  I: A number
    O: The sum of all the numbers below that number
    C: Must use recursion
    E: If the input is a negative number, return the sum of all the numbers up to zero starting from that number */

var sumBelow = function(n) {
  // Base case: n reaching 0
  if (n === 0) {
    // Return n
    return n;
  } // Edge case: n is a negative number
  if (n < 0) {
    // Add current n to recursive call of n, adding 1 so it can get each next number to add until 0.
    return (n + 1) + sumBelow(n + 1);
  }
  // Recursive case: add current n to recursive call of n, subtracting 1 so it can get each next number to add until 0.
  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
 var range = function (x, y){
    if (x < y) {
			if (x === y || x + 1 === y) {
        return [];
			} if (x > y) {
        return [x - 1];
			} if (y - x === 2) {
        return [x + 1]; }

    var rangeArray = range(x, y - 1);
    rangeArray.push(y - 1);
    return rangeArray;
    } else {
        if (y === x || y + 1 === x) {
					return [];
				} if (y > x) {
					return [y - 1];
				} if (x - y === 2) {
					return [y + 1];
					}
			var rangeArray2 = range(x - 1, y);
			rangeArray2.unshift(x - 1);
			return rangeArray2;
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  } if (exp < 0) {
    return 1 / exponent(base, -exp);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  return n == 1 ? true : (n < 1 ? false : powerOfTwo(n/2));
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 1) {
  return string;}
  return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().trim();
  if (string === "" || string.length === 1) {
    return true;
  } else if (string.charAt(0) === string.charAt(string.length - 1)) {
        return palindrome(string.substr(1, string.length - 2));
    } else {
			return false;
		}
}

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*  I: Two numbers, a divided and a divisor
    O: The remainder of these two numbers divided
    C: Must use recursion, no % operator or any other math operators
    E: If y = 0, return NaN */

// PSEUDOCODE (wasn't allowed in the function itself because of slashes)
// Edge case: if y = 0
  // Return NaN
// If x is positive
  // If x is positive, the result will always be positive, so y can be changed to positive for the same result
  // If y is negative
    // Make y positive
  // Base Case 1: y subtracted from x to the point that x reaches 0
    // Return 0
  // Base Case 2: x does not reach 0, but it is less than y so y can no longer be subtracted.
    // Return x
  // Recursive case: keep subtracting y from x 
// If x is negative
   // If x is negative, the result will always be negtive, so x and/or y can be converted to positive to get the postive version of the result, which then can be made negative.
   // If y is also negative
    // Make y positive
  // Base Case 1: y subtracted from x to the point that x reaches 0
    // Return 0
  // Base Case 2: x does not reach 0, but it is less than y so y can no longer be subtracted.
    // Return x, make it negative
  // Recursive case: keep subtracting y from x. Make it negative so it doesn't go through the first if statement.
  
var modulo = function (x, y) {
if (y === 0) {
  return NaN;
} 

if (x >= 0) { 
  if (y < 0) {
    y = -y;
  } if (x === 0) {
    return 0;
  } if (x > 0 && x < y) {
    return x;
  }
  return modulo(x - y, y);
}

if (x < 0) {
  x = -x;
  if (y < 0) {
    y = -y;
  } if (x === 0) {
    return 0;
  } if (x > 0 && x < y) {
    return -x;
    }
    return -modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
 if (y === 0) {
   return 0;
 } if (y > 0) {
   return (x + multiply(x, y - 1));
 } if (y < 0) {
   return -multiply(x, -y);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
/*  I: Two numbers, a dividend and a divisor
    O: A number, the quotient
    C: Must use recursion. Cannot use / operator or math.
    E: If y = 0, return NaN */

// PSEUDOCODE (wasn't allowed in the function itself because of slashes)
// Edge case: if y = 0
  // Since you cannot divide by 0, return NaN
// Make a counter to determine how many times y can be subtracted from x.
// Base Case: y is subrtracted so many times that x is either less than y or a negative number
  // Return counter
// Recursive case: subtract y from x as the new x, increase the counter because y is subtracted one more time.  

var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  } 
  var count = Array.from(arguments)[2] || 0;
  if (x < 0 || x < y) {
    return count;
  }
  return divide(x - y, y, ++count);
}

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
if (x < 0 || y < 0) {
  return null;
}
if ((x % y) === 0){
  return y;
} else {
  return gcd(y, x % y);
}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
/*  I: Two strings
    O: A boolean, true if strings are identical
    C: Must use recursion
    E: ? */
var compareStr = function(str1, str2) {
  // Create a counter to keep track of each index in both strings when they are equal
  var i = Array.from(arguments)[2] || 0;
  // Base case: When the characters at str1 and str2 don't match
  if (str1[i] !== str2[i]){
    //return false
    return false;
  } 
  // Base case 2: all indexes returning true when the end of str1 is reached. Since str1 and str2 are the same length, if all for str1 are true, all for str2 should be true too.
  if (str1.length === i) {
    //return true
    return true;
  }
  // If the characters from both strings at a particular index are equal
  if (str1[i] === str2[i]){
    // Recursive case: Pass both strings and increment i to compare characters at the next index.
    return compareStr(str1, str2, ++i);
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
	var newArray = [];
	newArray.push(str[0]);
	if (str.length === 1) {
		return newArray;
	}

	return newArray.concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var newArray = [];
	newArray.push(array[array.length - 1]);
	if (array.length === 1) {
		return newArray;
	}

	return newArray.concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var newArray = [];
	newArray.push(value);
	if (newArray.length === length){
		return newArray;
	}
  return newArray.concat(buildList(value, length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0; }

		var boolCount = 0;

		if (array[0] === value) {
			boolCount += 1;
		}

    return boolCount + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback){
	var newArray = Array.from(arguments)[2] || [];
	var i = Array.from(arguments)[3] || 0;
	if(array.length === i){
		return newArray;
	}
	newArray.push(callback(array[i], i, array));
	return rMap(array, callback, newArray, ++i);
}

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
/*  I: An object, and the key to be counted in the object.
    O: A number, the count of a particular key in the object.
    C: Must use recursion
    E: ? */
var countKeysInObj = function(obj, key) {
// Make a counter
var count = 0;
// Iterate through the object
for (var k in obj) {
  // If the current value's key is the one we want to count
  if (k === key) {
    // Add 1 to the counter
      count += 1;
    } // If the current value is an object
  if (typeof obj[k] === "object") {
    // Add the result of the recursive call to the count
    count += countKeysInObj(obj[k], key);
    } 
  }
// Return the counter
return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
/*  I: An object, and a value to count the occurences of in the object.
    O: A number, the the number of occurences of the value.
    C: Must use recursion
    E: ? */
var countValuesInObj = function(obj, value) {
//  Make a counter
var count = 0;
// Iterate through the object
for (var key in obj) {
  // If the current value is an object
    if (typeof obj[key] === "object") {
      // Add the result of the recursive call to the count
      count += countValuesInObj(obj[key], value);
    } // If the current value is the value we want to count
    if (obj[key] === value) {
      // Add 1 to the counter
      count += 1;
    } 
  }
  // Return the count
  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

var replaceKeysInObj = function(obj, key, newKey) {
    // loop through object
  for (var k in obj) {
    // if current value is object
    if (typeof obj[k] === "object") {
      // recurse
      replaceKeysInObj(obj[k], key, newKey);
    }
    // if key equals new key
    if (k === key) {
      // create new key with new value
      obj[newKey] = obj[k];
      // delete old key
      delete obj[k];
    }
  }
  // return obj
  return obj;      
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) {
		return null;
	} if (n === 1) {
		return [0, 1];
	}

	var next = fibonacci(n - 1);
	next.push(next[next.length - 1] + next[next.length - 2]);
  return next;

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
/*  I: A number n
    O: A number, the nth fibonacci number 
    C: Must use recursion
    E: Returns null for negative inputs */

var nthFibo = function (n) {
  // If n is negative
  if (n < 0) {
    // Return null
    return null;
  } // Base case: Fibonacci sequence is made starting from n and subtracting from n until n reaches 1.  
  if (n <= 1) {
    // Return n, which will be the nth fibonacci after all recursion calls
    return n;
  }
  // Recursive case: Make a fibonacci sequence n number of times 
  return nthFibo(n - 1) + nthFibo(n - 2);

}

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
	var i = Array.from(arguments)[1] || 0;
  if (i === input.length) {
    return input;
  }
  input[i] = input[i].toUpperCase();
  return capitalizeWords(input, ++i);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
	var i = Array.from(arguments)[1] || 0;
	var newArray = Array.from(arguments)[2] || [];
  if (i === array.length) {
    return newArray;
  }
  var capitalize = array[i][0].toUpperCase();
	var lastLetters = array[i].slice(1);
	newArray.push(capitalize + lastLetters);
  return capitalizeFirst(array, ++i, newArray);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
/*  I: An object
    O: A number, the sum of all even values in the object
    C: Must use recursion
    E: ? */

var nestedEvenSum = function(obj) {
// Create a variable to hold the sum of all evens
var sum = 0;
// Iterate through the object
for (var key in obj) {
  // If the current value is an even number
  if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
    // Add that value to the sum
    sum += obj[key];
  } // If the current value is another object
  if (typeof obj[key] === "object") {
    // Add the result of the recursive call to the sum
    sum += nestedEvenSum(obj[key]);
    }
  }
// Return the sum
return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
/*  I: A nested array
    O: A new array that is not nested
    C: Must use recursion
    E: ? */

var flatten = function(arrays) {
// Reduce the array with a new array as a seed
return arrays.reduce(function(seed, current) {
  // If the current value is an array
  if (Array.isArray(current)){
    // Add the result of recursive call to the new array
    return seed.concat(flatten(current));
  }
  // Add each value to the new array
  return seed.concat(current);
}, []);
};


/* var flatten = function(arrays) {
  var newArray = [];
  for (var i = 0; i < arrays.length; i++){
  if (Array.isArray(arrays[i])) {
    var flattened = flatten(arrays[i]);
    newArray.concat(flattened);
  } else {
    newArray.push(arrays[i]);
  } }
  return newArray;
}; */

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str) {
	var obj = Array.from(arguments)[1] || {};
  var current = str[0];

  if (str.length === 0) {
    return obj;
  } else if (obj[current]) {
    obj[current] += 1;
  } else {
    obj[current] = 1;
  }

  return letterTally(str.slice(1), obj);
}

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
var newArray = Array.from(arguments)[1] || [];
var compare = Array.from(arguments)[2] || 0;

	if(list.length === 0) {
    return newArray;
	} if(list.length === 1){
			if(compare !== list[0])
				newArray.push(list[0]);
  } if(list.length >= 1 && list[1] !== undefined){
    compare = list[1];
      if(compare !== list[0])
        newArray.push(list[0]);
	}

return compress(list.slice(1), newArray, ++compare);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
/*  I: An nested array and an element to put in each array
    O: A new nested array with the new element added
    C: Must use recursion
    E: ? */
var augmentElements = function(array, aug) {
// Iterate through the array
  for (var i = 0; i < array.length; i++) {
    // If the current value is an array
    if (Array.isArray(array[i])) {
      // If the array is not empty
      if (array[i].length > 0) {
        // Iterate through that array
        for (var j = 0; j < array[j].length; j++){
        // Recurse
        augmentElements(array[j], aug);
        }
      }
      // Augment to the array
      array[i].push(aug);
    }
  }
  //Return the array
  return array;
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, item = 0, res = []) {

if(array.length < 1){
    return res;
  }

  if(array.length > 0){
    item = array[0];
      if(item !== array[1]){
        res.push(array[0]);
      }
  }

return minimizeZeroes(array.slice(1), item, res);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {

var newArray = Array.from(arguments)[1] || [];
var i = Array.from(arguments)[2] || 0;

    if (array.length === i){
      return newArray;
    } if (i % 2 === 0) {
      newArray.push(Math.abs(array[i]));
    } if (i % 2 !== 0) {
      newArray.push(-Math.abs(array[i]))
    }
    return alternateSign(array, newArray, ++i);
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
function numToText(str){
 var targetNum = Array.from(arguments)[1] || 0;

 var numTextObj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

if (targetNum === 10) {
  return str; }

 var replaceWith = numTextObj[targetNum];
 var regEx = new RegExp(targetNum, 'g');
 var replaced = str.replace(regEx, replaceWith);

	return numToText(replaced, ++targetNum);
}

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
