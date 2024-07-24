// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('message', message);

            window.location.href = 'submit.html';
        });
    }

    if (window.location.pathname.endsWith('submit.html')) {
        const submittedName = localStorage.getItem('name');
        const submittedEmail = localStorage.getItem('email');
        const submittedMessage = localStorage.getItem('message');

        document.getElementById('submitted-name').textContent = submittedName;
        document.getElementById('submitted-email').textContent = submittedEmail;
        document.getElementById('submitted-message').textContent = submittedMessage;
    }
});

