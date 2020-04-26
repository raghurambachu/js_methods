// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
function lengthOfObjects(obj) {
  return Object.keys(obj).length;
}



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};




// 3. Write a function to get the length of an object.
console.log(lengthOfObjects(student));