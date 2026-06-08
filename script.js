/* ═══════════════════════════════════════════════
   Aryan Bhad Portfolio — script.js
   ═══════════════════════════════════════════════ */

/* ── Set profile image ── */
document.getElementById('profile-img').src = IMG_PROFILE;

/* ── Footer year ── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ════════════════════════════════════
   MOUSE GLOW
   ════════════════════════════════════ */
const glowEl = document.getElementById('mouse-glow');
let glowX = -400, glowY = -400, tX = -400, tY = -400;

document.addEventListener('mousemove', e => { tX = e.clientX; tY = e.clientY; });

(function animGlow() {
  glowX += (tX - glowX) * 0.08;
  glowY += (tY - glowY) * 0.08;
  glowEl.style.left = glowX + 'px';
  glowEl.style.top  = glowY + 'px';
  requestAnimationFrame(animGlow);
})();

/* ════════════════════════════════════
   NAV — scroll behaviour
   ════════════════════════════════════ */
const nav     = document.getElementById('nav');
const navPill = document.getElementById('nav-pill');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

/* ════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const hb1 = document.getElementById('hb1');
const hb2 = document.getElementById('hb2');
const hb3 = document.getElementById('hb3');
let menuOpen = false;

function toggleMenu(force) {
  menuOpen = force !== undefined ? force : !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hb1.style.transform = menuOpen ? 'translateY(5px) rotate(45deg)'  : '';
  hb2.style.opacity   = menuOpen ? '0' : '';
  hb3.style.transform = menuOpen ? 'translateY(-5px) rotate(-45deg)' : '';
}

hamburger.addEventListener('click', () => toggleMenu());
document.querySelectorAll('.mobile-link').forEach(l =>
  l.addEventListener('click', () => toggleMenu(false))
);

/* ════════════════════════════════════
   HERO PARTICLES
   ════════════════════════════════════ */
const particlesEl = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('span');
  p.className = 'particle';
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    top:  ${Math.random() * 100}%;
    animation-duration: ${8 + Math.random() * 8}s;
    animation-delay:    ${Math.random() * 8}s;
  `;
  particlesEl.appendChild(p);
}

/* ════════════════════════════════════
   HERO PARALLAX on scroll
   ════════════════════════════════════ */
const heroGrid = document.querySelector('.hero-grid');
window.addEventListener('scroll', () => {
  const progress = Math.min(window.scrollY / window.innerHeight, 1);
  heroGrid.style.transform = `translateY(${progress * 150}px)`;
  heroGrid.style.opacity   = String(1 - progress);
}, { passive: true });

/* ════════════════════════════════════
   INTERSECTION OBSERVER — fade-up
   ════════════════════════════════════ */
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { rootMargin: '-80px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

/* ════════════════════════════════════
   COUNTER ANIMATION
   ════════════════════════════════════ */
function animateCounter(el, target, duration = 2000) {
  const start = performance.now();
  const tick  = now => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(eased * target);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target, parseInt(e.target.dataset.target));
      counterObserver.unobserve(e.target);
    }
  });
}, { rootMargin: '-50px' });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ════════════════════════════════════
   SKILL BAR ANIMATION
   ════════════════════════════════════ */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { rootMargin: '-30px' });

/* ════════════════════════════════════
   DATA — CERTIFICATIONS
   ════════════════════════════════════ */
const CERTS = [
  { name: 'CISCO ',                       org: 'Python Essentials 1  Python Essentials 2 Computer Hardware Basics Introduction to Cybersecurity',                date: '2023', link: 'https://drive.google.com/drive/folders/1wrPio388tA8A0Qu50G0Fn8R_7RNue6Rw?usp=sharing' },
  { name: 'Microsoft ',                   org: 'Azure Ai',                                                                                                       date: '2024', link: 'https://drive.google.com/drive/folders/1wHYto4kx5OXWz4ZY5ytFVj-BRd1O_AYp?usp=sharing' },
  { name: 'Udemy Academy',                org: 'Fundamental in chatbot tech. Aurdino meets python , web dev (html css js )',                                     date: '2024', link: 'https://drive.google.com/drive/folders/1bf3Gx5seD9EUuKGNRDNSRypm__AILWZI?usp=sharing' },
  { name: 'Lets Upgrade  Bootcamps',      org: 'Python, java script, figma, sql, html/css, c++ , cyber security and ethical hacking ',                           date: '2024', link: 'https://drive.google.com/drive/folders/1ZXTQgtMxG5gQiGuHiqm6mgEh-zwIS8zK?usp=sharing' },
  { name: 'IBM',                          org: 'Sql And Relational DB   Data Science101 ',                                                                       date: '2025', link: 'https://drive.google.com/drive/folders/16Uzonm5cBdOX4eEUIv6X5i4fI_co-c1D?usp=sharing' },
  { name: 'Oracle',                       org: 'Cloud infra & AI ',                                                                                              date: '2025', link: 'https://drive.google.com/drive/folders/1fJewZG7zb3B5Q0FK0DYVaIj-IGg4Fskc?usp=sharing' },
  { name: 'Delloit',                      org: 'Cyber Job Simulation',                                                                                           date: '2026', link: 'https://drive.google.com/drive/folders/1RvZ-xAWzoprClnEZsYg4DEKBX4S6Psbz?usp=drive_link' },
  ];

const AWARD_ICON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`;
const ARROW_ICON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;

const certsGrid = document.getElementById('certs-grid');
CERTS.forEach((c, i) => {
  const el = document.createElement('a');
  el.href      = c.link;
  el.target    = '_blank';
  el.rel       = 'noreferrer';
  el.className = 'cert-card glass fade-up';
  el.style.transitionDelay = `${i * 0.04}s`;
  el.innerHTML = `
    <div class="cert-glow"></div>
    <div class="cert-top">
      <span class="cert-icon gradient-blue">${AWARD_ICON}</span>
      <span class="cert-date">${c.date}</span>
    </div>
    <h3 class="cert-name">${c.name}</h3>
    <p class="cert-org">${c.org}</p>
    <div class="cert-link">View Credential ${ARROW_ICON}</div>`;
  certsGrid.appendChild(el);
  fadeObserver.observe(el);
});

/* ════════════════════════════════════
   DATA — PROJECTS
   ════════════════════════════════════ */
const PROJECTS = [
  {
    title:  'Rocky AI Robot (On going)',
    desc:   'Raspberry Pi powered AI assistant robot with real-time voice and custom personality engine.',
    tags:   ['Raspberry Pi', 'Python', 'LLM'],
    img:    'Image-Assets/Projects/Rocky.png',
    github: 'https://github.com/aryan4044/rocky-ai',
    demo:   '',
  },
  {
    "title": "Pulse Pressurized Irrigation System",
    "desc": "An automated, precision irrigation system that utilizes an ESP microcontroller and various sensors to manage pulse-pressurized watering cycles with real-time pressure control and Blynk IoT cloud integration.",
    "tags": ["ESP32", "Blynk IoT", "PID Control", "Pressure Sensors", "Embedded C++", "Smart Agriculture"],
    "img": "./Image-Assets/Projects/Pulse.jpg",
    "github": "https://github.com/aryan4044/pulse-pressurized-irrigation",
    "demo": "https://your-demo-link.com"
  },

    {
      "title": "Facial expression recognization",
      "desc": "Trained a custom AI model using YOLOv11 to recognize facial expressions in real-time.",
      "tags": ["YOLOv11", "Computer Vision", "PyTorch", "Python"],
      "img": "./Image-Assets/Projects/Facial.jpg",
      "github": "https://github.com/aryan4044/ai-automation",
      "demo": "https://your-demo-link.com"
    },
    {
      "title": "Cyber Car",
      "desc": "An autonomous RC vehicle designed to covertly enter properties and execute network deauthentication attacks.",
      "tags": ["Cybersecurity", "IoT", "Embedded Systems", "Wi-Fi Hacking"],
      "img": "Image-Assets/Projects/Cyber-Car.jpg",
      "github": "https://github.com/aryan4044/cyber-car",
      "demo": "https://your-demo-link.com"
    },
    {
      "title": "retropie",
      "desc": "A pocket-sized portable gaming console pre-loaded with an emulation environment holding various retro games.",
      "tags": ["Raspberry Pi", "RetroPie", "Linux", "Hardware"],
      "img": "Image-Assets/Projects/retropi.jpg",
      "github": "https://github.com/aryan4044/retropie-console",
      "demo": "https://your-demo-link.com"
    },
    {
      "title": "network pen tester",
      "desc": "A comprehensive network penetration testing toolkit configured to run smoothly within a Mint-Box environment.",
      "tags": ["Penetration Testing", "Linux Mint", "Networking", "Security"],
      "img": "Image-Assets/Projects/Network.jpg",
      "github": "https://github.com/aryan4044/network-pen-tester",
      "demo": "https://your-demo-link.com"
    },
    {
      "title": "Network phishing by beef",
      "desc": "A cybersecurity project focused on recreating popular web pages to demonstrate XSS vulnerabilities using BeEF on Kali Linux.",
      "tags": ["Kali Linux", "BeEF", "XSS", "Phishing Simulation"],
      "img": "Image-Assets/Projects/phishing.jpg",
      "github": "https://github.com/aryan4044/network-phishing-beef",
      "demo": "https://your-demo-link.com"
    },
    {
      "title": "Node MCU Esp-8266 Rover !",
      "desc": "A classic remote-controlled rover that utilizes the ESP8266 microchip to communicate and receive commands over Wi-Fi.",
      "tags": ["ESP8266", "NodeMCU", "C++", "IoT", "Robotics"],
      "img": "Image-Assets/Projects/esp.jpg",
      "github": "https://github.com/aryan4044/nodemcu-rover",
      "demo": "https://your-demo-link.com"
    }


];

const GH_ICON  = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9.08 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;
const EXT_ICON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const projGrid = document.getElementById('projects-grid');
PROJECTS.forEach((p, i) => {
  const el = document.createElement('article');
  el.className = 'project-card glass fade-up';
  el.style.transitionDelay = `${i * 0.05}s`;
  el.innerHTML = `
    <div class="project-img-wrap">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div class="project-img-overlay"></div>
      <div class="project-hover-overlay"></div>
      <div class="project-actions">
        <a href="${p.github}" target="_blank" rel="noreferrer" aria-label="${p.title} on GitHub" class="project-action project-action-gh">${GH_ICON}</a>
        <a href="${p.demo}"   target="_blank" rel="noreferrer" aria-label="${p.title} live demo"  class="project-action project-action-demo gradient-blue">${EXT_ICON}</a>
      </div>
    </div>
    <div class="project-body">
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
    </div>`;
  projGrid.appendChild(el);
  fadeObserver.observe(el);
});
/* ════════════════════════════════════
   DATA — SKILLS
   ════════════════════════════════════ */
const SKILL_GROUPS = [
  {
    title: 'AI & Machine Learning',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44L4.5 7a2.5 2.5 0 0 1 5-1M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44L19.5 7a2.5 2.5 0 0 0-5-1"/></svg>`,
    items: [{ n:'Python', l:95 }, { n:'LLMs', l:88 }, { n:'Hugging Face', l:82 }, { n:'Ollama', l:85 }, { n:'LangChain', l:80 }],
  },
  {
    title: 'Embedded Systems',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    items: [{ n:'Raspberry Pi', l:92 }, { n:'Arduino', l:88 }, { n:'Sensors', l:85 }, { n:'Robotics', l:80 }],
  },
  {
    title: 'Web Development',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    items: [{ n:'React', l:90 }, { n:'Next.js', l:85 }, { n:'Tailwind CSS', l:92 }, { n:'JavaScript', l:88 }],
  },
  {
    title: 'Tools & DevOps',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    items: [{ n:'Git', l:90 }, { n:'Linux', l:88 }, { n:'Docker', l:75 }, { n:'VS Code', l:95 }],
  },
];

const skillsGrid = document.getElementById('skills-grid');
SKILL_GROUPS.forEach((g, i) => {
  const el = document.createElement('div');
  el.className = 'skill-group glass fade-up';
  el.style.transitionDelay = `${i * 0.08}s`;
  el.innerHTML = `
    <div class="skill-group-header">
      <span class="skill-group-icon gradient-blue">${g.icon}</span>
      <h3 class="skill-group-title">${g.title}</h3>
    </div>
    <div class="skill-items">
      ${g.items.map((it, j) => `
        <div class="skill-item">
          <div class="skill-item-row">
            <span class="skill-item-name">${it.n}</span>
            <span class="skill-item-pct">${it.l}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill gradient-blue" data-width="${it.l}" style="transition-delay:${j * 0.1}s"></div>
          </div>
        </div>`).join('')}
    </div>`;
  skillsGrid.appendChild(el);
  fadeObserver.observe(el);
  skillObserver.observe(el);
});

/* ════════════════════════════════════
   DATA — TIMELINE / EXPERIENCE
   ════════════════════════════════════ */
const TIMELINE = [
  {
    year:  '2023',
    title: 'Engineering Education',
    desc:  'Began studies in Computer Science Engineering — foundation in circuits, signals, and embedded systems.',
    side:  'The spark that started everything. Fell in love with how hardware and software talk to each other.',
  },
  {
    year:  '2024',
    title: 'AI Research',
    desc:  'Explored LLMs, computer vision, and the intersection of AI with physical hardware.',
    side:  'First experiments running ML models on edge devices. Realised AI + hardware = the future.',
  },
  {
    year:  '2025',
    title: 'Robotics Development',
    desc:  'Built Rocky — a voice-driven AI assistant robot powered entirely by Raspberry Pi.',
    side:  'Rocky went from a sketch to a fully speaking, thinking robot. Still the proudest build.',
  },
  {
    year:  '2026',
    title: 'Major Projects Shipped',
    desc:  'Shipped Gemma AI research, the DSA learning platform, and multiple LLM-powered apps.',
    side:  'Gemma benchmarks on Pi, a live DSA platform, and AI automation tools — all in one year.',
  },
  {
    year:  '2027',
    title: 'Future Goals',
    desc:  'Scale AI-native robotics and ship products that make machine intelligence truly tangible.',
    side:  'The roadmap: smarter robots, smaller hardware, bigger impact.',
  },
];

const timelineEl = document.getElementById('timeline-items');

TIMELINE.forEach((t, i) => {
  const el = document.createElement('div');
  el.className = 'tl-item fade-up';
  el.style.transitionDelay = `${i * 0.07}s`;

  el.innerHTML = `
    <div class="tl-dot-wrap">
      <div class="tl-dot-ping"></div>
      <div class="tl-dot gradient-blue"></div>
    </div>

    <div class="tl-card glass">
      <div class="tl-year">${t.year}</div>
      <h3 class="tl-title">${t.title}</h3>
      <p class="tl-desc">${t.desc}</p>
    </div>

    <div class="tl-side-card">
      <div class="tl-side-card-inner glass">${t.side}</div>
    </div>`;

  timelineEl.appendChild(el);
  fadeObserver.observe(el);
});

/* ════════════════════════════════════
   CONTACT FORM
   ════════════════════════════════════ */
(function () {
  const form    = document.getElementById('contact-form');
  const btn     = document.getElementById('submit-btn');
  const icon    = document.getElementById('send-icon');

  /* ── Inline validation helpers ── */
  function showError(id, msg) {
    const input = document.getElementById(id);
    input.classList.add('input-error');
    let hint = input.parentElement.querySelector('.form-hint');
    if (!hint) {
      hint = document.createElement('span');
      hint.className = 'form-hint';
      input.parentElement.appendChild(hint);
    }
    hint.textContent = msg;
  }

  function clearErrors() {
    form.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    form.querySelectorAll('.form-hint').forEach(el => el.remove());
  }

  function validate() {
    let ok = true;
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name)                              { showError('name',    'Name is required.');          ok = false; }
    if (!email)                             { showError('email',   'Email is required.');          ok = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    { showError('email',   'Enter a valid email.');        ok = false; }
    if (!message || message.length < 10)   { showError('message', 'Message must be ≥ 10 chars.'); ok = false; }
    return ok;
  }

  /* ── Button state helpers ── */
  function setState(state) {
    const states = {
      idle:    { text: 'Send Message',   cls: '',             disabled: false },
      sending: { text: 'Sending…',       cls: 'btn-sending',  disabled: true  },
      success: { text: 'Message Sent ✓', cls: 'btn-success',  disabled: true  },
      error:   { text: 'Try Again',      cls: 'btn-error',    disabled: false },
    };
    const s = states[state];
    btn.textContent = s.text;
    if (icon && state === 'idle') btn.appendChild(icon);
    btn.className = btn.className.replace(/btn-sending|btn-success|btn-error/g, '').trim();
    if (s.cls) btn.classList.add(s.cls);
    btn.disabled = s.disabled;
  }

  /* ── Submit ── */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();
    if (!validate()) return;

    setState('sending');

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    formData,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        setState('success');
        form.reset();
        setTimeout(() => setState('idle'), 4000);
      } else {
        const err = await res.json().catch(() => ({}));
        console.error('Form error:', err);
        setState('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setState('error');
    }
  });

  /* ── Clear error styling on re-type ── */
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('input-error');
      const hint = el.parentElement.querySelector('.form-hint');
      if (hint) hint.remove();
    });
  });
})();
