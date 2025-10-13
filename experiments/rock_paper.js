function checkTheMoves(uesr1Move, uesr2Move) {
  if (uesr1Move === uesr2Move) {
    return "TIE....";
  }
  if (uesr1Move === 0 && uesr2Move === 1) {
    return "system won";
  }
  if (uesr1Move === 0 && uesr2Move === 2) {
    return "user Won";
  }
  if (uesr1Move === 1 && uesr2Move === 0) {
    return "user Won";
  }
  if (uesr1Move === 1 && uesr2Move === 2) {
    return "system won";
  }
  if (uesr1Move === 2 && uesr2Move === 0) {
    return "system won";
  }
  if (uesr1Move === 2 && uesr2Move === 1) {
    return "user Won";
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
