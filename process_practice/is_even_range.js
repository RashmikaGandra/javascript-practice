const lastNumber = 20;
for(let input = 0;input <= lastNumber;input = input + 1) {
    const isEven = input % 2 === 0;
    const result = !isEven ? "is odd" : "is even";
console.log(input, result);
}
