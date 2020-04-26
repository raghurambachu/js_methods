// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
let largest = numbers.reduce((largest,number) => number > largest ? number : largest,0);
console.log(largest);

// Find longest string in strings
let longestString = strings.reduce((longest,string)=> string.length > longest.length ? string : longest,"");
console.log(longestString);

// Find all the even numbers
let evenNumbers = numbers.reduce((evenNumbers,number) => {
  if(number % 2 === 0) evenNumbers.push(number);
  return evenNumbers;
},[]);
console.log(evenNumbers);

// Find all the odd numbers
let oddNumbers = numbers.reduce((oddNumbers,number) => {
  if(number % 2 !== 0) oddNumbers.push(number);
  return oddNumbers;
},[]);
console.log(oddNumbers);

// Find all the words that contain 'is' use string method 'includes'
let wordsWithIs = strings.reduce((wordsWithIs,word) => {
  if(word.includes("is")) wordsWithIs.push(word);
  return wordsWithIs;
},[])
console.log(wordsWithIs);

// Find all the words that contain 'is' use string method 'indexOf'
let wordsWithIsIndexOfType = strings.reduce((wordsWithIs,word) => {
  if(word.indexOf("is") !== -1) wordsWithIs.push(word);
  return wordsWithIs;
},[])
console.log(wordsWithIsIndexOfType);

// Check if all the numbers in numbers array are divisible by three use array method (every)
let checkDivisibility = numbers.reduce((divisible,number) => divisible && number % 3 === 0 ,true);
console.log(checkDivisibility);

//  Sort Array from smallest to largest
// let sortedArray = numbers.sort((a,b)=> a - b);
// console.log(sortedArray);

// Remove the last word in strings
let removedLastWord = strings.pop();

// Add a new word in the array
strings.push("raghuram");

// Remove the first word in the array
let removeFirstWord = strings.shift();

// Place a new word at the start of the array use (upshift)
strings.unshift("empire");

// Make a subset of numbers array [18,9,7,11]
let subset = numbers.slice(3,7);
console.log(subset);

// Make a subset of strings array ['a','collection']
let subsetOfStrings = strings.slice(2,4);
console.log(subsetOfStrings);

// Replace 12 & 18 with 1221 and 1881
numbers[numbers.indexOf(12)] = 1221;
numbers[numbers.indexOf(18)] = 1881;
console.log(numbers);


// Replace words with string in strings array
let stringsLength = strings.map(string => string.length);
console.log(stringsLength);

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
let customersWithJ = customers.filter(customer => customer.firstname.startsWith("J") );
console.log(customersWithJ);

// Create new array with firstname and lastname
let fullNameArray = customers.map(customer => `${customer.firstname} ${customer.lastname}`);
console.log(fullNameArray);

// Sort the array created above alphabetically
console.log(fullNameArray.sort());