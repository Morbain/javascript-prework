function playGame(playerInput) {

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }

    function getMoveName(computerMove, playerMove) {
        if (computerMove && playerMove == 1) {
            return 'kamień';
        } else if (computerMove && playerMove == 2) {
            return 'papier';
        } else if (computerMove && playerMove == 3) {
            return 'nożyce';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);

        if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            printMessage('Ty wygrywasz!');
        } else if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Wygrywa przeciwnik!')
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis!')
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Źle! Wpisz 1, 2 lub 3!')
        }

    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    // if(randomNumber == 1){
    //   computerMove = 'kamień';
    // } else if(randomNumber == 2) {
    //     computerMove = 'papier';
    // } else if(randomNumber == 3) {
    //     computerMove = 'nożyce';
    // }

    // printMessage('Mój ruch to: ' + computerMove);


    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    // if(playerInput == '1'){
    //   playerMove = 'kamień';
    // } else if(playerInput == '2') {
    //     playerMove = 'papier';
    // } else if(playerInput == '3') {
    //     playerMove = 'nożyce';2
    // }

    // printMessage('Twój ruch to: ' + playerMove);


}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });