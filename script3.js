document.addEventListener('DOMContentLoaded', function () {


    const form = document.querySelector('form');
    const submitButton = document.querySelector('button');

        
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let formValid = true;


        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (message) {
            message.remove();
        });

        
        const requiredFields = document.querySelectorAll('input[required], textarea[required]');
        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                formValid = false;

                const errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                errorMessage.textContent = 'This field is required.';
                field.parentElement.appendChild(errorMessage);
            }
        });

    
        if (!formValid) {
            event.preventDefault();
        } else {
    
            alert("Form submitted successfully!");
        }
    });

    const inputFields = document.querySelectorAll('input, textarea');
    inputFields.forEach(function (input) {
        input.addEventListener('focus', function () {
            this.style.borderColor = '#4CAF50'; 
        });
        input.addEventListener('blur', function () {
            this.style.borderColor = '#ccc'; 
        });
    });

});
