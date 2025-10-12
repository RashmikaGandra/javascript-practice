function checkTheGuess(noOfChances, guessedColour, colour) {
  if (guessedColour === colour) {
    console.log("🥳 Your guess is correct");
    return;
  } 

  return play(noOfChances - 1, colour);
}

function giveTheClue(colour) {
  switch (colour) {
    case "violet": return "Lavender dusk";
    case "indigo": return "strom sky";
    case "blue" : return "slush drink";
    case "green" : return "Emerald Earth";
    case "yellow" : return "Honey beam";
    case "orange" : return "sunset";
    case "red" : return "crimson heart";
  }
}

function play(noOfChances, colour) {
  if (noOfChances === 0) {
    console.log("The colour is:", colour);
    console.log("☹️ Better luck next time");
    return;
  }
  if (noOfChances === 1) {
    console.log("The clue is : ", giveTheClue(colour));
  }

  const guessedColour = prompt("Guess the rainbow colour:");
  return checkTheGuess(noOfChances, guessedColour, colour);
}


function guessColour(randomColour) {
  const colour = randomColour;
  const noOfChances = 3;
  console.log("You have three chances");

  return play(noOfChances, colour);
}

function generateRandomColour() {
  const rainbowColours = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
  const randomColour = Math.floor(Math.random() * rainbowColours.length);

  return guessColour(rainbowColours[randomColour]);
}

function playAgain() {
  const decision = confirm("Do you want to play again ?");
  return decision;
}

function main() {
  generateRandomColour();
  while (playAgain()) {
    generateRandomColour();
  }
}

main();
