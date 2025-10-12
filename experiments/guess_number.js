function checkTheGuess(noOfTimes, guessedNumber, number) {
  if (guessedNumber === number) {
    console.log("🥳 Your guess is correct");
    return;
  } 
  if (guessedNumber > number) {
    console.log("Too High!");
  }

  return play(noOfTimes - 1, number);
}

function play(noOfTimes, number) {
  const guessedNumber = parseInt(prompt("Guess the number:"));
  if (noOfTimes === 1) {
    console.log("The Number is:", number);
    console.log("☹️ Better luck next time");
    return;
  }

  return checkTheGuess(noOfTimes, guessedNumber, number);
}

function guessNumber(randomNumber) {
  const number = randomNumber;
  const noOfTimes = parseInt(prompt("How many times do you want to play"));
  return play(noOfTimes, number);
}

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  return guessNumber(randomNumber);
}

function playAgain() {
  const decision = confirm("Do you want to play again ?");
  return decision;
}

function main() {
  generateRandomNumber();
  while (playAgain()) {
    generateRandomNumber();
  }
}

main();
