import inquirer from 'inquirer';
console.log("Guess a number between 1 to 10");
// create a variable  
let randomNumber = Math.floor(Math.random() * 10) + 1;
async function guessNumber() {
    while (true) {
        let input = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: "Enter your guess number"
        });
        let guess = parseInt(input.guess); // Convert guess to a number
        if (guess === randomNumber) {
            console.log("Congratulations! Your guess is correct.");
            break;
        }
        else {
            console.log("Sorry, your guess is incorrect. Please try again.");
        }
    }
}
guessNumber();
