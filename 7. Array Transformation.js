const nums = [1, 2, 3, 4, 5, 6];
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n);
console.log(result); // [4, 16, 36]