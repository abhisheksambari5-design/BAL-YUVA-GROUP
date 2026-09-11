const panels = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.22 });
panels.forEach((panel) => observer.observe(panel));

const sealGate = document.getElementById('sealGate');
const sealButton = document.getElementById('sealButton');
let invitationOpened = false;

function openInvitation() {
  if (invitationOpened) return;
  invitationOpened = true;
  sealGate.classList.add('opening');
  document.body.classList.add('invitation-open');
  setTimeout(() => {
    sealGate.classList.add('opened');
    document.querySelector('.hero').classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 720);
}

sealButton.addEventListener('click', openInvitation);
sealButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') openInvitation();
});

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
    title: 'बाल युवा ग्रुप गणपति आमंत्रण',
    text: '🙏 बप्पा के आगमन में आप सभी जरूर आएं। १४ सितंबर २०२६, शाम ४ बजे, ब्रह्मपुर। गणपति बप्पा मोरया! 🌺',
    url: window.location.href
  };
  if (navigator.share) {
    await navigator.share(shareData).catch(() => {});
  } else {
    await navigator.clipboard.writeText(window.location.href);
    const button = document.getElementById('shareButton');
    button.textContent = 'लिंक कॉपी हो गया ✓';
    setTimeout(() => { button.textContent = 'आमंत्रण साझा करें'; }, 2200);
  }
});
