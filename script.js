// small helper: highlight nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav a').forEach(a => {
    try {
      const href = new URL(a.href).pathname.replace(/\/$/, '') || '/';
      if (href === path) a.classList.add('active');
    } catch(e){}
  });
});
