function mySqrt(number){
for(let counter =1; counter <= number; counter++){
if (counter*counter>number){
return counter-1;
}
}}
console.log(mySqrt(2))
