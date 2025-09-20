const input = "L     Z";
let space = 0;
let newSpace;
for (let index = 0 ; index < input.length ; index= index + 1) {
    if(input[index] === "Z") {
        if(input[index + 1] === "L") {
            newSpace = 0;
        }
    }
    else if(input[index] === " ") {
        space = space + 1;
        
    }
}
if (newSpace < space) {
    space = newSpace;
}
console.log(space);
