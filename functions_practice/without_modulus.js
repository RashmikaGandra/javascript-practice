function modulus(dividend,divisor) {
    let reminder = dividend;
    let copyOfDividend = dividend;
    while (reminder >= divisor) {
        reminder = copyOfDividend - divisor;
        copyOfDividend = reminder;
    }
    return reminder;
}
const modulusReminder = modulus(-90,-5);
console.log(modulusReminder);
