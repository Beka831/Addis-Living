document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const toggleLink = document.getElementById('toggle-link');
    
    function showLoginForm() {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        toggleLink.textContent = 'Sign up';
    }

    function showSignupForm() {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        toggleLink.textContent = 'Log in';
    }

    // Initialize view
    showLoginForm(); // Show login form by default

    // Attach event listener to the toggle link
    toggleLink.addEventListener('click', function() {
        if (loginForm.classList.contains('active')) {
            showSignupForm();
        } else {
            showLoginForm();
        }
    });
});
