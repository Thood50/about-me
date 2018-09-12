'use strict';

var questionOne = prompt('Does Tyler like puppies');
var answerOne = questionOne.toLowerCase();
if( (answerOne === 'yes') || (answerOne === 'y') ) {
    console.log('Correct');
    alert('Honestly who doesnt love puppies?!?!?!?')
} else {
    console.log('Incorrect')
    alert('Do me a favor, check and see if you have a pulse....')
};

var questionTwo = prompt('Does Tyler like cake?');
var answerTwo = questionTwo.toLowerCase();
if( (answerTwo === 'yes') || (answerTwo === 'y') ) {
    console.log('Incorrect');
    alert('Not a big fan of cake or any desserts for that matter xD')
} else {
    console.log('Correct')
    alert('Lucky guess...')
};

var questionThree = prompt('Does Tyler like to travel?');
var answerThree = questionThree.toLowerCase();
if( (answerThree === 'yes') || (answerThree === 'y') ) {
    console.log('Correct');
    alert('Love love love seeing new places and new cultures!!!')
} else {
    console.log('Incorrect')
    alert('Wow, did you just assume that I dont go outside?')
};

var questionFour = prompt('Does Tyler speak a foreign language?');
var answerFour = questionFour.toLowerCase();
if( (answerFour === 'yes') || (answerFour === 'y') ) {
    console.log('Correct');
    alert('Ja Miche Ich!!!! Thats german for yes i do xD')
} else {
    console.log('Incorrect')
    alert('I love culture, spent a summer learning german to get to know my own culture!!!')
};

var questionFive = prompt('Does Tyler like cats?')
var answerFive = questionFive.toLowerCase();
if( (answerFive === 'yes') || (answerFive === 'y') ) {
    console.log('Incorrect');
    alert('LOL I like the cats that dont have worse attitudes then the chicks in Mean Girls')
} else {
    console.log('Correct')
    alert('Its true, but dont get me wrong I like some cats, if they are chill hahah.')
};

var questionSix = prompt('How old is Tyler?');
var answerSix = questionSix.toLowerCase();

var answerArray = [answerSix, answerFive, answerFour, answerThree, answerTwo, answerOne];

for( i = 0; i < answerArray.length; i++) {
    
}