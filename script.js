// ===== Network Canvas =====
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 60, CONNECTION_DIST = 150;
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resizeCanvas); resizeCanvas();
class Particle {
  constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.radius = Math.random() * 2 + 1; }
  update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1; }
  draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || 'rgba(0,212,170,0.5)'; ctx.globalAlpha = 0.5; ctx.fill(); ctx.globalAlpha = 1; }
}
for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
function animateNetwork() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw() });
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '0,212,170';
  for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < CONNECTION_DIST) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.strokeStyle = `rgba(0,212,170,${0.15 * (1 - dist / CONNECTION_DIST)})`; ctx.lineWidth = 0.5; ctx.stroke(); }
  }
  requestAnimationFrame(animateNetwork);
}
animateNetwork();

// ===== Theme Toggle =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = theme === 'light' ? 'fa-sun' : 'fa-moon';
  document.getElementById('themeIcon').className = 'fas ' + icon;
  const mobileIcon = document.getElementById('mobileThemeIcon');
  if (mobileIcon) mobileIcon.className = 'fas ' + icon;
}
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});
const mobileToggle = document.getElementById('mobileThemeToggle');
if (mobileToggle) mobileToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== Navbar Scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

// ===== Mobile Menu =====
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => { mobileMenu.classList.toggle('active'); navToggle.classList.toggle('active'); });
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => { mobileMenu.classList.remove('active'); navToggle.classList.remove('active'); });
});

// ===== Typewriter =====
const roles = ['Network Engineering Student', 'CCNA Certified', 'IT Support Enthusiast'];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typewriterEl = document.getElementById('typewriter');
function typewrite() {
  const current = roles[roleIndex];
  typewriterEl.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  if (!isDeleting && charIndex > current.length) { setTimeout(() => { isDeleting = true; typewrite(); }, 2000); return; }
  if (isDeleting && charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  setTimeout(typewrite, isDeleting ? 30 : 80);
}
typewrite();

// ===== Counter Animation =====
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target, target = +el.dataset.target;
      let current = 0; const increment = target / 40;
      const timer = setInterval(() => { current += increment; if (current >= target) { el.textContent = target; clearInterval(timer); } else el.textContent = Math.ceil(current); }, 50);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.skill-category, .skill-card-new, .project-card, .cert-group, .info-card, .timeline-content, .contact-card, .edu-card, .awards-card, .languages-section, .contact-form-wrapper, .tools-section');
revealElements.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) { setTimeout(() => entry.target.classList.add('active'), i * 80); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => revealObserver.observe(el));

// ===== Active Nav Link =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id'); });
  navLinks.forEach(l => { l.classList.remove('active'); if (l.getAttribute('href') === '#' + current) l.classList.add('active'); });
});

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
document.querySelectorAll('.project-overlay').forEach(overlay => {
  overlay.addEventListener('click', () => {
    const img = overlay.parentElement.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});
lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });

// ===== Smooth Scroll for all anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== EmailJS Contact Form =====
// IMPORTANT: Replace these with your actual EmailJS credentials
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Replace the values below:
const EMAILJS_PUBLIC_KEY = 'u87-T9CgXVmE3TMpG';   // Your EmailJS Public Key
const EMAILJS_SERVICE_ID = 'service_mvfksod';   // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_v46npza'; // Your EmailJS Template ID

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
  formStatus.className = 'form-status';
  formStatus.style.display = 'none';

  const templateParams = {
    from_name: document.getElementById('from_name').value,
    from_email: document.getElementById('from_email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    to_name: 'Ali Arafa'
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
    .then(function () {
      formStatus.textContent = '✅ Message sent successfully! I will get back to you soon.';
      formStatus.className = 'form-status success';
      formStatus.style.display = 'block';
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span>';
    })
    .catch(function (error) {
      formStatus.textContent = '❌ Failed to send message. Please try again or email me directly.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span>';
      console.error('EmailJS Error:', error);
    });
});
