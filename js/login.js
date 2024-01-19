document. addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginButton = document.getElementById('loginButton');
    
    togglePassword.addEventListener('click', () => {
        if(passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.innerHTML = 'Hide';
        } 
        else {
            passwordInput.type = 'password';
            togglePassword.innerHTML = 'Show';
            
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
            loginButton.disabled = true;
        } else {
            loginButton.disabled = false;
        }

    });

});