#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "What do you want to add in your todo list?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more in your todo list",
            default: false
        },
    ]);
    const { Todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list");
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log("No todo list found");
}
