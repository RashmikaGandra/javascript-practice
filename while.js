let number = 65;
let reminder= 1;
while (number > 1) {
    if (number%2 === 0) {
        reminder = number%2;
        number = number/2;
    } else {
        reminder = number%2;
        number = number/2 - 0.5;
    }
    console.log(number,"reminder is",reminder);
}
