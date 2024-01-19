document. addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const registerButton = document.getElementById('registerButton');
    
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = 'Hide';
        } else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = 'Show';
        }
    });

    toggleConfirmPassword.addEventListener('click', () => {
        if (confirmPasswordInput.type === 'password') {
            confirmPasswordInput.type = 'text';
            toggleConfirmPassword.innerHTML = 'Hide';
        } else {
            confirmPasswordInput.type = 'password';
            toggleConfirmPassword.innerHTML = 'Show';
        }
    });


    const updateToggleButtonVisibility = () => {
        if(passwordInput.value.trim() === '') {
            togglePassword.style.visibility = 'hidden';
        } 
        else {
            togglePassword.style.visibility = 'visible';
        }
    }

    updateToggleButtonVisibility();

    passwordInput.addEventListener('input', () => {
        updateToggleButtonVisibility();

        if(

            usernameInput.value.trim() === '' ||
            passwordInput.value.trim() === ''

        ) {
            registerButton.disabled = true;
        } else {
            registerButton.disabled = false;
        }

    });

    const updateConfirmToggleButtonVisibility = () => {
        if(confirmPasswordInput.value.trim() === '') {
            toggleConfirmPassword.style.visibility = 'hidden';
        } 
        else {
            toggleConfirmPassword.style.visibility = 'visible';
        }
    }

    updateConfirmToggleButtonVisibility();

    confirmPasswordInput.addEventListener('input', () => {
        updateConfirmToggleButtonVisibility();

        if(

            usernameInput.value.trim() === '' ||
            passwordInput.value.trim() === '' ||
            confirmPasswordInput.value.trim() === ''

        ) {
            registerButton.disabled = true;
        } else {
            registerButton.disabled = false;
        }

    });
    const updateButtonState = () => {
        if (
            usernameInput.value.trim() === '' ||
            passwordInput.value.trim() === '' ||
            confirmPasswordInput.value.trim() === ''
        ) {
            registerButton.disabled = true;
        } else {
            registerButton.disabled = false;
        }
    };

    
    updateButtonState();

    usernameInput.addEventListener('input', updateButtonState);

});
