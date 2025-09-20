const input = "L     Z";
let index = 0;
let space = 0;
while (index < input.length) {
    if(input[index] === " "){
        space = space + 1;
    }
    index = index + 1;
}
console.log(space);
