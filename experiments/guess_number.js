function checkTheGuess(guessedNumber, number) {
  if (guessedNumber === number) {
    console.log("🥳 Your guess is correct");
  } else {
    console.log("☹️ Better luck next time");
  }
}

function guessNumber(randomNumber) {
  const number = randomNumber;
  const guessedNumber = parseInt(prompt("Guess the number"));
  return checkTheGuess(guessedNumber, number);
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  guessNumber(randomNumber);
}

generateRandomNumber();
