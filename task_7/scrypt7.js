for (let i = 1; i <= 20; i++) {


    /*n this loop, i starts at 1, and as long as i is less than or equal to 20, the loop will execute the block of code inside the curly braces.
     The console.log(i) statement will print each value of i to the console, displaying the numbers from 1 to 20 (inclusive) in the console output.*/


    if (i % 3 === 0) {
        console.log(i + " Divi 3");
    }
    if (i % 5 === 0) {
        console.log(i + " Divi 5")
    }
    if (i % 5 && i % 3) {
        console.log(i + " Divi 3 & 5")
    }
    else {
        console.log(i);
    }
}