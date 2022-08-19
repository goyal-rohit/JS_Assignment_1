//WAP to find the factorial of a number

let number = 6;
let result = 1;
if (number >= 1) {
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  console.log("The Factorial of number is " + result);
} else if (number === 0) {
  console.log("The Factorial of number is 1");
} else {
  console.log("The number must be a non negative number");
}
