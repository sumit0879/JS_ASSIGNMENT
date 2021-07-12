let readlineSync = require("readline-sync");

let num1 = readlineSync.question("Enter 1st number - ");
let num2 = readlineSync.question("Enter 2nd number - ");

if (num1 > num2) {
  while (num2 > 0) {
    rem = num1 % num2;
    num1 = num2;
    num2 = rem;
  }
  console.log(`GCD is ${num1}.`);
} else {
  while (num1 > 0) {
    rem = num2 % num1;
    num2 = num1;
    num1 = rem;
  }
  console.log(`GCD is ${num2}.`);
} 