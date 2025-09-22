const input = "L  L";
let space = 0;
let noSpace;
let shortestSpace;
for (let index = 0 ; index < input.length ; index++) {
    if(input[index] === "Z" || input[index] === "L" ) {
        if(input[index + 1] === "L" || input[index + 1] === "Z") {
            noSpace = 0;
        }
    }
    if ((input[index] === "Z" || input[index] === "L" )&& input[index + 1] === " "){
        shortestSpace = space;
        space = 0;
    }
    if(input[index] === " " && index !== 0) {
        space = space + 1;
    }
}
let newString = "";
for (let index = 0 ; index < input.length ; index= index + 1) {
     if(input[index] !== " "){
        newString = newString + input[index];
    }
}
for(let newIndex = 0;newIndex < newString.length;newIndex++){
    if(newString[newIndex] === newString[newIndex + 1] || newString[newIndex] === " "){
        shortestSpace = -1;
        newIndex = newString.length;
    } 
    if(newString[newIndex] !== newString[newIndex + 1]) {
        shortestSpace = space;
        newIndex = newString.length;
    }
}
if(newString.length === 1) {
    shortestSpace = -1;
}
if (noSpace <= shortestSpace) {
    shortestSpace = noSpace;
}
if(space <= shortestSpace) {
    shortestSpace = space;
} 
console.log(shortestSpace);
