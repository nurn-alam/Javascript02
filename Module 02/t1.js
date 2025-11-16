function reverseNumbers()
{
    const numbers = [];

    for (let i = 0; i < 5; i++) {
        const num = prompt(`Enter number ${i + 1}:`);
        numbers.push(num);
    }

    let result = "Numbers in reverse order:\n";
    for (let i = numbers.length - 1; i >= 0; i--) {
        result += numbers[i] + "\n";
    }
    console.log(result);
}