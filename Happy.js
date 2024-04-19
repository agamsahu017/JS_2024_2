console.log("Happy");

function reverseString(str) {
  // return str.split("").reverse().join("")

  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }

  return revString;
}
console.log(reverseString("Agam Sahu"));

//2

function findLongestWord(str) {
  let longestWord = "";
  const words = str.split(" ");

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(
  findLongestWord("i love coding in javascript from Tremendousd book")
);

//3

function isPalindrome(str) {
  const revString = str.split("").reverse().join("");
  return revString === str;
}
console.log(isPalindrome("noont"));

//4

function removeDuplicates(arr) {
  // return [ ...new Set(arr)]

  const uniqueElements = [];

  for (let i = 0; i <= arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 7, 9, 8, 7, 6, 5]));

///5

function areAnagrams(str1, str2) {
  const sortedstr1 = str1.split("").sort().join("");
  const sortedstr2 = str2.split("").sort().join("");

  return sortedstr1 === sortedstr2;

  // console.log(sortedstr1, sortedstr2);
}

// Check for Anagrams
console.log(areAnagrams("listen", "silentu"));

// 6

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Count the Vowels
console.log(countVowels("Hello, world! "));

//

function findLargestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}

// Find largest Number
console.log(findLargestNumber([2, 4, 6, 9, 3]));

//
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(isPrime(111));

//

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(6)); //1*2*3*4*5

//

function removeWhitespace(str) {
  const result = str.replace(/\s/g, "");
  return result;
}

const inputString = "    Inter    view,    Ha   ppy ";
console.log(removeWhitespace(inputString));

//

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(findSum([1, 2, 3, 4, 5]));

//

function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Average of an array
console.log(findAverage([1, 2, 3, 4, 5, 6]));

//

// Sort an array without for loop
const numbers = [10, 1, 20, 2, 5];

function sortArrayAscending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArrayAscending(numbers));

//
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
}

// Check whether array is sorted or not
console.log(isSorted([1, 2, 9, 3, 4, 5]));

//
//Merge two arrays

const array1 = [10, 3, 5, 7];
const array2 = [2, 20, 6, 8];

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);
  return sortedArray;
}

console.log(mergeSortedArrays(array1, array2));

//

function removeElement(arr, target) {
  return arr.filter((elem) => elem !== target);
}

// Remove specific element without using for loop
console.log(removeElement([1, 2, 3, 2, 4], 2));

//
function findSecondLargest(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[1];
}

const numbers1 = [5, 10, 2, 8, 3];
console.log(findSecondLargest(numbers1));
//

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Reverse the words of a sentence
console.log(reverseWords("hello world how are you?"));

//
function findIntersection(arr1, arr2) {
  const set = new Set(arr1);
  let Intersection = arr2.filter((elem) => set.has(elem));

  return Intersection;
}

// Intersection of two arrays without using for loop
console.log(findIntersection([1, 2, 3, 4, 9, 4, 2], [2, 3, 5, 6]));

//

var n = 10;
function fibonacciSeries(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacciSeries(n));

// The Fibonacci series starts with 0 and 1.
// Each subsequent number is the sum of the two preceding numbers.

//Trickey

// Array of numbers
const numbersArray = [1, 2, 3, 4, 5];

//Fetch number one by one

numbersArray.forEach((number) => {
  number = number * 2;

  console.log(number);
});

//Queue Implemenation using an array

const queue = [];
queue.push(1);
queue.push(2);
queue.shift();
console.log(queue);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
  }
});
///

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
originalArray.push(6);
console.log(originalArray);
console.log(copiedArray);

//

var str = "Hello";
var firstChar = str[0];
console.log(firstChar);
//Output: 'H'

//charAt() method
var thirdChar = str.charAt(2);
console.log(thirdChar);
//Output: 'l'

var str = "Hello, World"; // The original string
var substring = "World"; // The substring to search for

console.log(str.includes(substring));

console.log(str.indexOf(substring) >= 0);

let pattern = /World/;

let isPresent3 = pattern.test(str);

console.log(isPresent3);

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const closure1 = createCounter();
closure1();
closure1();
closure1();
closure1();
console.log("----------------------------------");
const closure2 = createCounter();
closure2();
closure2();

////

// Get the input field element
const inputField = document.getElementById("myInput");
// Event listener for input event
inputField.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  // Perform validation logic
  if (inputValue.length < 3) {
    // Display an error message or apply visual feedback
    console.log("Input must be at least 3 characters long");
  } else {
    // Input is valid
    console.log("Input is valid");
  }
});

//

const data = ["My", "Name", "Is", "Happy", "Rajat", "oppy"];
const searchTerm = "pp";

console.log(data.filter((item) => item.includes(searchTerm)));

//

// Initial update
updateDateTime();
function updateDateTime() {
  const datetimeElement = document.getElementById("datetime");
  const now = new Date();
  // Format the date and time (example format: "YYYY-MM-DD HH:MM:SS")

  console.log("373 ", now);

  const formattedDateTime = `${now.getFullYear()}
 -${(now.getMonth() + 1).toString()}
 -${now.getDate().toString()} 
 ${now.getHours().toString()}:
  ${now.getMinutes().toString()}:
 ${now.getSeconds().toString()}`;
  // Update the content of the element
  datetimeElement.textContent = formattedDateTime;
}
// Update the date and time every second
setInterval(updateDateTime, 1000);
