//Question 1: The Guest List Formatter
//Goal: Practice Template Literals and Array Methods.
//Write a function called formatGuests that takes an array of names. The function should:
//Remove the first name from the list (it’s the host, not a guest).
//Add "Guest: " before each remaining name using .map().
//Return a single string where each guest is on a new line.

function formatGuests(names) {
  names.shift();
  return names.map((name) => `Guest: ${name}`).join("\n");
}

let guests = ["Asad", "John", "Aryan", "Rahul"];

console.log(formatGuests(guests) + "\n");

//Question 2: The Logic Gate (Filter & Math)
//Goal: Practice Arrow Functions, filter, and Math methods.
//Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
//Filter the array to keep only the numbers.
//Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
//Return the final array.

const getHighNumbers = (arr) => {
  const threshold = Math.floor(Math.random() * 50) + 1;

  return arr
    .filter((item) => typeof item === "number")
    .filter((num) => num > threshold);
};

let data = [10, "hello", 25, 60, "world", 5, 80];

console.log(getHighNumbers(data) + "\n");

//Question 3: The Price Calculator
//Goal: Practice Type Conversion and splice.
//You have an array of prices, but they are currently strings. Write a script that:
//Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
//Converts the remaining string prices into actual numbers.
//Calculates the sum of those numbers using an arrow function.
//Prints: "Total Price: $[sum]" using a template literal

const prices = ["100", "200", "50", "25"];

const handlingFee = prices.pop();

const total = prices
  .map((price) => Number(price))
  .reduce((sum, price) => sum + price, 0);

console.log(`Total Price: $${total}`);