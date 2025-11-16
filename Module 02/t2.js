// Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order.

function getParticipants() {
    let count = Number(prompt("How many participants?"));
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number.");
        return;
    }

    let names = [];

    for (let i = 0; i < count; i++) {
        let name = prompt(`Enter name #${i+1}:`);
        if (name) {
            names.push(name.trim());
        } else {
            names.push("Unnamed");
        }
    }

    names.sort();

    let list = document.getElementById("output");
    list.innerHTML = "";

    names.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}
