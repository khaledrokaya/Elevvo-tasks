import { useState, useEffect, useRef } from 'react';
import './level2.3.css'

function Level2_3() {
  const [navOpen, setNavOpen] = useState(false);
  const sectionsRef = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSections = sectionsRef.current;
    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const features = [
    {
      icon: 'fas fa-check-circle',
      title: 'Smart Task Prioritization',
      description: 'Keep all your tasks in one place with customizable lists, tags, and priorities. Easily group tasks by project or deadline so nothing slips through the cracks.'
    },
    {
      icon: 'fas fa-tasks',
      title: 'Team Collaboration',
      description: 'Assign tasks to teammates, track progress in real time, and share updates instantly. Stay aligned and productive without endless back-and-forth messages.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Reminders & Deadlines',
      description: 'Never miss an important task again. Set due dates and reminders, and get notified when deadlines are approaching.'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      avatar: 'fas fa-user-circle',
      rating: 5,
      comment: 'TaskFlow has completely transformed how our team manages projects. The intuitive interface and powerful features make it indispensable for our daily workflow.'
    },
    {
      name: 'Mike Chen',
      role: 'Software Developer',
      avatar: 'fas fa-user-circle',
      rating: 5,
      comment: 'Finally, a task management app that actually makes sense! The smart prioritization feature alone has saved me hours every week.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      avatar: 'fas fa-user-circle',
      rating: 5,
      comment: 'The team collaboration features are outstanding. We can track progress in real-time and stay aligned without constant meetings.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        'Up to 10 tasks',
        'Basic task organization',
        'Mobile app access',
        'Email support'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      description: 'Ideal for professionals and small teams',
      features: [
        'Unlimited tasks',
        'Advanced prioritization',
        'Team collaboration',
        'Custom tags & filters',
        'Priority support',
        'Analytics dashboard'
      ],
      highlighted: true
    },
    {
      name: 'Team',
      price: '$19',
      period: 'per user/month',
      description: 'Built for growing teams and organizations',
      features: [
        'Everything in Pro',
        'Advanced team features',
        'Admin controls',
        'Custom integrations',
        'Advanced analytics',
        '24/7 dedicated support'
      ],
      highlighted: false
    }
  ];
  return (
    <div id="level2_3">
      <div className="header text-white py-4 h-[100vh]">
        <div className="container px-10 mx-auto">
          {/* Header */}
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo">
              <h1 className="!font-serif text-2xl font-bold">
                Task<span className="text-[var(--primary-dark)] text-3xl !font-serif">Flow</span>
              </h1>
            </div>
            {/* Links */}
            <div className={`!z-[9999] links ${navOpen ? 'h-[450px]' : 'h-0 !p-0'} top-16 left-0 lg:h-fit justify-between overflow-hidden absolute lg:relative bg-[var(--dark-color)] lg:bg-transparent lg:top-0 lg:items-center w-full p-4 rounded-lg flex-col flex lg:flex-row gap-8`}>
              <ul className="flex flex-col justify-center flex-1 w-full gap-8 lg:flex-row lg:static lg:w-auto lg:bg-transparent lg:p- lg:rounded-none">
                <li className="hover:lg:scale-110 hover:lg:bg-[var(--primary-dark)] rounded-xl cursor-pointer hover:bg-[var(--primary-light)] lg:py-1 lg:px-3 py-3 px-2">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:lg:scale-110 hover:lg:bg-[var(--primary-dark)] rounded-xl cursor-pointer hover:bg-[var(--primary-light)] lg:py-1 lg:px-3 py-3 px-2">
                  <a href="#features">Features</a>
                </li>
                <li className="hover:lg:scale-110 hover:lg:bg-[var(--primary-dark)] rounded-xl cursor-pointer hover:bg-[var(--primary-light)] lg:py-1 lg:px-3 py-3 px-2">
                  <a href="#reviews">Reviews</a>
                </li>
                <li className="hover:lg:scale-110 hover:lg:bg-[var(--primary-dark)] rounded-xl cursor-pointer hover:bg-[var(--primary-light)] lg:py-1 lg:px-3 py-3 px-2">
                  <a href="#pricing">Pricing</a>
                </li>
              </ul>
              {/* Download Button */}
              <div className="flex items-center justify-center w-full download-btn lg:w-fit">
                <button className="bg-[var(--primary-light)] lg:bg-[var(--primary-dark)] font-semibold py-2 px-4 rounded-lg text-md cursor-pointer border-2 border-black hover:bg-[var(--dark-color)] hover:scale-105">
                  Download App
                </button>
              </div>
            </div>
            <div className="hamburger-menu lg:hidden">
              <button onClick={() => setNavOpen(!navOpen)}>
                <i className="text-2xl cursor-pointer fas fa-bars"></i>
              </button>
            </div>
          </nav>
          {/* Header Content */}
          <div className="header-content flex flex-col items-center justify-center text-center h-[80vh]">
            <h1 className="!font-serif xl:text-8xl lg:text-6xl text-4xl font-bold">
              Task<span className="text-[var(--primary-dark)] xl:text-9xl lg:text-7xl text-5xl !font-serif">Flow</span>
            </h1>
            <p className="mt-4 text-xl lg:text-2xl">Your ultimate task management solution</p>
            <button className="mt-6 bg-[var(--primary-dark)] py-2 px-8 rounded-lg text-lg md:text-xl cursor-pointer border-2 border-black hover:bg-[var(--dark-color)] hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div id="features" className="features section-animate py-22 bg-[var(--primary-dark)]" ref={(el) => sectionsRef.current[0] = el}>
        <div className="container px-10 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-white">Why TaskFlow Stands Out</h2>
          <p className="mb-24 text-center text-gray-300">TaskFlow offers a unique blend of features designed to enhance your productivity and streamline your workflow.</p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div className="card bg-[#ffffff20] xl:px-12 xl:py-8 p-8 rounded-lg shadow-md text-center" key={index}>
                <div className="mb-4 text-6xl icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="mb-2 text-xl font-bold lg:text-2xl">{feature.title}</h3>
                <p className="text-[var(--primary-light)] text-sm leading-8">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews" className="reviews section-animate py-20 bg-[var(--dark-color)]" ref={(el) => sectionsRef.current[1] = el}>
        <div className="container px-10 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-white">What Our Users Say</h2>
          <p className="mb-16 text-center text-gray-300">Join thousands of satisfied users who have transformed their productivity with TaskFlow.</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div className="review-card bg-[var(--primary-dark)] p-8 rounded-lg shadow-lg border border-[var(--primary-light)] border-opacity-20" key={index}>
                <div className="flex items-center mb-6">
                  <div className="mr-4 avatar">
                    <i className={`${review.avatar} text-4xl text-[var(--primary-color)]`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{review.name}</h4>
                    <p className="text-[var(--primary-light)] text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="mb-4 rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="mr-1 text-yellow-400 fas fa-star"></i>
                  ))}
                </div>
                <p className="italic leading-6 text-gray-300">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="pricing section-animate py-20 bg-[var(--primary-dark)]" ref={(el) => sectionsRef.current[2] = el}>
        <div className="container px-10 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-white">Choose Your Plan</h2>
          <p className="mb-16 text-center text-gray-300">Select the perfect plan for your needs. Upgrade or downgrade at any time.</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div className={`pricing-card bg-[var(--dark-color)] flex flex-col p-8 rounded-lg shadow-lg border-2 transition-all duration-300 hover:scale-105 ${plan.highlighted ? 'border-[var(--primary-color)] bg-[var(--primary-color)] bg-opacity-10' : 'border-[var(--primary-light)] border-opacity-20'}`} key={index}>
                {plan.highlighted && (
                  <div className="mb-4 text-center">
                    <span className="bg-[var(--primary-dark)] text-white px-4 py-2 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <div className="mb-6 text-center">
                  <h3 className="mb-2 text-3xl font-extrabold text-white">{plan.name}</h3>
                  <p className="mb-4 text-sm text-gray-300">{plan.description}</p>
                  <div className="price">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="ml-2 text-sm text-gray-300">/{plan.period}</span>
                  </div>
                </div>
                <ul className="flex-1 mb-8 features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-3">
                      <i className="mr-3 text-green-400 fas fa-check"></i>
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold cursor-pointer transition-all duration-300 ${plan.highlighted ? 'hover:bg-[var(--primary-dark)] hover:text-white bg-[var(--light-color)] text-black' : 'bg-[var(--light-color)] hover:bg-[var(--primary-color)] text-[var(--dark-color)] hover:text-white'}`}>
                  {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-[var(--dark-color)] py-16" ref={(el) => sectionsRef.current[3] = el}>
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="!font-serif text-3xl font-bold text-white mb-4">
                Task<span className="text-[var(--primary-color)] text-4xl !font-serif">Flow</span>
              </h3>
              <p className="max-w-md mb-6 text-gray-300">
                Transform your productivity with TaskFlow's intuitive task management platform.
                Built for individuals and teams who demand excellence.
              </p>
              <div className="flex space-x-4 social-links">
                <a href="https://www.facebook.com/khaled.mostafa.jr" className="social-icon bg-[var(--primary-dark)] hover:bg-[var(--primary-color)] p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <i className="text-white fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/KhaledMoJr" className="social-icon bg-[var(--primary-dark)] hover:bg-[var(--primary-color)] p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <i className="text-white fab fa-x-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/khaled-mostafa-jr/" className="social-icon bg-[var(--primary-dark)] hover:bg-[var(--primary-color)] p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <i className="text-white fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/khaled_rokayaa/" className="social-icon bg-[var(--primary-dark)] hover:bg-[var(--primary-color)] p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <i className="text-white fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-[var(--primary-color)] transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-[var(--primary-color)] transition-colors">Features</a></li>
                <li><a href="#reviews" className="text-gray-300 hover:text-[var(--primary-color)] transition-colors">Reviews</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-[var(--primary-color)] transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <i className="fas fa-envelope mr-3 text-[var(--primary-color)]"></i>
                  khaled.mustafa.jr@gmail.com
                </li>
                <li className="flex items-center text-gray-300 text-nowrap">
                  <i className="fas fa-phone mr-3 text-[var(--primary-color)]"></i>
                  +20 1121370379
                </li>
                <li className="flex items-center text-gray-300">
                  <i className="fas fa-map-marker-alt mr-3 text-[var(--primary-color)]"></i>
                  Egypt, Gharbia, Tanta
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[var(--primary-light)] border-opacity-20 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 TaskFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Level2_3
