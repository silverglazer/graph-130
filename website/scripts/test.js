function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const lines = document.querySelectorAll('.line1, .line2, .line3');

  navLinks.classList.toggle('active');

  lines.forEach(line => {
    line.classList.toggle('active');
  });
}

const lines = document.querySelectorAll('.line1, .line2, .line3');

lines.forEach(line => {
    line.addEventListener('click', () => {
        toggleMenu();
    })
})