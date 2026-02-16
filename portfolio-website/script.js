// Simple fade-in effect on scroll
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            section.style.opacity = 1;
            section.style.transition = "0.8s ease";
        }
    });
});
