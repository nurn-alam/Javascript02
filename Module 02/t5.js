//Write a program that prompts the user for numbers. When the user enters one of the numbers previously entered,
// the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)

'use strict';
function startProgram() {
    let numbers = [];

    while (true) {
        let input = prompt("Enter a number:");
        let num = Number(input);

        if (numbers.includes(num)) {
            alert("This number was already entered! Stopping...");
            break;
        }
        numbers.push(num);
    }

    numbers.sort(function(a, b) {
        return a - b; // order
    });
    console.log("Numbers in ascending order:");
    console.log(numbers);
}