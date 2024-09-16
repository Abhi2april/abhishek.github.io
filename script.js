document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Clear the form
        contactForm.reset();

        // Show a confirmation message
        alert('Thank you for your message! I\'ll get back to you soon.');
    });

    // Add some manga-style effects
    const headers = document.querySelectorAll('h1, h2, h3');
    headers.forEach(header => {
        header.addEventListener('mouseover', () => {
            header.style.transform = 'scale(1.1) rotate(-2deg)';
        });
        header.addEventListener('mouseout', () => {
            header.style.transform = 'scale(1) rotate(0)';
        });
    });
});
