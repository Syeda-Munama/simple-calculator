#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number:",
        type: "number",
        name: "num1",
    },
    {
        message: "Enter Second Number:",
        type: "number",
        name: "num2",
    },
    {
        message: "Select one of the operator for operation:",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%"],
    }
]);
if (answer.operator === "+") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "-") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "*") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "/") {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operator === "%") {
    console.log(answer.num1 % answer.num2);
}
else {
    console.log("Invalid Operator");
}
