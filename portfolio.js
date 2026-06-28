const text = "Hello Everyone...";
const typing = document.getElementById("typing");

typing.textContent = "";

let i = 0;

function typeText() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeText, 120);
    }
}

window.onload = typeText;