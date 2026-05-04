const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  return fruit === 'apple' ? acc + 1 : acc;
}, 0);
console.log(count); // 3