'use strict';

var correctCount = 0;

var questionOne = prompt('Does Tyler like puppies');
var answerOne = questionOne.toLowerCase();
if( (answerOne === 'yes') || (answerOne === 'y') ) {
    console.log('Correct');
    correctCount++
    alert('Honestly who doesnt love puppies?!?!?!?');
} else {
    console.log('Incorrect');
    alert('Do me a favor, check and see if you have a pulse....');
};

var questionTwo = prompt('Does Tyler like cake?');
var answerTwo = questionTwo.toLowerCase();
if( (answerTwo === 'yes') || (answerTwo === 'y') ) {
    console.log('Incorrect');
    alert('Not a big fan of cake or any desserts for that matter xD');
} else {
    console.log('Correct');
    correctCount++
    alert('Lucky guess...');
};

var questionThree = prompt('Does Tyler like to travel?');
var answerThree = questionThree.toLowerCase();
if( (answerThree === 'yes') || (answerThree === 'y') ) {
    console.log('Correct');
    correctCount++
    alert('Love love love seeing new places and new cultures!!!');
} else {
    console.log('Incorrect');
    alert('Wow, did you just assume that I dont go outside?');
};

var questionFour = prompt('Does Tyler speak a foreign language?');
var answerFour = questionFour.toLowerCase();
if( (answerFour === 'yes') || (answerFour === 'y') ) {
    console.log('Correct');
    correctCount++
    alert('Ja Miche Ich!!!! Thats german for yes i do xD');
} else {
    console.log('Incorrect');
    alert('I love culture, spent a summer learning german to get to know my own culture!!!');
};

var questionFive = prompt('Does Tyler like cats?')
var answerFive = questionFive.toLowerCase();
if( (answerFive === 'yes') || (answerFive === 'y') ) {
    console.log('Incorrect');
    alert('LOL I like the cats that dont have worse attitudes then the chicks in Mean Girls');
} else {
    console.log('Correct');
    correctCount++
    alert('Its true, but dont get me wrong I like some cats, if they are chill hahah.');
};

var questionSixGuesses = 0;
var questionSevenGuesses = 0;

while(questionSixGuesses < 4) {
    var questionSix = prompt('How old is Tyler? Hint: range 20-30');
    var inputToIntger = parseInt(questionSix);
    questionSixGuesses++
    if( questionSix === '24') {
        console.log('Correct');
        correctCount++
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
    };
}

var bestDogs = ['german shepherd', 'siberian husky'];

while(questionSevenGuesses < 6) {
    var questionSeven = prompt('What is the best breed of Dog? Hint: Think big dogs not rats;)');
    var answerSeven = questionSeven.toLowerCase();
    if( (answerSeven === bestDogs[0]) || (answerSeven === bestDogs[1]) ) {
        console.log('correct');
        correctCount++
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

if ( correctCount >= 4) {
    console.log(correctCount + '/7. Pass');
    alert("Wow you got " + correctCount + "/7!!!! Not bad, kinda creepy actually xD");
} else {
    console.log(correctCount + '/7. Fail');
    alert("Honestly not even suprised you got " + correctCount + '/7. You looked like a dummy when you walked in xD');
}