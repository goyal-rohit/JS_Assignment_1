//WAP to find whether a given year is a leap year or not

let year = 1900; //Hardcoded Value

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}
