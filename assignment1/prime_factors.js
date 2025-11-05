const a = 720;
let numberToGetFactors = a;
let valueTocheck = 2;

while (numberToGetFactors !== 1) {
	if (numberToGetFactors % valueTocheck === 0) {
		console.log(valueTocheck);
		numberToGetFactors = numberToGetFactors / valueTocheck;
	} else {
		valueTocheck = valueTocheck + 1;
	}
}
