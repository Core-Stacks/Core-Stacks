// Typing Effect: support both pages
const typedElement = document.getElementById("typed-text");
if (typedElement) {
  const pageText = document.title.includes("Contributors")
    ? "Meet the people behind Core Stacks"
    : "The men of the future";
  let i = 0;
  function type() {
    if (i < pageText.length) {
      typedElement.innerHTML += pageText.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
}

// Ripple Effect for all neon buttons
document.querySelectorAll(".neon-button").forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
