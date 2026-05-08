//Question 1.

let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b, "\n");

//Question 2.

function checkType(value) {
  if (typeof value === "number") {
    console.log("This is a number");
  } else if (typeof value === "string") {
    console.log("This is a string");
  } else {
    console.log("Unknown type", "\n");
  }
}

checkType(10);
checkType("Asad");
checkType(true);

//Question 3.

let fullName = "John Doe";

let names = fullName.split(" ");

let initials = names[0][0] + names[1][0];

console.log(initials, "\n");

//Question 4.

let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();

console.log(clean, "\n");

//Question 5.

let cart = ["Bread", "Butter", "Cheese"];

cart.push("Milk");

cart.unshift("Eggs");

cart.pop();

console.log(cart, "\n");

//Question 6.

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30));

console.log(numbers.indexOf(50));