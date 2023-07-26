const numbers = [1, 2, 4, 6, 8, 11, 45, 98, 102, 66, 73]
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        console.log(number + " is even");

    } else {
        console.log(number + " is odd")
    }

}
