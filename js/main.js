// =============================================
// COUNTDOWN até 01/10/2026 18:00
// =============================================
function updateCountdown() {
  const target = new Date('2026-10-01T18:00:00-03:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    const el = document.getElementById('countdown-section');
    if (el) el.innerHTML = '<div class="container"><p class="countdown-label" style="font-size:1.1rem;color:var(--color-primary);">🎉 A Feira de Ciências está acontecendo AGORA!</p></div>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = String(val).padStart(2, '0'); };
  set('cd-days', days);
  set('cd-hours', hours);
  set('cd-minutes', minutes);
  set('cd-seconds', seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =============================================
// HAMBURGER MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Fecha o menu ao clicar em qualquer link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
