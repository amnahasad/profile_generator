const readline = require('readline');

let answers = [];
let i = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyQuestions = [
    "What's your name? Nicknames are also acceptable :) ", 
    "What's an activity you like doing? ",
    "What do you listen to while doing that? ",
    "Which meal is your favourite (eg: dinner, brunch, etc.) ",
    "What's your favourite thing to eat for that meal? ", 
    "Which sport is your absolute favourite? ",
    "What is your superpower? In a few words, tell us what you are amazing at!"
];


const survey = function() {
    rl.question(surveyQuestions[i], (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        i++;
        answers.push(answer);

        if(i < surveyQuestions.length) {
            survey();
        } else {
            console.log(answers);
            rl.close();
        }
    })
};

survey();







