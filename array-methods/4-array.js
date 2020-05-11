var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year
let sumOfDogYears = data.reduce((sum,animal)=> animal.type === "dog" ? sum + animal.age : sum,0) * 7;
console.log(sumOfDogYears);

// your code goes here

// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
let filterCat = data.filter(animal => animal.type === "cat");
let filterDog = data.filter(animal => animal.type === "dog");
console.log(filterCat);
console.log(filterDog);

// 2. map - to multiply human year to dog year
let dogsAge = data.map(animal => animal.age *= 7);
console.log(dogsAge);

// 3. reduce - to accumulate total age.
let totalAge = data.reduce((age,animal) => age + animal.age , 0);
console.log("Total Age",totalAge);

// Solution 105
