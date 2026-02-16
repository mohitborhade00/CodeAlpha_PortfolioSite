const text = "Frontend Developer | BSc CS Student";
let index = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (index < text.length) {
        typing.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
