function hammingWeight(number){

let binaryNumber = 0
let counter = 0
while (number !=0){
binary = number %2;
number = Math.floor(number/2);
if (binaryNumber==1){
counter +=1;
}
}
return counter;
}

console.log(hammingWeight(11))

