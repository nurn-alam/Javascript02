//Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

'use strict';
function askDogs() {
    let dogs = [];

    for (let i = 0; i < 6; i++) {
        let name = prompt("Enter name of dog #" + (i + 1) + ":");
        dogs.push(name);
    }
    dogs.sort().reverse();

    // <ul> element
    let list = document.getElementById("dogList");
    list.innerHTML = ""; // clear old list if any

    // Add names
    for (let dog of dogs) {
        let li = document.createElement("li");
        li.textContent = dog;
        list.appendChild(li);
    }
}