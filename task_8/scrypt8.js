let randomNumber;
while (true) {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
    if (randomNumber > 8) {
        break;
    }
}
/*In this loop, we use a while (true) loop to continue generating random numbers indefinitely until we encounter a number greater than 8. 
The Math.random() function generates a random floating-point number between 0 (inclusive) and 1 (exclusive). 
We then multiply it by 10 to get a number between 0 and 9.99999... and use Math.floor() to round it down to the nearest integer.
 Adding 1 to the result ensures we get random integers between 1 and 10 (inclusive).

The loop will keep printing random numbers to the console until it generates a number greater than 8. Once it finds such a number,
 it will break out of the loop, and the program will stop.
 
*/