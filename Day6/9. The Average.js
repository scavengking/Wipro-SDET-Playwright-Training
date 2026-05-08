const scores = [80, 90, 70, 100];
const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(average); // 85