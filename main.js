#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condation = true;
while (condation) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "what you like to add more in your todos?",
            default: "true",
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    condation = (todoquestions.secondQuestion);
}
