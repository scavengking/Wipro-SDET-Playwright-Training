const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((acc, price) => acc + price, 0);
console.log(total.toFixed(2)); // "54.48"