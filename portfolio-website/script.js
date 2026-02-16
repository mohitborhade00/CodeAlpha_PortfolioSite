// Typing Effect
const text = "Frontend Developer | Computer Science Student";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
} 

typeEffect();

// Scroll Reveal
const hiddenSections = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    hiddenSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Dark Mode
document.getElementById("theme-toggle")
.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
