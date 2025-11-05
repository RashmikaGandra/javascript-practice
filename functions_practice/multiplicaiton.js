function giveMultiplicationTable(multiplicand , multiplier) {
    return multiplicand + " *" + multiplier + "=" + multiplicand * multiplier;
}
function produceMultiplier(tableOf,limit) {
    for (let term = 1; term <= limit; term++) {
        console.log(giveMultiplicationTable(tableOf , term));
    }
}
produceMultiplier(5,10);
