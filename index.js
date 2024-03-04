// EXAMPLE 1 - Calculate the Percentage between Two Numbers in JavaScript

function isWhatPercentOf(x, y) {
  return (x / y) * 100;
}

// 👇️ `30` is 40% of `75`
console.log(isWhatPercentOf(30, 75)); // 👉️ 40

// 👇️ `20` is 26.666% of `75`
console.log(isWhatPercentOf(20, 75)); // 👉️ 26.666666...

// ------------------------------------------------------------------

// // EXAMPLE 2 - Round to N decimal places using `toFixed()`

// const percentage = (20 / 75) * 100;
// console.log(percentage); // 👇️ 26.666666666...

// // 👇️ 2 decimals
// const fixed = percentage.toFixed(2);
// console.log(fixed); // 👉️ "26.67"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function isWhatPercentOf(x, y, decimals) {
//   return ((x / y) * 100).toFixed(decimals);
// }

// console.log(isWhatPercentOf(20, 75, 2)); // 👉️ 26.67
// console.log(isWhatPercentOf(20, 75, 3)); // 👉️ 26.667
// console.log(isWhatPercentOf(20, 75, 4)); // 👉️ 26.6667

// ------------------------------------------------------------------

// // EXAMPLE 4 - Calculate the percentage between 2 numbers and round the result

// function isWhatPercentOf(x, y) {
//   return Math.round((x / y) * 100);
// }

// console.log(isWhatPercentOf(20, 75)); // 👉️ 27

// console.log((20 / 75) * 100); // 👉️ 26.66666666

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get percentage increase/decrease between two numbers

// function getPercentageIncrease(numA, numB) {
//   return ((numA - numB) / numB) * 100;
// }

// // 👇️ `50` is 66.66% increase from `30`
// console.log(getPercentageIncrease(50, 30)); // 👉️ 66.666

// // 👇️ `50` is 50% decrease from `100`
// console.log(getPercentageIncrease(50, 100)); // 👉️ -50

// ------------------------------------------------------------------

// // EXAMPLE 6 - Convert Percentage to Decimal using JavaScript

// function toDecimal(percent) {
//   return parseFloat(percent) / 100;
// }

// console.log(toDecimal('25%')); // 👉️ 0.25
// console.log(toDecimal('55%')); // 👉️ 0.55
// console.log(toDecimal('0%')); // 👉️ 0
// console.log(toDecimal('100%')); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 7 - Handle invalid numbers

// function toDecimal(percent) {
//   const parsed = parseFloat(percent);

//   if (!Number.isNaN(parsed)) {
//     return parseFloat(percent) / 100;
//   } else {
//     return 0;
//   }
// }

// console.log(toDecimal('25%')); // 👉️ 0.25
// console.log(toDecimal('hello')); // 👉️ 0
