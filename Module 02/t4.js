//  .Write a program that asks the user for numbers until the user gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)

'use strict';

function startProgram() {
    let numbers = [];

    while (true) {
        let input = prompt("Enter a number (0 to stop):");
        let num = Number(input);
        if (num === 0) {
            break;
        }
        numbers.push(num); // add number
    }

    numbers.sort(function(a, b) {
        return b - a; // largest to smallest
    });

    console.log("Numbers from largest to smallest:");
    console.log(numbers);
}