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

  // ===== Language Toggle =====
  const langToggle = document.getElementById('langToggle');
  const mobileLangToggle = document.getElementById('mobileLangToggle');

  function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    // Restart typewriter with new language
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
  }

  if (langToggle) langToggle.addEventListener('click', toggleLanguage);
  if (mobileLangToggle) mobileLangToggle.addEventListener('click', () => {
    toggleLanguage();
    // Close mobile menu after toggling
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });

  // ===== Navbar Scroll =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });

  // ===== Mobile Menu =====
  const navToggle2 = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle2.addEventListener('click', () => { mobileMenu.classList.toggle('active'); navToggle2.classList.toggle('active'); });
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => { mobileMenu.classList.remove('active'); navToggle2.classList.remove('active'); });
  });

  // ===== Typewriter =====
  // Default roles, will be overridden by translation system
  window._translatedRoles = translations[currentLang]['roles'];
  let roleIndex = 0, charIndex = 0, isDeleting = false;
  const typewriterEl = document.getElementById('typewriter');
  function typewrite() {
    const currentRoles = window._translatedRoles || ['Network Engineering Student', 'CCNA Certified', 'IT Support Enthusiast'];
    const current = currentRoles[roleIndex % currentRoles.length];
    typewriterEl.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
    if (!isDeleting && charIndex > current.length) { setTimeout(() => { isDeleting = true; typewrite(); }, 2000); return; }
    if (isDeleting && charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % currentRoles.length; }
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

  // ===== Image Lightbox =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('active'); });

  // ===== Certificate Gallery Carousel =====
  const certCarousel = document.getElementById('certCarousel');
  const certPrev = document.getElementById('certPrev');
  const certNext = document.getElementById('certNext');
  const certDotsContainer = document.getElementById('certDots');
  const certCounter = document.getElementById('certCounter');
  const certSlides = document.querySelectorAll('.cert-slide');

  if (certCarousel && certSlides.length > 0) {
    const totalSlides = certSlides.length;
    
    // Create dots
    certSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('cert-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        const slideWidth = certSlides[0].offsetWidth + 20; // width + gap
        certCarousel.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      });
      certDotsContainer.appendChild(dot);
    });
    
    const updateCarouselState = () => {
      const scrollPos = certCarousel.scrollLeft;
      const slideWidth = certSlides[0].offsetWidth + 20;
      const currentIndex = Math.round(scrollPos / slideWidth);
      
      // Update counter
      certCounter.textContent = `${Math.min(currentIndex + 1, totalSlides)} / ${totalSlides}`;
      
      // Update dots
      document.querySelectorAll('.cert-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    };
    
    certCarousel.addEventListener('scroll', () => {
      requestAnimationFrame(updateCarouselState);
    });
    
    certNext.addEventListener('click', () => {
      const slideWidth = certSlides[0].offsetWidth + 20;
      certCarousel.scrollBy({ left: slideWidth, behavior: 'smooth' });
    });
    
    certPrev.addEventListener('click', () => {
      const slideWidth = certSlides[0].offsetWidth + 20;
      certCarousel.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    });
    
    // Lightbox integration for certs
    certSlides.forEach(slide => {
      slide.addEventListener('click', () => {
        const img = slide.querySelector('img');
        if(img) {
          lightboxImg.src = img.src;
          lightbox.classList.add('active');
        }
      });
    });
  }

  // ===== Smooth Scroll for all anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ===== Project Detail Data =====
  const projectData = {
    en: {
      'cisco-network': {
        title: 'Cisco Network Simulation',
        description: 'Designed and implemented a comprehensive enterprise-level network topology using Cisco Packet Tracer. This project demonstrates proficiency in network design, VLAN configuration, routing protocol implementation, and security policy enforcement across a multi-site network infrastructure.',
        features: [
          'Enterprise-level network topology design with multiple interconnected sites',
          'VLAN configuration for network segmentation and traffic isolation',
          'Dynamic routing protocols (OSPF, EIGRP) for optimal path selection',
          'Access Control Lists (ACLs) for basic network security',
          'Inter-VLAN routing using Layer 3 switches',
          'Network documentation and addressing scheme planning'
        ],
        techs: ['Cisco Packet Tracer', 'VLANs', 'OSPF', 'EIGRP', 'ACLs', 'Subnetting', 'STP', 'Network Security'],
        image: 'images/project-cisco.png'
      },
      'ecommerce-mobile': {
        title: 'Integrated E-commerce Store',
        description: 'Developed a full-featured mobile e-commerce application during ITI training using Flutter framework. The app provides a complete shopping experience with real-time data synchronization, user authentication, and seamless API integration.',
        features: [
          'User authentication with Firebase Auth (email/password & social login)',
          'Real-time product catalog with Firestore database',
          'Shopping cart with persistent state management',
          'Order tracking and history',
          'REST API integration for product data',
          'Responsive UI with Material Design components'
        ],
        techs: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'REST APIs', 'State Management', 'Material Design'],
        image: 'images/project-ecommerce-mobile.png'
      },
      'ecommerce-web': {
        title: 'Web E-commerce Platform',
        description: 'Built a comprehensive web-based e-commerce platform from scratch using core web technologies. The platform features an intuitive user interface with smooth navigation, product filtering, and an optimized checkout flow.',
        features: [
          'Responsive product catalog with grid/list views',
          'Product search and category filtering',
          'Shopping cart with local storage persistence',
          'Clean and modern UI design',
          'Optimized browsing and purchasing workflow',
          'Cross-browser compatible design'
        ],
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'LocalStorage', 'Web APIs'],
        image: 'images/project-ecommerce-web.png'
      },
      'iot-hand': {
        title: 'IoT Robotic Hand',
        description: 'Designed and built a programmable robotic hand using IoT technologies and embedded systems. This hardware project integrates sensor input with motor control to achieve precise finger movement and gesture recognition.',
        features: [
          'Servo motor control for individual finger movement',
          'Sensor integration for gesture detection',
          'IoT connectivity for remote control',
          'Embedded programming for real-time motor control',
          'Custom mechanical design and 3D printed parts',
          'Awarded Second Best Project in college competition'
        ],
        techs: ['IoT', 'Embedded Systems', 'Servo Motors', 'Sensors', 'Arduino/Microcontroller', 'C Programming'],
        image: 'images/project-iot-hand.png'
      },
      'smart-home': {
        title: 'Embedded Smart Home',
        description: 'Engineered a complete smart home automation system powered by solar energy with remote control capabilities. The system integrates multiple sensors and security features to create an intelligent home environment.',
        features: [
          'Solar-powered energy system for sustainable operation',
          'Ultrasonic distance sensing for proximity detection',
          'PIR motion detection for automated lighting and security',
          'Gas detection sensor with audible alarm system',
          'LED indicators for system status monitoring',
          'Password-protected access for security'
        ],
        techs: ['Embedded Systems', 'Solar Power', 'Ultrasonic Sensor', 'PIR Sensor', 'Gas Sensor', 'Security', 'Remote Control'],
        image: 'images/project-embedded.png'
      },
      'chat-app': {
        title: 'Network Programming Chat App',
        description: 'Developed a real-time multi-user chat application using Java socket programming. This networking project demonstrates understanding of client-server architecture, multi-threaded programming, and network protocols.',
        features: [
          'Client-server architecture with TCP sockets',
          'Multi-threaded server supporting simultaneous connections',
          'Real-time message broadcasting to all connected users',
          'User nickname system and join/leave notifications',
          'Clean GUI interface for message input and display',
          'Network protocol design for message formatting'
        ],
        techs: ['Java', 'Socket Programming', 'TCP/IP', 'Multi-Threading', 'GUI (Swing)', 'Networking'],
        image: 'images/project-chat-java.png'
      }
    },
    ar: {
      'cisco-network': {
        title: 'محاكاة شبكة سيسكو',
        description: 'صممت ونفذت طوبولوجيا شبكة شاملة على مستوى المؤسسات باستخدام Cisco Packet Tracer. يوضح هذا المشروع الكفاءة في تصميم الشبكات وتكوين VLANs وتنفيذ بروتوكولات التوجيه وتطبيق سياسات الأمان عبر بنية تحتية متعددة المواقع.',
        features: [
          'تصميم طوبولوجيا شبكة على مستوى المؤسسات مع مواقع مترابطة متعددة',
          'تكوين VLAN لتقسيم الشبكة وعزل حركة المرور',
          'بروتوكولات توجيه ديناميكية (OSPF, EIGRP) لاختيار المسار الأمثل',
          'قوائم التحكم في الوصول (ACLs) لأمان الشبكة الأساسي',
          'التوجيه بين VLANs باستخدام سويتشات الطبقة الثالثة',
          'توثيق الشبكة وتخطيط مخطط العنونة'
        ],
        techs: ['Cisco Packet Tracer', 'VLANs', 'OSPF', 'EIGRP', 'ACLs', 'Subnetting', 'STP', 'Network Security'],
        image: 'images/project-cisco.png'
      },
      'ecommerce-mobile': {
        title: 'متجر تجارة إلكترونية متكامل',
        description: 'طورت تطبيق موبايل تجارة إلكترونية كامل المميزات أثناء التدريب في ITI باستخدام إطار عمل Flutter. يوفر التطبيق تجربة تسوق كاملة مع مزامنة البيانات في الوقت الحقيقي ومصادقة المستخدم وتكامل سلس مع API.',
        features: [
          'مصادقة المستخدم مع Firebase Auth (بريد إلكتروني/كلمة مرور وتسجيل دخول اجتماعي)',
          'كتالوج منتجات في الوقت الحقيقي مع قاعدة بيانات Firestore',
          'سلة تسوق مع إدارة حالة مستمرة',
          'تتبع الطلبات والسجل',
          'تكامل REST API لبيانات المنتجات',
          'واجهة مستخدم متجاوبة مع مكونات Material Design'
        ],
        techs: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore', 'REST APIs', 'State Management', 'Material Design'],
        image: 'images/project-ecommerce-mobile.png'
      },
      'ecommerce-web': {
        title: 'منصة تجارة إلكترونية ويب',
        description: 'بنيت منصة تجارة إلكترونية شاملة على الويب من الصفر باستخدام تقنيات الويب الأساسية. تتميز المنصة بواجهة مستخدم بديهية مع تصفح سلس وتصفية المنتجات وتدفق دفع محسن.',
        features: [
          'كتالوج منتجات متجاوب مع عرض شبكي/قائمة',
          'بحث عن المنتجات وتصفية حسب الفئة',
          'سلة تسوق مع تخزين محلي مستمر',
          'تصميم واجهة مستخدم نظيف وعصري',
          'تحسين تدفق التصفح والشراء',
          'تصميم متوافق مع جميع المتصفحات'
        ],
        techs: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'LocalStorage', 'Web APIs'],
        image: 'images/project-ecommerce-web.png'
      },
      'iot-hand': {
        title: 'يد روبوتية IoT',
        description: 'صممت وبنيت يد روبوتية قابلة للبرمجة باستخدام تقنيات إنترنت الأشياء والأنظمة المدمجة. يدمج هذا المشروع مدخلات المستشعرات مع التحكم في المحركات لتحقيق حركة دقيقة للأصابع والتعرف على الإيماءات.',
        features: [
          'تحكم بمحركات سيرفو لحركة كل إصبع على حدة',
          'تكامل المستشعرات لكشف الإيماءات',
          'اتصال IoT للتحكم عن بعد',
          'برمجة مدمجة للتحكم في المحركات في الوقت الحقيقي',
          'تصميم ميكانيكي مخصص وأجزاء مطبوعة ثلاثية الأبعاد',
          'حصل على جائزة ثاني أفضل مشروع في مسابقة الكلية'
        ],
        techs: ['IoT', 'Embedded Systems', 'Servo Motors', 'Sensors', 'Arduino/Microcontroller', 'C Programming'],
        image: 'images/project-iot-hand.png'
      },
      'smart-home': {
        title: 'منزل ذكي مدمج',
        description: 'هندست نظام أتمتة منزل ذكي كامل يعمل بالطاقة الشمسية مع إمكانية التحكم عن بعد. يدمج النظام مستشعرات متعددة وميزات أمان لإنشاء بيئة منزلية ذكية.',
        features: [
          'نظام طاقة شمسية للتشغيل المستدام',
          'استشعار المسافة بالموجات فوق الصوتية لكشف القرب',
          'كشف الحركة PIR للإضاءة التلقائية والأمان',
          'مستشعر كشف الغاز مع نظام إنذار صوتي',
          'مؤشرات LED لمراقبة حالة النظام',
          'دخول محمي بكلمة مرور للأمان'
        ],
        techs: ['Embedded Systems', 'Solar Power', 'Ultrasonic Sensor', 'PIR Sensor', 'Gas Sensor', 'Security', 'Remote Control'],
        image: 'images/project-embedded.png'
      },
      'chat-app': {
        title: 'تطبيق دردشة برمجة شبكات',
        description: 'طورت تطبيق دردشة متعدد المستخدمين في الوقت الحقيقي باستخدام برمجة Socket في Java. يوضح مشروع الشبكات هذا فهم بنية خادم-عميل والبرمجة متعددة المسارات وبروتوكولات الشبكة.',
        features: [
          'بنية خادم-عميل مع TCP sockets',
          'خادم متعدد المسارات يدعم الاتصالات المتزامنة',
          'بث الرسائل في الوقت الحقيقي لجميع المستخدمين المتصلين',
          'نظام أسماء مستعارة وإشعارات الانضمام/المغادرة',
          'واجهة رسومية نظيفة لإدخال وعرض الرسائل',
          'تصميم بروتوكول شبكة لتنسيق الرسائل'
        ],
        techs: ['Java', 'Socket Programming', 'TCP/IP', 'Multi-Threading', 'GUI (Swing)', 'Networking'],
        image: 'images/project-chat-java.png'
      }
    }
  };

  // ===== Project Modal Logic =====
  const projectModal = document.getElementById('projectModal');
  const projectModalClose = document.getElementById('projectModalClose');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechs = document.getElementById('modalTechs');

  function openProjectModal(projectId) {
    const lang = currentLang || 'en';
    const data = projectData[lang][projectId];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;

    // Populate features
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      modalFeatures.appendChild(li);
    });

    // Populate techs
    modalTechs.innerHTML = '';
    data.techs.forEach(tech => {
      const span = document.createElement('span');
      span.textContent = tech;
      modalTechs.appendChild(span);
    });

    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Update modal language when language switches (if open)
  function updateModalLanguage(lang) {
    // If modal is open, re-render with new language
    if (projectModal.classList.contains('active')) {
      const currentProject = projectModal.getAttribute('data-current-project');
      if (currentProject) {
        openProjectModal(currentProject);
      }
    }
  }

  // Click handlers for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const projectId = card.getAttribute('data-project');
      if (projectId) {
        projectModal.setAttribute('data-current-project', projectId);
        openProjectModal(projectId);
      }
    });
  });

  // Close modal
  projectModalClose.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      lightbox.classList.remove('active');
    }
  });

  // ===== Web3Forms Contact Form =====
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    const lang = currentLang || 'en';
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>${translations[lang]['form-sending']}</span>`;
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    const formData = new FormData(contactForm);
    // Update the hidden subject with the actual subject value
    const subjectInput = document.getElementById('subject');
    formData.set('subject', subjectInput.value || 'New Portfolio Contact');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        formStatus.textContent = translations[lang]['form-success'];
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        contactForm.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      formStatus.textContent = translations[lang]['form-error'];
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
      console.error('Form Error:', error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i><span>${translations[lang]['form-submit']}</span>`;
    }
  });
