const SYMBOLS = ["🪨", "📜", "✂️"];
const MESSAGE = `1 :${SYMBOLS[0]} 2 :${SYMBOLS[1]} 3 :${SYMBOLS[2]} `;
const INPUT = [1, 2, 3];

function yellow(text) {
  return "\x1B[33m" + text + "\x1B[0m";
}

function magenta(text) {
  return "\x1B[35m" + text + "\x1B[0m";
}

function red(text) {
  return "\x1B[31m" + text + "\x1B[0m";
}

function displayResult(points) {
  if (points[0] > points[1]) {
    return " 🥳 You nailed it 🏆🏆🏆🏆🏆"; 
  }
  return " 🥳 system won 🏆🏆🏆🏆🏆";
}

function displayPoints(userMove, systemMove, userPoints, systemPoints) {
  const score = `User-Points : ${userPoints} System-points : ${systemPoints}`;
  console.log(score);
  console.log("usermove :", SYMBOLS[userMove - 1], "systemMove :", SYMBOLS[systemMove - 1]);
  return takeInput([userPoints, systemPoints]);
}

function isUserMove(moves) {
  switch (moves) {
    case "13" :
    case "21" :
    case "32" :
      return true;
  }
  return false;
}

function isSystemMove(moves) {
  switch (moves) {
    case "12" :
    case "23" :
    case "31" :
      return true;
  }
  return false;
}

function play(userMove, systemMove, points) {
  const combinationOfMoves = "" + userMove + systemMove;
  let userPoints = points[0];
  let systemPoints = points[1];

  if (isUserMove(combinationOfMoves)) {
    userPoints++;
    console.log(magenta("You won in this round"));
  }
  else if (isSystemMove(combinationOfMoves)) {
    systemPoints++;
    console.log(yellow("System won in this round"));
  } else {
    console.log(red("TIE...."));
  }

  return displayPoints(userMove, systemMove, userPoints, systemPoints);
}

function isInvalid(userMove) { 
  return !INPUT.includes(userMove);
}

function takeInput(points) {
  if (points[0] === 3 || points[1] === 3) {
    console.log(displayResult(points));
    return;
  }
  const userMove = parseInt(prompt("Enter user move:"));
  const systemMove = 1 + Math.floor(Math.random() * SYMBOLS.length);
  if (isInvalid(userMove)){
    console.log("Enter valid input");
    return takeInput(points);
  }
  console.clear();
  console.log(MESSAGE);
  return play(userMove, systemMove, points);
}

function description() {
  const aboutGame = ` 😊 PLAY : ROCK-PAPER-SCSSIORS\n
  HERE ARE YOUR SYMBOLS :\n
  ➤ 1 - ROCK
  ➤ 2 - PAPER
  ➤ 3 - SCSSIORS\n
  HERE ARE YOUR INSTRUCTIONS :\n
  ➤ Game will continue untill any of the player scores 3 points
  ➤ Whoever got 3 points at first they will win the game\n`;
  console.log(aboutGame);
}

function displayCharacters() {
  const points = [0, 0];
  console.log(MESSAGE);
  return takeInput(points);
}

function playAgain() {
  const decision = confirm("Do you want to play again ?");
  return decision;
}

function main() {
  description();
  displayCharacters();
  while (playAgain()) {
    displayCharacters();
  }
}

main();
