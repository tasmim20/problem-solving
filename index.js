// // 1.leap year checker

// function isLeapYear(year) {
//   checker = year % 4 === 0;
//   return checker;

// }
// const year = 2022;
// console.log(`Is ${year} a leap year?`, isLeapYear(year));

//2.Task: Array Reduction
//// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// function sumAllEvenNumbers(arr) {
//   const sumOfEven = arr.reduce((acc, num) => {
//     if (num % 2 === 0) {
//       return acc + num;
//     }
//     return acc;
//   }, 0);
//   return sumOfEven;
// }
// const sum = sumAllEvenNumbers(numbers);
// console.log("Sum of even numbers:", sum);

// //3.Task: Function Composition
// // Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// const square = (num) => num * num;
// const double = (num) => num * 2;
// const add5 = (num) => num + 5;

// //function
// const squareDoubleAdd5 = (num) => add5(double(square(num)));
// const result = squareDoubleAdd5(3);
// console.log("Result of composition:", result);

// // 4.Task: Object Manipulation
// // Create an array of objects representing books with properties like Title, Author, and Year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Harry Potter", author: "Harry", year: 1951 },
  { title: "Self Respect", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "Gonsen", year: 1941 },
];

function getBookTitle(arr) {
  return arr.map((book) => book.title);
}

const titles = getBookTitle(books);
console.log("Book titles:", titles);
