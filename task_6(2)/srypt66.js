document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitBtn");
    const radios = document.querySelectorAll('input[type="radio"]');

    submitButton.addEventListener("click", function () {
        let selectedRadio = "";
        radios.forEach((radio) => {
            if (radio.checked) {
                selectedRadio = radio.id;
            }
        });
        if (selectedRadio) {
            alert(`You have chosen radio box: ${selectedRadio}`);
        } else {
            alert("Please select a radio box before submitting.");
        }
    });
});
/*document.addEventListener("DOMContentLoaded", function () {...}): This code ensures that the JavaScript code inside the function will run once the HTML document has finished
 loading. It's a good practice to wrap your JavaScript code inside this event listener to make sure that the elements you want to interact with exist in the DOM
  before trying to access them.

const submitButton = document.getElementById("submitBtn");: This line of code selects the HTML element with the ID "submitBtn" and assigns it to the variable submitButton.
 This allows us to reference the submit button in the JavaScript code and add an event listener to it later.

const radios = document.querySelectorAll('input[type="radio"]');: This line of code selects all the input elements with the type "radio" and assigns them to the variable radios.
 The querySelectorAll method returns a NodeList, which is a collection of all matching elements.

submitButton.addEventListener("click", function () {...}): This code adds an event listener to the submit button. It listens for a "click" event on the submit button and
 executes the function inside when the button is clicked.

let selectedRadio = "";: This line declares a variable named selectedRadio and initializes it with an empty string. This variable will be used to keep track of the ID of
 the selected radio box.

radios.forEach((radio) => {...}): This code uses a forEach loop to iterate over each radio input element in the radios NodeList. For each radio element, the function 
inside the loop is executed.

(radio) => {...}: This is an arrow function, which is a concise way of writing a function in JavaScript. In this case, it takes a radio argument representing each radio
 input element in the NodeList.

if (radio.checked) {...}: This condition checks if the current radio element is checked (i.e., if it has been selected by the user).

selectedRadio = radio.id;: If the radio element is checked, its ID (which corresponds to the number of the radio box) is assigned to the selectedRadio variable.

if (selectedRadio) {...}: This condition checks if selectedRadio has a value (i.e., a radio box has been selected).

alert(You have chosen radio box: ${selectedRadio});: If a radio box has been selected, this line shows an alert with a message containing the ID of the selected radio box.
 The ${selectedRadio} is a template literal that allows us to insert the value of the selectedRadio variable into the string.

else {...}: If no radio box has been selected (i.e., selectedRadio is an empty string), this block of code executes.

alert("Please select a radio box before submitting.");: This line shows an alert informing the user that they need to select a radio box before submitting.

So, in summary, the JavaScript code sets up an event listener for the "click" event on the submit button. When the button is clicked, it checks which radio box has been
 selected, and then it displays an alert with the ID of the selected radio box. If no radio box has been selected, it shows a different alert asking the user to make a 
 selection before submitting.*/