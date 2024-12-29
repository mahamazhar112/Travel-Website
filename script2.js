document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const usernameField = document.querySelector('input[type="text"]');
    const passwordField = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (message) {
            message.remove();
        });

        let formValid = true;

        if (!usernameField.value.trim()) {
            formValid = false;
            showError(usernameField, "Username is required.");
        }

        if (!passwordField.value.trim()) {
            formValid = false;
            showError(passwordField, "Password is required.");
        }

        if (formValid) {
            alert("Login successful!");
            form.reset();
        }
    });

    function showError(inputField, message) {
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;
        inputField.parentElement.appendChild(errorMessage);
    }

    usernameField.addEventListener('focus', function () {
        usernameField.style.borderColor = '#4CAF50';
    });
    passwordField.addEventListener('focus', function () {
        passwordField.style.borderColor = '#4CAF50';
    });

    usernameField.addEventListener('blur', function () {
        usernameField.style.borderColor = '#ccc';
    });
    passwordField.addEventListener('blur', function () {
        passwordField.style.borderColor = '#ccc';
    });
});
