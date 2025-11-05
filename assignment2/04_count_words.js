function removeSpaces(text) {
	let modifiedString = "";

	if (text.length === 1) {
		return text;
	}

	for (let index = 0; index < text.length; index++) {
		if (text[index] === " " && text[index + 1] !== " ") {
			modifiedString += text[index];
		}
		if (text[index] !== " ") {
			modifiedString += text[index];
		}
	}

	return modifiedString;
}

function removeTab(text) {
	let modifiedString = "";

	if (text.length === 1) {
		return text;
	}
	for (let index = 0; index < text.length; index++) {
		if (text[index] !== "\t") {
			modifiedString += text[index];
		}
		if (text[index] === "\t") {
			modifiedString += " ";
		}
	}

	return modifiedString;
}

function removeNewLine(text) {
	let modifiedString = "";

	if (text.length === 1) {
		return text;
	}
	for (let index = 0; index < text.length; index++) {
		if (text[index] !== "\n") {
			modifiedString += text[index];
		}
		if (text[index] === "\n") {
			modifiedString += " ";
		}
	}

	return modifiedString;
}

function countWords(sentence) {
	const string = removeSpaces(removeTab(removeNewLine(sentence)));
	let count = string[0] === " " ? 0 : 1;

	if (string === " " || string === "") {
		return 0;
	}
	for (let index = 0; index < string.length; index++) {
		if (string[index] === " " && index !== string.length - 1) {
			count++;
		}
	}

	return count;
}

function compareExpectation(expectedValue, finalValue) {
	return expectedValue === finalValue ? "✅" : "❌";
}

function wordsCount(string, expectedValue) {
	const count = countWords(string);
	const comparedResult = compareExpectation(expectedValue, count);
	const message = "count should be |" + expectedValue + "| and it is";
	const finalMessage = comparedResult + message + " | " + count + "|";

	console.log(finalMessage);
}

function valuesToTest() {
	wordsCount("a", 1);
	wordsCount("  a b", 2);
	wordsCount("  a b c", 3);
	wordsCount(" a", 1);
	wordsCount(" a b , c", 4);
	wordsCount("", 0);
	wordsCount(" ", 0);
	wordsCount("a \t b \n c", 3);
	wordsCount("ab \t b \n c", 3);
	wordsCount("hello \t world \n test", 3);
	wordsCount("hello\tworld\ntest", 3);
}

valuesToTest();
