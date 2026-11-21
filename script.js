const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuButton?.addEventListener('click', () => {
  const expanded = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
});
navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
