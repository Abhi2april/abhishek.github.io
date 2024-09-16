document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form submission (you'll need to implement the server-side handling)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! (Note: This is a demo, no message was actually sent)');
        form.reset();
    });

    // Add a subtle animation to project elements
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.05)';
            project.style.transition = 'transform 0.3s ease';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
        });
    });
});
