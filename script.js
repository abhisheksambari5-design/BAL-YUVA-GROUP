const panels = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.22 });
panels.forEach((panel) => observer.observe(panel));

const petalLayer = document.getElementById('petals');
for (let i = 0; i < 16; i += 1) {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = i % 2 ? '✦' : '•';
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.fontSize = `${8 + Math.random() * 10}px`;
  petal.style.animationDuration = `${8 + Math.random() * 9}s`;
  petal.style.animationDelay = `${-Math.random() * 14}s`;
  petalLayer.appendChild(petal);
}

document.getElementById('shareButton').addEventListener('click', async () => {
  const shareData = {
    title: 'Baal Yuva Group Ganpati Invitation',
    text: '🙏 बप्पा के आगमन में आप सभी जरूर आएं। १४ सप्टेंबर २०२६, ब्रह्मपुर. गणपति बप्पा मोरया! 🌺',
    url: window.location.href
  };
  if (navigator.share) {
    await navigator.share(shareData).catch(() => {});
  } else {
    await navigator.clipboard.writeText(window.location.href);
    const button = document.getElementById('shareButton');
    button.textContent = 'लिंक कॉपी झाला ✓';
    setTimeout(() => { button.textContent = 'आमंत्रण शेअर करा'; }, 2200);
  }
});
