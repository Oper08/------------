let number = parseInt(prompt("любой сан жазсай бауырым:"));
for (let i = 1; i <= number; i++) {
    if (number % 2 === 0) {
        break;
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
        break;
    }
}
