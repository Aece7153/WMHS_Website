document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('email__form');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Allow Formsubmit to handle the submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const address = document.getElementById('address').value; // Optional field, may be empty

            // Log form data for debugging 
            console.log('Form submitted:', { name, email, subject, message, address });

            // Provide user feedback
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }, 500); // Delay to ensure Formsubmit processes the request
        });
    }
});