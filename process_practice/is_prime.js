const input = 9;
let haveFactors = false;
let startNumber = 2;
let result;
while (startNumber !== input && haveFactors !== true) {
    if(input%startNumber === 0){
        haveFactors = true;
    }
    startNumber = startNumber + 1;
    result = haveFactors ? "is composite" : "is prime"; 
}
console.log(input,result);
