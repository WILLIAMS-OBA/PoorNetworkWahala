function countPrimes(upperLimit){
let count = 0;

for (let number = 2; number < upperLimit; number++){
let isPrime = true;

for (let numberTwo = 2; numberTwo < number; numberTwo++){
if (number % numberTwo === 0){
is prime = false;
}
}
if (isPrime){
count++}
}
return count;
}
