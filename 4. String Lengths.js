function longerThanFive(arr) {
  return arr.filter(str => str.length > 5);
}
console.log(longerThanFive(['hi', 'banana', 'cat', 'elephant'])); // ['banana', 'elephant']