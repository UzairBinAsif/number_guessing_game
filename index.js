#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nA game by Uzair Bin Asif\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([{
        name: "guessedNumber",
        type: "number",
        message: "Please guess a number between 1 and 10:",
    }]);
if (answer.guessedNumber === randomNumber) {
    console.log("Congratulations, you guessed right number");
}
else {
    console.log("You guessed a wrong number");
}
