function generatePoints(winner) {
  let userPoints = 0;
  let systemPoints = 0;
  switch(winner) {
    case "user" : userPoints++;
    case "system" : systemPoints++;
  }
  const points = `${"user-Points"} : ${userPoints}  ${"system-points"} : ${systemPoints}`;
  console.log(points);
  return winner;
}

function checkTheMoves(userMove, systemMove) {
  if (userMove === systemMove) {
    return generatePoints("TIE");
  }
  if (userMove === 0 && systemMove === 1) {
    return generatePoints("system");
  }
  if (userMove === 0 && systemMove === 2) {
    return generatePoints("user");
  }
  if (userMove === 1 && systemMove === 0) {
    return generatePoints("user");
  }
  if (userMove === 1 && systemMove === 2) {
    return generatePoints("system");
  }
  if (userMove === 2 && systemMove === 0) {
    return generatePoints("system");
  }
  if (userMove === 2 && systemMove === 1) {
    return generatePoints("user");
  }
}

function play(userMove, systemMove, symbols) {
  const winner = checkTheMoves(userMove, systemMove);
  console.log("usermove :", symbols[userMove], "systemMove :", symbols[systemMove]);
  return winner;
}

function takeInput(symbols) {
  const uesrMove = parseInt(prompt("Enter user move:"));
  const systemMove = Math.floor(Math.random() * symbols.length);
  return play(uesrMove, systemMove, symbols);
}

function displayCharacters() {
  const symbols = ["🪨", "📄", "✂️"];
  const message = `${0}:${symbols[0]} ${1}:${symbols[1]} ${2}:${symbols[2]} `;
  console.log(message);
  return takeInput(symbols);
}

function playAgain() {
  const decision = confirm("Do you want to play again ?");
  return decision;
}

function main() {
  console.log(displayCharacters());
  while (playAgain()) {
    console.log(displayCharacters());
  }
}

main();
