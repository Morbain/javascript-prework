{
  const playGame = function (playerInput) {
    function clearMessages() {
      document.getElementById('messages').innerHTML = '';
    }

    const getMoveName = function (argMove) {
      if (argMove == 1) {
        return 'kamień';
      } else if (argMove == 2) {
        return 'papier';
      } else if (argMove == 3) {
        return 'nożyce';
      }
    };

    const displayResult = function (argComputerMove, argPlayerMove) {
      if (
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
      ) {
        printMessage(
          `Wybrałeś ${argPlayerMove}, a Twój przeciwnik ${argComputerMove}. Wygrywasz!`
        );
      } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis! Ty i twój przeciwnik wybraliście to samo!');
      } else {
        printMessage(
          `Wybrałeś ${argPlayerMove}, a Twój przeciwnik ${argComputerMove}. Niestety, przegrałeś!`
        );
      }
    };

    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
  };

  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });

  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
