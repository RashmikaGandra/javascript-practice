const input = " L Z";
let space = 0;
let newSpace;
for (let index = 0 ; index < input.length ; index++) {
    if(input[index] === "Z" || input[index] === "L") {
        if(input[index + 1] === "L" || input[index + 1] === "Z") {
            newSpace = 0;
        }
    }
    else if(input[index] === " " && index !== 0) {
        space = space + 1;
    }
}
let newString = "";
for (let index = 0 ; index < input.length ; index++) {
    if(input[index] !== " "){
        newString = newString + input[index];
    }
    
}
for(let index = 0;index < newString.length;index++){
    if(newString[index]=== newString[index + 1] || newString[index] === " "){
        space = -1;
    }
    
}
if(newString.length === 1) {
    space = -1;
}
if (newSpace <= space) {
    space = newSpace;
}
console.log(space);
 
