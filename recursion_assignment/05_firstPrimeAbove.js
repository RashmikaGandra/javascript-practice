function hasFactors(primeCandidate, valueToCheck) {
	if (primeCandidate === valueToCheck) {
		return false;
	}

	const remainderIs = primeCandidate % valueToCheck;

	if (remainderIs === 0) {
		return true;
	}

	return hasFactors(primeCandidate, valueToCheck + 1);
}

function isPrime(primeCandidate) {
	let divisor = 2;

	if (!hasFactors(primeCandidate, divisor)) {
		return primeCandidate;
	}

	return isPrime(primeCandidate + 1);
}

function firstPrimeAbove(number) {
	return isPrime(number + 1);
}

function compareExpectation(expectedValue, finalValue) {
	return expectedValue === finalValue ? "✅" : "❌";
}

function abovePrime(primeCandidate, expectedValue) {
	const result = firstPrimeAbove(primeCandidate);
	const comparedResult = compareExpectation(expectedValue, result);
	const message = "result should be |" + expectedValue + "| and it is";
	const finalMessage = comparedResult + message + " | " + result + "|";

	console.log(finalMessage);
}

function valuesToTest() {
	abovePrime(1, 2);
	abovePrime(2, 3);
	abovePrime(3, 5);
	abovePrime(5, 7);
	abovePrime(7, 11);
}

valuesToTest();
