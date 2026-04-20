// ===================================
// Scroll Progress Bar
// ===================================
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===================================
// Header Scroll Effect
// ===================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navList.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navList.classList.remove('active');
  });
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  const scrollY = window.scrollY;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===================================
// Typing Animation
// ===================================
const typingText = document.getElementById('typingText');
const phrases = [
  'Exploring Life at the Molecular Level',
  'Bridging Biology & Technology',
  'Passionate About Research',
  'Future Molecular Biologist'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500; // Pause before next phrase
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1000);

// ===================================
// Particles Animation in Hero
// ===================================
const particlesContainer = document.getElementById('particles');
const particleCount = 30;

function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// ===================================
// Stats Counter Animation
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;
  
  const statsSection = document.getElementById('about');
  const rect = statsSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight * 0.75) {
    statsAnimated = true;
    
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const updateNumber = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current);
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = target + (target === 100 ? '+' : '');
        }
      };
      
      updateNumber();
    });
  }
}

window.addEventListener('scroll', animateStats);

// ===================================
// Timeline Animation
// ===================================
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);

// ===================================
// Skills Progress Bar Animation
// ===================================
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  
  if (rect.top < window.innerHeight * 0.75) {
    skillsAnimated = true;
    
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      bar.style.setProperty('--progress', progress + '%');
      setTimeout(() => {
        bar.style.width = progress + '%';
      }, 100);
    });
  }
}

window.addEventListener('scroll', animateSkills);

// ===================================
// Projects Animation (AOS - Animate on Scroll)
// ===================================
function animateProjects() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 100);
    }
  });
}

window.addEventListener('scroll', animateProjects);
window.addEventListener('load', animateProjects);

// ===================================
// Contact Cards Animation
// ===================================
function animateContactCards() {
  const contactCards = document.querySelectorAll('.contact-card');
  
  contactCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150);
    }
  });
}

window.addEventListener('scroll', animateContactCards);
window.addEventListener('load', animateContactCards);

// ===================================
// Back to Top Button
// ===================================
const backToTop = document.getElementById('backToTop');

function toggleBackToTop() {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleBackToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===================================
// Visitor Counter
// ===================================
fetch('https://api.countapi.xyz/hit/devanandan-portfolio/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visits').textContent = data.value.toLocaleString();
  })
  .catch(() => {
    document.getElementById('visits').textContent = 'N/A';
  });

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===================================
// Page Load Animation
// ===================================
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// ===================================
// Intersection Observer for Data-AOS Attributes
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
  observer.observe(el);
});

// ===================================
// Prevent Flash of Unstyled Content
// ===================================
document.documentElement.classList.add('js-loaded');

// ===================================
// Handle External Links
// ===================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello, curious developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%c🧬 Thanks for checking out the code!', 'font-size: 14px; color: #10b981;');
console.log('%c📬 Feel free to reach out: devanandan24@iisertvm.ac.in', 'font-size: 12px; color: #6b7280;');
