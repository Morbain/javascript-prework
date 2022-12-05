function playGame(playerInput) {
  function clearMessages() {
    document.getElementById('messages').innerHTML = '';
  }

  function getMoveName(argMove) {
    if (argMove == 1) {
      return 'kamień';
    } else if (argMove == 2) {
      return 'papier';
    } else if (argMove == 3) {
      return 'nożyce';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Wygrywa przeciwnik!');
    }
  }

  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
