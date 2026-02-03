const navLinks = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname.split('/').pop();

navLinks.forEach((link) => {
  const target = link.getAttribute('href');
  if (target === currentPath || (!currentPath && target === 'home.html')) {
    link.classList.add('active');
  }
});
