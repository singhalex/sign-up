const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const errorSpan = document.getElementById("error-span");
const submitButton = document.getElementById("submit-button");

function passwordChecker() {
    // Does nothing if the either password field is less than 6 characters
    if (password.value.length < 6 || passwordConfirmation.value.length < 6) {
        return;
    };
    
    // Disables the submit button if passwords do not match and displays message
    if (password.value === passwordConfirmation.value) {
        errorSpan.className = "";
        submitButton.disabled = false;
    } else {
        errorSpan.className = "error";
        submitButton.disabled = true;
    }
}

// Checks password matching on both password input fields
passwordConfirmation.addEventListener("keyup", passwordChecker);
password.addEventListener("keyup", passwordChecker);