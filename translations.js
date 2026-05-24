// ===== Translation System =====
const translations = {
  en: {
    // Navbar
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-experience": "Experience",
    "nav-projects": "Projects",
    "nav-certificates": "Certificates",
    "nav-education": "Education",
    "nav-contact": "Contact",
    "download-cv": "Download CV",
    "toggle-theme": "Toggle Theme",
    "lang-label": "عربي",

    // Hero
    "hero-badge": "Open to Opportunities",
    "hero-greeting": "Hi, I'm",
    "hero-name": "Ali Arafa",
    "hero-description": "Third-year IT student specializing in Network Engineering with CCNA certifications and hands-on experience in networking, IT support, and software development.",
    "hero-btn-contact": "Get in Touch",
    "hero-btn-projects": "View Projects",
    "stat-certificates": "Certificates",
    "stat-projects": "Projects",
    "stat-ccna": "CCNA Certs",

    // Typewriter roles
    "roles": ["Network Engineering Student", "CCNA Certified", "IT Support Enthusiast"],

    // About
    "about-tag": "<About />",
    "about-title": "About Me",
    "about-p1": "I'm a <strong>third-year Information Technology student</strong> specializing in Network Engineering at Fayoum International Technological University.",
    "about-p2": "Certified through <strong>Cisco Networking Academy</strong> with a strong foundation in CCNA-based networking, routing & switching, and basic cybersecurity concepts.",
    "about-p3": "Currently a trainee at the <strong>Information Technology Institute (ITI)</strong>, gaining practical experience in mobile application development and system integration.",
    "about-p4": "I'm seeking an <strong>internship or entry-level position</strong> in IT Support or Networking to apply my academic knowledge and technical skills in a real-world environment.",
    "info-education-title": "Education",
    "info-education-text": "B.IT - Network Engineering",
    "info-location-title": "Location",
    "info-location-text": "El Qanater El Khayria, Egypt",
    "info-certs-title": "Certifications",
    "info-certs-text": "CCNA Certified (3 Modules)",
    "info-status-title": "Status",
    "info-status-text": "Open for Opportunities",

    // Skills
    "skills-tag": "<Skills />",
    "skills-title": "Technical Skills",
    "skill-networking": "Networking",
    "skill-os": "Operating Systems",
    "skill-programming": "Programming",
    "skill-webmobile": "Web & Mobile",
    "tools-title-text": "Tools & Technologies",
    "tools-center": "Tools",

    // Experience
    "exp-tag": "<Experience />",
    "exp-title": "Professional Experience",
    "exp-job-title": "Trainee – Information Technology Institute",
    "exp-date": "Jul 2025 – Present",
    "exp-li1": "Completed intensive training in Flutter development",
    "exp-li2": "Developed a fully integrated mobile e-commerce application",
    "exp-li3": "Integrated Firebase Authentication, Firestore database, and REST APIs",
    "exp-li4": "Participated in technical workshops and developer events",

    // Projects
    "projects-tag": "<Projects />",
    "projects-title": "Featured Projects",
    "project1-title": "Cisco Network Simulation",
    "project1-desc": "Designed and implemented enterprise-level network using Packet Tracer. Configured VLANs, routing protocols, and basic security policies.",
    "project2-title": "Integrated E-commerce Store",
    "project2-desc": "Developed a mobile e-commerce application using Flutter. Integrated Firebase, Firestore, and REST APIs.",
    "project2-date": "Jul 2025 – Aug 2025",
    "project3-title": "Web E-commerce Platform",
    "project3-desc": "Developed a full web-based e-commerce platform. Improved browsing and purchasing workflow.",
    "project3-date": "Mar 2025 – May 2025",
    "project4-title": "IoT Robotic Hand",
    "project4-desc": "Designed and programmed a robotic hand using IoT technologies. Implemented embedded programming for control.",
    "project4-date": "Mar 2024 – May 2024",
    "project5-title": "Embedded Smart Home",
    "project5-desc": "Built a smart home system with remote control powered by solar energy. Features distance sensing, motion detection, gas detection with alarms, LED indicators, and password-protected access for security.",
    "project6-title": "Network Programming Chat App",
    "project6-desc": "Developed a real-time chat application using Java socket programming. Implemented client-server architecture with multi-threaded connections for simultaneous user communication.",

    // Certificates
    "certs-tag": "<Certificates />",
    "certs-title": "Certifications",
    "cert-cisco-title": "Cisco Networking Academy",
    "cert-cisco1": "CCNA: Introduction to Networks",
    "cert-cisco2": "CCNA: Switching, Routing & Wireless Essentials",
    "cert-cisco3": "CCNA: Enterprise Networking, Security & Automation",
    "cert-cisco4": "Introduction to Cybersecurity",
    "cert-cisco5": "Endpoint Security",
    "cert-cisco6": "Internet of Things (IoT)",
    "cert-cisco7": "Cisco Certified Support Technician (CCST) Networking",
    "cert-gallery-title": "Certificate Gallery",
    "cert-iti-title": "Information Technology Institute",
    "cert-iti1": "Mobile App Development with Flutter",
    "cert-iti2": "Artificial Intelligence Fundamentals",
    "cert-ibm-title": "IBM",
    "cert-ibm1": "Artificial Intelligence (AI) Certification",
    "cert-nti-title": "National Telecommunication Institute",
    "cert-nti1": "IT Technical Support Training",

    // Education
    "edu-tag": "<Education />",
    "edu-title": "Education & Awards",
    "edu-degree": "Bachelor of Information Technology",
    "edu-major": "Network Engineering – In Progress",
    "edu-school": "Fayoum International Technological University",
    "edu-date": "Oct 2023 – Jul 2027 (Expected)",
    "edu-location": "Fayoum, Egypt",
    "awards-title": "Awards & Recognition",
    "award1-title": "Second Best Project",
    "award1-desc": "Second-Year College Competition",
    "award2-title": "Cisco Scholarship Competition",
    "award2-desc": "Recognized participant",
    "languages-title": "Languages",
    "lang-english": "English",
    "lang-english-level": "Good",
    "lang-arabic": "Arabic",
    "lang-arabic-level": "Excellent",

    // Contact
    "contact-tag": "<Contact />",
    "contact-title": "Get In Touch",
    "contact-email-title": "Email",
    "contact-phone-title": "Phone",
    "contact-location-title": "Location",
    "contact-location-text": "El Qanater El Khayria, Qalyubia, Egypt",
    "form-title": "Send Me a Message",
    "form-name-label": "Your Name",
    "form-name-placeholder": "John Doe",
    "form-email-label": "Your Email",
    "form-email-placeholder": "john@example.com",
    "form-subject-label": "Subject",
    "form-subject-placeholder": "How can I help you?",
    "form-message-label": "Message",
    "form-message-placeholder": "Write your message here...",
    "form-submit": "Send Message",
    "form-sending": "Sending...",
    "form-success": "✅ Message sent successfully! I will get back to you soon.",
    "form-error": "❌ Failed to send message. Please try again or email me directly.",

    // Footer
    "footer-copy": "© 2025 Ali Arafa. All rights reserved.",
    "footer-tagline": "Built with",
    "footer-tagline-end": "and passion for networking",

    // Project Modal
    "modal-features": "Key Features",
    "modal-tech": "Technologies Used",
    "modal-close": "Close",
    "modal-view-details": "View Details",

    // Floating badges
    "badge-ccna": "CCNA",
    "badge-nti": "NTI",
    "badge-network": "Network",
  },

  ar: {
    // Navbar
    "nav-about": "عني",
    "nav-skills": "المهارات",
    "nav-experience": "الخبرة",
    "nav-projects": "المشاريع",
    "nav-certificates": "الشهادات",
    "nav-education": "التعليم",
    "nav-contact": "تواصل",
    "download-cv": "تحميل السيرة",
    "toggle-theme": "تغيير المظهر",
    "lang-label": "English",

    // Hero
    "hero-badge": "متاح للفرص",
    "hero-greeting": "مرحباً، أنا",
    "hero-name": "علي عرفة",
    "hero-description": "طالب تكنولوجيا معلومات بالسنة الثالثة، متخصص في هندسة الشبكات، حاصل على شهادات CCNA مع خبرة عملية في الشبكات والدعم الفني وتطوير البرمجيات.",
    "hero-btn-contact": "تواصل معي",
    "hero-btn-projects": "عرض المشاريع",
    "stat-certificates": "شهادات",
    "stat-projects": "مشاريع",
    "stat-ccna": "شهادات CCNA",

    // Typewriter roles
    "roles": ["طالب هندسة شبكات", "حاصل على شهادة CCNA", "متحمس للدعم الفني"],

    // About
    "about-tag": "<عني />",
    "about-title": "نبذة عني",
    "about-p1": "أنا <strong>طالب تكنولوجيا معلومات بالسنة الثالثة</strong> متخصص في هندسة الشبكات بجامعة الفيوم التكنولوجية الدولية.",
    "about-p2": "حاصل على شهادات من <strong>أكاديمية سيسكو للشبكات</strong> مع أساس قوي في شبكات CCNA والتوجيه والتبديل ومفاهيم الأمن السيبراني الأساسية.",
    "about-p3": "حالياً متدرب في <strong>معهد تكنولوجيا المعلومات (ITI)</strong>، أكتسب خبرة عملية في تطوير تطبيقات الموبايل وتكامل الأنظمة.",
    "about-p4": "أبحث عن <strong>تدريب أو وظيفة مبتدئة</strong> في الدعم الفني أو الشبكات لتطبيق معرفتي الأكاديمية ومهاراتي التقنية في بيئة عمل حقيقية.",
    "info-education-title": "التعليم",
    "info-education-text": "بكالوريوس IT - هندسة شبكات",
    "info-location-title": "الموقع",
    "info-location-text": "القناطر الخيرية، مصر",
    "info-certs-title": "الشهادات",
    "info-certs-text": "CCNA معتمد (3 وحدات)",
    "info-status-title": "الحالة",
    "info-status-text": "متاح للفرص",

    // Skills
    "skills-tag": "<المهارات />",
    "skills-title": "المهارات التقنية",
    "skill-networking": "الشبكات",
    "skill-os": "أنظمة التشغيل",
    "skill-programming": "البرمجة",
    "skill-webmobile": "الويب والموبايل",
    "tools-title-text": "الأدوات والتقنيات",
    "tools-center": "أدوات",

    // Experience
    "exp-tag": "<الخبرة />",
    "exp-title": "الخبرة المهنية",
    "exp-job-title": "متدرب – معهد تكنولوجيا المعلومات",
    "exp-date": "يوليو 2025 – الحالي",
    "exp-li1": "أكملت تدريب مكثف في تطوير Flutter",
    "exp-li2": "طورت تطبيق موبايل تجارة إلكترونية متكامل",
    "exp-li3": "دمجت Firebase Authentication و Firestore و REST APIs",
    "exp-li4": "شاركت في ورش عمل تقنية وفعاليات مطورين",

    // Projects
    "projects-tag": "<المشاريع />",
    "projects-title": "المشاريع المميزة",
    "project1-title": "محاكاة شبكة سيسكو",
    "project1-desc": "صممت ونفذت شبكة على مستوى المؤسسات باستخدام Packet Tracer. ضبطت VLANs وبروتوكولات التوجيه وسياسات الأمان الأساسية.",
    "project2-title": "متجر تجارة إلكترونية متكامل",
    "project2-desc": "طورت تطبيق موبايل للتجارة الإلكترونية باستخدام Flutter. دمجت Firebase و Firestore و REST APIs.",
    "project2-date": "يوليو 2025 – أغسطس 2025",
    "project3-title": "منصة تجارة إلكترونية ويب",
    "project3-desc": "طورت منصة تجارة إلكترونية كاملة على الويب. حسنت تجربة التصفح والشراء.",
    "project3-date": "مارس 2025 – مايو 2025",
    "project4-title": "يد روبوتية IoT",
    "project4-desc": "صممت وبرمجت يد روبوتية باستخدام تقنيات إنترنت الأشياء. نفذت البرمجة المدمجة للتحكم.",
    "project4-date": "مارس 2024 – مايو 2024",
    "project5-title": "منزل ذكي مدمج",
    "project5-desc": "بنيت نظام منزل ذكي بتحكم عن بعد يعمل بالطاقة الشمسية. يتضمن استشعار المسافة، كشف الحركة، كشف الغاز مع إنذارات، مؤشرات LED، ودخول محمي بكلمة سر.",
    "project6-title": "تطبيق دردشة برمجة شبكات",
    "project6-desc": "طورت تطبيق دردشة في الوقت الحقيقي باستخدام برمجة Socket في Java. نفذت بنية خادم-عميل مع اتصالات متعددة المسارات للتواصل المتزامن.",

    // Certificates
    "certs-tag": "<الشهادات />",
    "certs-title": "الشهادات",
    "cert-cisco-title": "أكاديمية سيسكو للشبكات",
    "cert-cisco1": "CCNA: مقدمة في الشبكات",
    "cert-cisco2": "CCNA: التبديل والتوجيه وأساسيات اللاسلكي",
    "cert-cisco3": "CCNA: شبكات المؤسسات والأمان والأتمتة",
    "cert-cisco4": "مقدمة في الأمن السيبراني",
    "cert-cisco5": "أمان نقاط النهاية",
    "cert-cisco6": "إنترنت الأشياء (IoT)",
    "cert-cisco7": "فني دعم معتمد من سيسكو (CCST) شبكات",
    "cert-gallery-title": "معرض الشهادات",
    "cert-iti-title": "معهد تكنولوجيا المعلومات",
    "cert-iti1": "تطوير تطبيقات الموبايل بـ Flutter",
    "cert-iti2": "أساسيات الذكاء الاصطناعي",
    "cert-ibm-title": "IBM",
    "cert-ibm1": "شهادة الذكاء الاصطناعي (AI)",
    "cert-nti-title": "المعهد القومي للاتصالات",
    "cert-nti1": "تدريب الدعم الفني IT",

    // Education
    "edu-tag": "<التعليم />",
    "edu-title": "التعليم والجوائز",
    "edu-degree": "بكالوريوس تكنولوجيا المعلومات",
    "edu-major": "هندسة الشبكات – قيد الدراسة",
    "edu-school": "جامعة الفيوم التكنولوجية الدولية",
    "edu-date": "أكتوبر 2023 – يوليو 2027 (متوقع)",
    "edu-location": "الفيوم، مصر",
    "awards-title": "الجوائز والتقدير",
    "award1-title": "ثاني أفضل مشروع",
    "award1-desc": "مسابقة السنة الثانية بالكلية",
    "award2-title": "مسابقة منحة سيسكو",
    "award2-desc": "مشارك معترف به",
    "languages-title": "اللغات",
    "lang-english": "الإنجليزية",
    "lang-english-level": "جيد",
    "lang-arabic": "العربية",
    "lang-arabic-level": "ممتاز",

    // Contact
    "contact-tag": "<تواصل />",
    "contact-title": "تواصل معي",
    "contact-email-title": "البريد الإلكتروني",
    "contact-phone-title": "الهاتف",
    "contact-location-title": "الموقع",
    "contact-location-text": "القناطر الخيرية، القليوبية، مصر",
    "form-title": "أرسل لي رسالة",
    "form-name-label": "اسمك",
    "form-name-placeholder": "محمد أحمد",
    "form-email-label": "بريدك الإلكتروني",
    "form-email-placeholder": "mohamed@example.com",
    "form-subject-label": "الموضوع",
    "form-subject-placeholder": "كيف يمكنني مساعدتك؟",
    "form-message-label": "الرسالة",
    "form-message-placeholder": "اكتب رسالتك هنا...",
    "form-submit": "إرسال الرسالة",
    "form-sending": "جاري الإرسال...",
    "form-success": "✅ تم إرسال الرسالة بنجاح! سأرد عليك قريباً.",
    "form-error": "❌ فشل إرسال الرسالة. حاول مرة أخرى أو راسلني مباشرة.",

    // Footer
    "footer-copy": "© 2025 علي عرفة. جميع الحقوق محفوظة.",
    "footer-tagline": "صُنع بـ",
    "footer-tagline-end": "وشغف بالشبكات",

    // Project Modal
    "modal-features": "المميزات الرئيسية",
    "modal-tech": "التقنيات المستخدمة",
    "modal-close": "إغلاق",
    "modal-view-details": "عرض التفاصيل",

    // Floating badges
    "badge-ccna": "CCNA",
    "badge-nti": "NTI",
    "badge-network": "شبكات",
  }
};

// ===== Language Switcher =====
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);

  // Update font family for Arabic
  if (lang === 'ar') {
    document.body.style.fontFamily = "'Cairo', 'Inter', sans-serif";
  } else {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      // Check if element has HTML content (strong tags etc)
      if (translation.includes('<strong>') || translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = translations[lang][key];
    if (translation) {
      el.placeholder = translation;
    }
  });

  // Update lang toggle button text
  document.querySelectorAll('.lang-toggle-text').forEach(el => {
    el.textContent = translations[lang]['lang-label'];
  });

  // Update typewriter roles
  if (typeof roles !== 'undefined' && typeof roleIndex !== 'undefined') {
    window._translatedRoles = translations[lang]['roles'];
  }

  // Update project modal if open
  if (typeof updateModalLanguage === 'function') {
    updateModalLanguage(lang);
  }
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
