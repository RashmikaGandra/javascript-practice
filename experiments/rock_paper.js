const SYMBOLS = ["🪨", "📄", "✂️"];

function displayPoints(points, winner) {
  const systemPoints = points[1];
  const userPoints = points[0];
  const score = `${"user-Points"} : ${userPoints}  ${"system-points"} : ${systemPoints}`;
  console.log(score);
  console.log(winner);
  return takeInput(SYMBOLS, points);
}

function generatePoints(winner, points) {
  while (points[0] !== 2 && points[1] !== 2) {
    switch(winner) {
      case "user" : points[0]++;
        break;
      case "system" : points[1]++;
        break;
    }
    return displayPoints(points, winner);
  }
  console.log(points[0] > points[1] ? "user Won" : "system Won");
}

function checkTheMoves(userMove, systemMove, points) {
  if (userMove === systemMove) {
    return generatePoints("TIE", points);
  }
  if (userMove === 0 && systemMove === 1) {
    return generatePoints("system", points);
  }
  if (userMove === 0 && systemMove === 2) {
    return generatePoints("user", points);
  }
  if (userMove === 1 && systemMove === 0) {
    return generatePoints("user", points);
  }
  if (userMove === 1 && systemMove === 2) {
    return generatePoints("system", points);
  }
  if (userMove === 2 && systemMove === 0) {
    return generatePoints("system", points);
  }
  if (userMove === 2 && systemMove === 1) {
    return generatePoints("user", points);
  }
}

function play(userMove, systemMove, SYMBOLS, points) {
  const winner = checkTheMoves(userMove, systemMove, points);
  console.log("usermove :", SYMBOLS[userMove], "systemMove :", SYMBOLS[systemMove]);
  return winner + "🏆🏆🏆🏆🏆";
}

function takeInput(SYMBOLS, points) {
  const uesrMove = parseInt(prompt("Enter user move:"));
  const systemMove = Math.floor(Math.random() * SYMBOLS.length);
  return play(uesrMove, systemMove, SYMBOLS, points);
}

function displayCharacters() {
  const points = [0, 0];
  const message = `${0}:${SYMBOLS[0]} ${1}:${SYMBOLS[1]} ${2}:${SYMBOLS[2]} `;
  console.log(message);
  return takeInput(SYMBOLS, points);
}

function playAgain() {
  const decision = confirm("Do you want to play again ?");
  return decision;
}

function main() {
  displayCharacters();
  while (playAgain()) {
    displayCharacters();
  }
}

main();
