// Get the form element by id
var form = document.getElementById("register-form");

// Get the input elements by id
var firstnameInput = document.getElementById("firstname");
var lastnameInput = document.getElementById("lastname");
var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");

// Initialize a variable to store the form validation status
var isFormValid = false;

// Add a focusout event listener to each input element
firstnameInput.addEventListener("focusout", validateFirstname);
lastnameInput.addEventListener("focusout", validateLastname);
usernameInput.addEventListener("focusout", validateUsername);
emailInput.addEventListener("focusout", validateEmail);
passwordInput.addEventListener("focusout", validatePassword);
confirmPasswordInput.addEventListener("focusout", validateConfirmPassword);

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
    // Validate the whole form
    isFormValid = validateFirstname() && validateLastname() && validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();

    // If the form is not valid, prevent the form submission
    if (!isFormValid) {
        event.preventDefault();
    }
});

// Define the validation functions for each input field
function validateFirstname() {
    const firstname = firstnameInput.value.trim();
    const isValid = firstname.length >= 1;
    displayFeedback(firstnameInput, isValid, "First Name is required.");
    return isValid;
}

function validateLastname() {
    const lastname = lastnameInput.value.trim();
    const isValid = lastname.length >= 1;
    displayFeedback(lastnameInput, isValid, "Last Name is required.");
    return isValid;
}

function validateUsername() {
    const username = usernameInput.value.trim();
    const isValid = username.length >= 3;
    displayFeedback(usernameInput, isValid, "Username must be at least 3 characters.");
    return isValid;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const isValid = /\S+@\S+\.\S+/.test(email);
    displayFeedback(emailInput, isValid, "Please enter a valid email address.");
    return isValid;
}

function validatePassword() {
    const password = passwordInput.value.trim();
    let isValid = true;

    if (password.length < 8) {
        isValid = false;
        displayFeedback(passwordInput, false, "Password must be at least 8 characters.");
    } else if (!/[a-z]/.test(password)) {
        isValid = false;
        displayFeedback(passwordInput, false, "Password must contain at least one lowercase letter.");
    } else if (!/[A-Z]/.test(password)) {
        isValid = false;
        displayFeedback(passwordInput, false, "Password must contain at least one uppercase letter.");
    } else if (!/\d/.test(password)) {
        isValid = false;
        displayFeedback(passwordInput, false, "Password must contain at least one number.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        isValid = false;
        displayFeedback(passwordInput, false, "Password must contain at least one special character.");
    } else {
        displayFeedback(passwordInput, true, "");
    }
    return isValid;
}

function validateConfirmPassword() {
    const confirmPassword = confirmPasswordInput.value.trim();
    const isValid = confirmPassword === passwordInput.value.trim();
    displayFeedback(confirmPasswordInput, isValid, "Password and confirm password do not match.");
    return isValid;
}

// Define a helper function to display the feedback message for each input field
function displayFeedback(inputElement, isValid, message) {
  // Get the feedback element by id
    const feedbackElement = document.getElementById(inputElement.id + "Feedback");

  // Set the feedback text and color
    feedbackElement.textContent = isValid ? "" : message;
    feedbackElement.style.color = isValid ? "green" : "red";
}
