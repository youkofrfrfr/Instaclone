function redirectToInstagram(event) {
    // Prevent actual form submission to keep it on the page
    event.preventDefault(); 
    
    // Wait briefly then redirect
    setTimeout(function () {
        window.location.href = "https://www.instagram.com/";
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    const showPasswordBtn = document.getElementById('show-password-btn');
    const passwordField = document.getElementById('message');

    passwordField.addEventListener('input', function () {
        if (passwordField.value.length > 0) {
            showPasswordBtn.style.display = 'block';
        } else {
            showPasswordBtn.style.display = 'none';
        }
    });

    showPasswordBtn.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            showPasswordBtn.textContent = 'Hide';
        } else {
            passwordField.type = 'password';
            showPasswordBtn.textContent = 'Show';
        }
    });

    // Trigger the fade-in loader
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 800); 
    });
});
