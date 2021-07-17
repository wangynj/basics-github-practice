var numOfTimesYouHaveWon = 0

var main = function (input) {

  var secretword = generateaRandomSW ()
  var myOutputValue = `The word you guessed is ${input} and the secret word is ${secretword}`;

  if (input == secretword){
    numOfTimesYouHaveWon = numOfTimesYouHaveWon + 1
    if (numOfTimesYouHaveWon == 2){
      return myOutputValue + 'You have had 2 correct guesses. You won!'

    }
    return myOutputValue + 'Correct Guess!'

  }

  if (!(input == secretword)){
    console.log (secretword)
    var numOfTimesToWin = 2-numOfTimesYouHaveWon
    return myOutputValue + `You lost! You still need ${numOfTimesToWin} times to win`
  }

  return myOutputValue;
};
var generateaRandomInteger= function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal);
  return randomIntegar;
};

var generateaRandomSW= function(){
  var randomizednum = generateaRandomInteger();
  if (randomizednum == 0) {
    return 'banana';
    }
  if (randomizednum == 1) {
    return 'chisel';
    }
    if (randomizednum == 2) {
      return 'faucet';
    };
  
  };

