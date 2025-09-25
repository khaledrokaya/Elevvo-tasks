// Testimonials data array
const testimonialsData = [
  {
    id: 1,
    text: "كنت محتاجة حد يمشي معايا خطوة بخطوة، الأخصائية كانت صبورة جداً وبسيطة في الترجمة، حسيت إن مش لوحدي في الرحلة دي",
    author: "أم ليلى",
    image: "https://images.unsplash.com/photo-1554342321-0776d282ceac?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkfGVufDB8fDB8fHww",
    direction: "top"
  },
  {
    id: 2,
    text: "ابني كان خايف من الكلام مع الناس، بعد الجلسات أصبح واثق من نفسه أكثر ويشارك في الأنشطة المدرسية",
    author: "أم أحمد",
    image: "https://plus.unsplash.com/premium_photo-1687473582281-e7f2cc0aef83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkfGVufDB8fDB8fHww",
    direction: "bottom"
  },
  {
    id: 3,
    text: "الأخصائي ساعد ابنتي تتعامل مع القلق، الآن تنام بهدوء وتذهب للمدرسة بدون خوف أو توتر",
    author: "أم سارة",
    image: "https://images.unsplash.com/photo-1629783509182-68c8c190e952?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    direction: "top"
  },
  {
    id: 4,
    text: "منصة سند غيرت حياتنا للأفضل، ابني أصبح أكثر تفاعلاً ويعبر عن مشاعره بطريقة صحية وإيجابية",
    author: "أم كريم",
    image: "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    direction: "bottom"
  },
  {
    id: 5,
    text: "كانت تجربة رائعة، الأخصائية فهمت احتياجات ابنتي بسرعة ووضعت خطة علاجية مناسبة لعمرها",
    author: "أم نور",
    image: "https://plus.unsplash.com/premium_photo-1705974281681-1fa016d00a24?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    direction: "top"
  },
  {
    id: 6,
    text: "الجلسات أونلاين كانت مريحة جداً، ابني كان يشعر بالأمان في البيت وده ساعد على نجاح العلاج",
    author: "أم يوسف",
    image: "https://images.unsplash.com/photo-1620905385976-9f191e837efd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    direction: "bottom"
  },
  {
    id: 7,
    text: "شكراً لفريق سند على الاهتمام والمتابعة، ابنتي الآن تتعامل مع الضغوط المدرسية بثقة أكبر",
    author: "أم منى",
    image: "https://images.unsplash.com/photo-1489673446964-e1f989187ddc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGtpZHxlbnwwfHwwfHx8MA%3D%3D",
    direction: "top"
  },
  {
    id: 8,
    text: "أنصح كل أم تمر بنفس التحدي، الأخصائيين في سند محترفين ويتعاملون مع الأطفال بحب وصبر",
    author: "أم زياد",
    image: "https://images.unsplash.com/photo-1706307121034-81829ec35a0d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxraWR8ZW58MHx8MHx8fDA%3D",
    direction: "bottom"
  }
];

// Create testimonial card HTML
function createTestimonialCard(testimonial) {
  return `
        <div class="testimonial-card min-w-[350px] h-[500px] rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl" style="background: url(${testimonial.image}) no-repeat center/cover;">
          <!-- Background decoration -->
          <div class="absolute overflow-hidden ${testimonial.direction}-0 items-center flex flex-col justify-center overlay right-0 w-full h-full text-center bg-white/40 cursor-pointer">
            <!-- Stars -->
            <div class="flex gap-1 mb-6 justify-center relative z-10">
                <i class="text-white fas fa-star text-lg"></i>
                <i class="text-white fas fa-star text-lg"></i>
                <i class="text-white fas fa-star text-lg"></i>
                <i class="text-white fas fa-star text-lg"></i>
                <i class="text-white fas fa-star text-lg"></i>
            </div>
            
            <!-- Testimonial Text -->
            <blockquote class="text-gray-800 text-lg text-center leading-relaxed mb-8 relative z-10 group-hover:text-gray-900">
                "${testimonial.text}"
            </blockquote>
            
            <!-- Author -->
            <div class="flex items-center justify-center relative z-10">
              <p class="font-semibold text-gray-800 group-hover:text-gray-900">
                        - ${testimonial.author}
              </p>
            </div>
          </div>
        </div>
    `;
}

// Populate testimonials and dots
function initializeSlider() {
  const track = document.getElementById('testimonials-track');

  // Populate testimonials
  track.innerHTML = testimonialsData.map(createTestimonialCard).join('');
}

// Theme Management
class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    this.init();
  }

  getStoredTheme() {
    return localStorage.getItem('level-2-5-theme');
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('level-2-5-theme', theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcon() {
    const button = document.getElementById('themeToggle');
    if (button) {
      // Add a subtle animation when theme changes
      button.style.transform = 'scale(0.9)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // Add click handler for theme toggle button
    document.addEventListener('DOMContentLoaded', () => {
      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          this.toggleTheme();

          // Add ripple effect
          this.createRippleEffect(themeToggle);
        });
      }
    });
  }

  createRippleEffect(button) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
      left: 50%;
      top: 50%;
      width: 100px;
      height: 100px;
      margin-left: -50px;
      margin-top: -50px;
    `;

    // Add ripple animation keyframes if they don't exist
    if (!document.querySelector('#ripple-animation')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
}

// Enhanced Theme Integration
function enhanceThemeIntegration() {
  // Add smooth transitions to theme-sensitive elements
  const themeTransitions = `
    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
    }
    
    .testimonial-card .overlay {
      background: var(--level-2-5-overlay-light) !important;
      transition: all 0.3s ease !important;
    }
    
    [data-theme="dark"] .testimonial-card .overlay {
      background: var(--level-2-5-overlay-dark) !important;
    }
    
    .bg-gradient-to-br {
      transition: all 0.3s ease !important;
    }
    
    [data-theme="dark"] .bg-gradient-to-br {
      filter: brightness(0.8) !important;
    }
  `;

  // Add enhanced theme styles if they don't exist
  if (!document.querySelector('#enhanced-theme-styles')) {
    const style = document.createElement('style');
    style.id = 'enhanced-theme-styles';
    style.textContent = themeTransitions;
    document.head.appendChild(style);
  }
}

// Initialize theme system
const themeManager = new ThemeManager();

document.addEventListener('DOMContentLoaded', () => {
  initializeSlider();
  enhanceThemeIntegration();

  // Add keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + T)
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
      e.preventDefault();
      themeManager.toggleTheme();
    }
  });

  // Add theme toggle to context menu (right-click)
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.theme-toggle')) {
      e.preventDefault();
      themeManager.toggleTheme();
    }
  });

  // Announce theme changes for accessibility
  themeManager.announceThemeChange = function (theme) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
    announcement.textContent = theme === 'dark' ? 'تم تفعيل المظهر الداكن' : 'تم تفعيل المظهر الفاتح';
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Override setTheme to include announcement
  const originalSetTheme = themeManager.setTheme.bind(themeManager);
  themeManager.setTheme = function (theme) {
    originalSetTheme(theme);
    this.announceThemeChange(theme);
  };
});