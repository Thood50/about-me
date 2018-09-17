'use strict';

var correctCount = 0;

var questionOne = 'Does Tyler like puppies';
var questionTwo = 'Does Tyler like cake?';
var questionThree = 'Does Tyler like to travel?';
var questionFour = 'Does Tyler speak a foreign language?';
var questionFive = 'Does Tyler like cats?';

var answerOne = 'yes';
var answerTwo = 'no';
var answerThree = 'yes';
var answerFour = 'yes';
var answerFive = 'no';

var correctOne = 'Honestly who doesnt love puppies?!?!?!?';
var correctTwo = 'Lucky guess...';
var correctThree = 'Love love love seeing new places and new cultures!!!';
var correctFour = 'Ja Miche Ich!!!! Thats german for yes i do xD';
var correctFive = 'Its true, but dont get me wrong I like some cats, if they are chill hahah.';

var incorrectOne = 'Do me a favor, check and see if you have a pulse....';
var incorrectTwo = 'Not a big fan of cake or any desserts for that matter xD';
var incorrectThree ='Wow, did you just assume that I dont go outside?';
var incorrectFour = 'I love culture, spent a summer learning german to get to know my own culture!!!';
var incorrectFive = 'LOL I like the cats that dont have worse attitudes then the chicks in Mean Girls';


var correctArray = [correctOne, correctTwo, correctThree, correctFour, correctFive];
var incorrectArray = [incorrectOne, incorrectTwo, incorrectThree, incorrectFour, incorrectFive];
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var answerArray = [answerOne, answerTwo, answerThree, answerFour, answerFive];

function guessingGame() {
  for(var i = 0; i < questionArray.length; i++) {
    var answer = prompt(questionArray[i]);
    answer = answer.toLowerCase();
    if( answer === answerArray[i] ) {
      console.log('Correct');
      correctCount++;
      alert(correctArray[i]);
    } else {
      console.log('Incorrect');
      alert(incorrectArray[i]);
    }
  }
}

function functionSix() {
  var questionSixGuesses = 0;
  while(questionSixGuesses < 4) {
    var questionSix = prompt('How old is Tyler? Hint: range 20-30');
    var inputToIntger = parseInt(questionSix);
    questionSixGuesses++;
    if( questionSix === '24') {
      console.log('Correct');
      correctCount++;
      alert('You had a 4/10 chance, you got lucky...');
      break;
    } else {
      if(questionSixGuesses === 4) {
        console.log('Incorrect');
        alert('LOL 4/10 chance to get it right xD How did you mess this up silly goose!!!!');
        break;
      }
      if(inputToIntger > 24) {
        console.log('Incorrect - High');
        alert('To high try agian! ' + questionSixGuesses + '/4!');
      } else {
        console.log('Incorrect - Low');
        alert('To low try agian! ' + questionSixGuesses + '/4!');
      }
    }
  }
}

function functionSeven() {
  var bestDogs = ['german shepherd', 'siberian husky'];
  var questionSevenGuesses = 0;
  while(questionSevenGuesses < 6) {
    var questionSeven = prompt('What is the best breed of Dog? Hint: Think big dogs not rats;)');
    var answerSeven = questionSeven.toLowerCase();
    if( (answerSeven === bestDogs[0]) || (answerSeven === bestDogs[1]) ) {
      console.log('correct');
      correctCount++;
      alert('German shepherds and Siberian Husky are the biggest and fluffiest of them all!!!!');
      break;
    } else {
      questionSevenGuesses++;
      if(questionSevenGuesses === 6) {
        console.log('Incorrect');
        alert('Uh oh, out of guesses,....you have a poor taste in dogs!');
        break;
      }
      console.log('Incorrect');
      alert('Try again! ' + questionSevenGuesses + '/6!');
    }
  }
}

guessingGame();
functionSix();
functionSeven();

if ( correctCount >= 4) {
  console.log(correctCount + '/7. Pass');
  alert('Wow you got ' + correctCount + '/7!!!! Not bad, kinda creepy actually xD');
} else {
  console.log(correctCount + '/7. Fail');
  alert('Honestly not even suprised you got ' + correctCount + '/7. You looked like a dummy when you walked in xD');
}
