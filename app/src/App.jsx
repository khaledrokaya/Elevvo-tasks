import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Add event listeners
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <i className="fas fa-code"></i>
            <span>Elevvo Tasks</span>
          </div>
          <div className="nav-links">
            <a href="#tasks">Tasks</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="highlight">Elevvo</span> Internship
              <br />Development Tasks
            </h1>
            <p className="hero-subtitle">Showcasing web development skills through innovative projects</p>
            <div className="hero-badges">
              <span className="badge">HTML5</span>
              <span className="badge">CSS3</span>
              <span className="badge">JavaScript</span>
            </div>
            <div className="hero-buttons">
              <a href="#tasks" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Explore Tasks
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-user"></i>
                About Me
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      <main>
        <section id="tasks" className="tasks-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Featured Tasks</h2>
              <div className="section-line"></div>
              <p className="section-subtitle">Explore my latest web development projects and achievements</p>
            </div>
            <div className="tasks-grid">
              <div className="task-card">
                <div className="task-number">1.1</div>
                <div className="task-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="task-content">
                  <h3>Foundation Task</h3>
                  <p>HTML, CSS, and JavaScript fundamentals with modern design patterns and responsive layouts.</p>
                  <div className="task-tech">
                    <span className="tech-tag">HTML5</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                  </div>
                </div>
                <div className="task-actions">
                  <a href="/Task1/index.html" className="task-btn">
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>

              <div className="task-card">
                <div className="task-number">1.2</div>
                <div className="task-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="task-content">
                  <h3>Advanced Styling</h3>
                  <p>Advanced CSS techniques, animations, and interactive elements with modern design principles.</p>
                  <div className="task-tech">
                    <span className="tech-tag">Advanced CSS</span>
                    <span className="tech-tag">Animations</span>
                    <span className="tech-tag">Interactive</span>
                  </div>
                </div>
                <div className="task-actions">
                  <a href="/Task2/index.html" className="task-btn">
                    <i className="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <div className="section-line"></div>
              <p className="section-subtitle">Let's connect and discuss opportunities in web development</p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Khaled Mostafa</h3>
                    <p>Frontend Developer</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:khaled.mustafa.jr@gmail.com">khaled.mustafa.jr@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/khaled-mostafa-jr" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <i className="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/khaledrokaya/" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a href="https://www.khaled-mostafa.me/" target="_blank" rel="noopener noreferrer" className="social-link portfolio">
                  <i className="fas fa-briefcase"></i>
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
