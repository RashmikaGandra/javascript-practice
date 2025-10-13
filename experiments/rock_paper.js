function checkTheMoves(uesr1Move, uesr2Move) {
  if (uesr1Move === uesr2Move) {
    return "TIE...";
  }
  
}

function play() {
  const uesr1Move = parseInt(prompt("Enter user-1 move:"));
  const uesr2Move = parseInt(prompt("Enter user-2 move:"));
  const winner = checkTheMoves(uesr1Move, uesr2Move);
  return winner;
}

console.log(play());
