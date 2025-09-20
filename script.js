// Part 2: Box Animation
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
    box.classList.toggle("animate");
});

// Part 3: Card Flip
const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");

flipBtn.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

// Example of a reusable function
function toggleAnimation(element, className) {
    element.classList.toggle(className);
}
