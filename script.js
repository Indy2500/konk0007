// THEME TOGGLE
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// CURSOR


// SMOOTH CURSOR
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.transform = `
    translate(${currentX}px, ${currentY}px)
    translate(-50%, -50%)
  `;

  requestAnimationFrame(animateCursor);
}

animateCursor();
