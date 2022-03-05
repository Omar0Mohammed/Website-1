const scores = [50,20,50,88,15,135,25];
const total = scores.reduce((acc,element) => 
acc + element , 0);
console.log(total)