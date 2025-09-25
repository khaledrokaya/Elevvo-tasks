import React from 'react'
import './App.css'

const App: React.FC = () => {
  //* Scroll to tasks section
  const scrollToTasks = (): void => {
    const tasksSection = document.getElementById('tasks')
    if (tasksSection) {
      tasksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //* Static tasks data
  const tasks = [
    {
      id: '1.1',
      title: 'Collapsible Sidebar',
      description: 'A responsive sidebar navigation menu with smooth animations and accessibility features.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: '/Level1.1/index.html',
      githubLink: 'https://github.com/khaledrokaya/Elevvo-tasks/tree/main/Tasks/Level1.1',
      icon: 'fas fa-code',
    },
    {
      id: '1.2',
      title: 'Contact Form',
      description: 'A responsive contact form with validation and error handling.',
      tech: ["HTML5", "CSS3", "JavaScript"],
      link: '/Level1.2/index.html',
      githubLink: 'https://github.com/khaledrokaya/Elevvo-tasks/tree/main/Tasks/Level1.2',
      icon: 'far fa-envelope-open',
    },
    {
      id: '2.3',
      title: 'TaskFlow Landing Page',
      description: 'A modern, responsive landing page for a task management app with React, animations, and multiple sections.',
      tech: ['React', 'CSS3', 'JavaScript', 'TailwindCSS'],
      link: '/level2.3',
      githubLink: 'https://github.com/khaledrokaya/Elevvo-tasks/tree/main/Tasks/Level2.3',
      icon: 'fas fa-tasks',
    },
    {
      id: '2.5',
      title: 'Sanad Landing Page (SaaS App)',
      description: 'A responsive landing page for Sanad, an online therapy platform for children, featuring Arabic support and modern design.',
      tech: ['CSS3', 'JavaScript', 'TailwindCSS', 'HTML5'],
      link: '/Level2.5/index.html',
      githubLink: 'https://github.com/khaledrokaya/Elevvo-tasks/tree/main/Tasks/Level2.5',
      icon: 'fas fa-earth',
    },
  ]

  return (
    <div id='main-app'>
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
              <span className="badge">TailwindCSS</span>
              <span className="badge">TypeScript</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React</span>
            </div>
            <div className="hero-buttons">
              <a href="#tasks" className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                Explore Tasks
              </a>
              <a href="#contact" className="btn btn-secondary">
                <i className="fas fa-user"></i>
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={scrollToTasks}>
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
              {tasks.map((task) => (
                <div className="task-card" key={task.id}>
                  <div className="task-number">{task.id}</div>
                  <div className="task-icon">
                    <i className={task.icon}></i>
                  </div>
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <div className="task-tech">
                      {task.tech.map((tech) => (
                        <span className="tech-tag" key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="task-actions">
                    <a href={task.link} target="_blank" rel="noopener noreferrer" className="task-btn">
                      <i className="fas fa-external-link-alt"></i>
                      View Live
                    </a>
                    <a href={task.githubLink} target="_blank" rel="noopener noreferrer" className="task-btn">
                      <i className="fab fa-github"></i>
                      View Code
                    </a>
                  </div>
                </div>))}
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
    </div>
  )
}

export default App
