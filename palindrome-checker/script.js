const userInputText = document.getElementById("input");
const resultLabel = document.getElementById("result");

const button = document.getElementById("checkButton");
button.addEventListener("click", function() {
    const value = userInputText.value;
    const reverse = reverseString(value);
    value === reverse ? resultLabel.innerText = "Palindrome" : resultLabel.innerText = "Try Again!";
    userInputText.value = "";
});

function reverseString(str) {
    return str.split("").reverse().join("");
}

