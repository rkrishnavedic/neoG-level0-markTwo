const chalk = require('chalk')
const readline = require('readline-sync')

console.log(chalk.gray('Initialising the quiz'))

const userName = readline.question(chalk.cyan('Please Enter your Name: '))

console.log('Welcome '+userName+'!')
console.log(chalk.red('Mahabharta Quiz'))

console.log(chalk.yellow('Following are rules of quiz'))
console.log(chalk.cyan('1. You will be awarded +4 for correct answer. Answers are not case sensitive. You can write Krishna, KRISHNA, krishna or any combination of caseLetters'))
console.log(chalk.cyan('2. You will be awarded -1 for wrong answer'))
console.log(chalk.cyan('3. You can skip the question by typing - (the negative sign)'))
console.log(chalk.cyan('4. You can give wrong answer to atmost 2 questions. So please play wisely'))
console.log(chalk.cyan('5. There are 9 questions in total. This number is hint to one of your question asked in quiz\n'))

let score=0
let wrong=3

function askQuestion(obj){
    console.log(chalk.yellow(obj.question)+chalk.gray('(If you like to skip the question type - )'))
    let usrAns = readline.question(chalk.gray('Your Answer: '))

    if(usrAns === '-'){
        console.log(chalk.blue('Skipped! Add the correct answer to yourself as ')+chalk.green(obj.answer.toUpperCase())+'\n')
        return
    }

    if(usrAns.toLowerCase() === obj.answer.toLowerCase()){
        console.log(chalk.green('Correct!\n'))
        score +=4
    }
    else{
        console.log(chalk.red('Wrong!')+' Correct answer is '+chalk.green(obj.answer.toUpperCase())+'\n')
        score -=1
        wrong -=1
    }
}

const listQ = [
    {
        question:"What is the name of Arjuna's son?",
        answer:"abhimanyu"
    },
    {
        question:"Krishna offered Narayani Sena (Undeafeatable Narayani Warriors) to Arjuna?(yes/no)",
        answer:"no"

    },
    {
        question:"Who wrote the Mahabharat?",
        answer:"ganesh"
    },
    {
        question:"Kurukshetra War was fought for how many days?",
        answer:"18"
    },
    {
        question:"Who won the Mahabharata according to Barbarika(Grandson of Bheem)?",
        answer:"Krishna"
    },
    {
        question:"Who killed Shakuni in the War?",
        answer:"sahadev"
    },
    {
        question:"After the war who was cursed by Gandhari(wife of Dhritrashtra)?",
        answer:"Krishna"
    },
    {
        question:"Who cursed Ashwathama?",
        answer:"Krishna"
    },
    {
        question:"Barbarik was Grandson of which Pandav Brothers?",
        answer:"bheem"
    }
]

for (let i=0;i<listQ.length;i++){
    askQuestion(listQ[i])
    if(wrong == 0){
        console.log(chalk.red('Oops! you reached the max count of wrong answers!'));
        break;
    }
}

console.log(chalk.cyan(userName+', your final score is : '+score))

var leaderBoard = [
    {
        name:"Meghnath",
        score:36
    },
    {
        name:"Awasthi",
        score:32
    },
    {
        name:"Shantanu",
        score:31
    }
]

let minScoreInLeaderBoard=36

console.log('\n This is the leader Board!')

for(let i=0;i<leaderBoard.length;i++){
    console.log('Rank '+(i+1)+': '+leaderBoard[i].name+' with score = '+leaderBoard[i].score)
    if(leaderBoard[i].score < minScoreInLeaderBoard){
        minScoreInLeaderBoard = leaderBoard[i].score
    }
}

if(score > minScoreInLeaderBoard){
    console.log(chalk.yellow('\nWonderful Work! Grab you position in top performers. Send us the screenshot of your achievment as verification.'))
}