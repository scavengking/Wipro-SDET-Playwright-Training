const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
const adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: 'Dan', age: 22 }]