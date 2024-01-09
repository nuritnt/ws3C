document.querySelector('.header__hamburger-link').addEventListener('click', function(event) {
  event.preventDefault();
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
});

const currentPath = window.location.pathname;
document.querySelectorAll('.mobile-menu a').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.style.fontWeight = 'bold'; // Stil für aktiven Link
  }
});

// Schließen des Menüs, wenn auf einen Link geklickt wird
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });
});

// Schließen des Menüs, wenn auf das Schließkreuz geklickt wird
document.querySelector('.mobile-menu__close').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('active');
});
