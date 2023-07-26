
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