"use client";

import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

export default function Home() {
  // Function to scroll to the projects section
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <Script id="schema-person" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Mathias Garcia",
          "url": "https://garciamathias.com",
          "jobTitle": "AI & Robotics Engineer",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "HEC Paris"
          },
          "knowsAbout": ["AI", "Robotics", "Machine Learning", "Entrepreneurship"],
          "worksFor": {
            "@type": "Organization",
            "name": "Fusion"
          }
        })}
      </Script>
      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Hero Section with 3D Robot and Blue Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full -z-10" />
        
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex items-center px-4 sm:px-6 lg:px-8 xl:px-20 z-20">
            <div className="max-w-2xl">
              <div className="inline-block px-3 sm:px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium">HEC Paris</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Hi, I'm
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Mathias Garcia
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl">
                Love AI and Robotics. Building AI Stuff
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button 
                  onClick={scrollToProjects}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </button>
                <a 
                  href="mailto:mathias.garcia@hec.edu"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white font-medium overflow-hidden rounded-md hover:border-white/50 transition-colors duration-300"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Robot */}
          <div className="absolute lg:relative inset-0 lg:inset-auto translate-y-10 sm:translate-y-20 lg:translate-y-10 z-10 opacity-20 lg:opacity-100 scale-[1.5] sm:scale-[1.4] lg:scale-[1.2]">
            <Spline
              scene="https://prod.spline.design/UjwbElZorV6KYXJO/scene.splinecode"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute left-0 bottom-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 blur-[150px] rounded-full -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
              <div className="h-[2px] flex-1 mx-4 sm:mx-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: "OpenRoboticDog",
                  description: "An affordable, autonomous quadruped robot that anyone can build at home. Capable of performing basic autonomous movements like walking, turning, and basic navigation.",
                  image: "bg-gradient-to-br from-blue-600 to-blue-800",
                  tags: ["Robotics", "3D Printing", "Arduino", "Python", "Autonomous"],
                  link: "https://github.com/garciamathias/OpenRoboticDog"
                },
                {
                  title: "LeRobot",
                  description: "A Hugging Face project making AI for Robotics more accessible with end-to-end learning. State-of-the-art machine learning for real-world robotics in PyTorch.",
                  image: "bg-gradient-to-br from-yellow-600 to-red-800",
                  tags: ["Python", "PyTorch", "AI", "Robotics", "Computer Vision"],
                  link: "https://github.com/huggingface/lerobot"
                },
                {
                  title: "Fusion AI",
                  description: "Built an innovative LLM/Agent orchestrator platform serving 1,000 daily active users. A general-purpose AI agent system built in Python.",
                  image: "bg-gradient-to-br from-blue-600 to-blue-800",
                  tags: ["Python", "LLM", "Agents", "AI"],
                  link: "https://anyfusion.ai/"
                },
                {
                  title: "DeepFlush AI Poker",
                  description: "Advanced AI poker bot using Monte Carlo Counterfactual Regret Minimization (MCCFR) for optimal decision making in Texas Hold'em.",
                  image: "bg-gradient-to-br from-purple-600 to-purple-800",
                  tags: ["Python", "MCCFR", "Game Theory", "AI"],
                  link: "https://github.com/eliottvalette/DeepFlush"
                },
                {
                  title: "Guugle",
                  description: "A Google-like search engine implementation with web crawler, indexing system, and ranking algorithm.",
                  image: "bg-gradient-to-br from-green-600 to-green-800",
                  tags: ["Python", "Search", "Web Crawler", "Full Stack"],
                  link: "https://github.com/garciamathias/search-engine"
                },
                {
                  title: "Makemore Implementation",
                  description: "Implementation of Andrej Karpathy's Makemore, a character-level language model using neural networks.",
                  image: "bg-gradient-to-br from-yellow-600 to-yellow-800",
                  tags: ["Python", "NLP", "Neural Networks", "Language Models"],
                  link: "https://github.com/karpathy/makemore"
                }
              ].map((project, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl -z-10 blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all h-full flex flex-col">
                    <div className={`h-48 ${project.image} rounded-lg mb-6 transform group-hover:scale-[1.02] transition-transform duration-300`} />
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-500/10 rounded-full text-xs text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-0 sm:py-8 lg:py-16 relative">
          <div className="absolute right-0 bottom-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-blue-500/10 blur-[150px] rounded-full -z-10" />
          
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
              <div className="h-[2px] flex-1 mx-4 sm:mx-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            
            {/* Grille d'expériences avec cartes de taille égale */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'OpenRoboticDog Developer',
                  company: 'Personal Project',
                  period: 'May 2025 - Present',
                  description: 'Building an affordable, autonomous quadruped robot that anyone can build at home. Capable of performing basic autonomous movements like walking, turning, and basic navigation.',
                  skills: ['Robotics', '3D Printing', 'Arduino', 'Python', 'Autonomous'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Physical AI (side project)',
                  company: 'Hugging Face - LeRobot',
                  period: 'March 2025 - April 2025',
                  description: 'Worked on Physical AI models with LeRobot, making AI for Robotics more accessible with end-to-end learning.',
                  skills: ['Python', 'PyTorch', 'AI', 'Robotics', 'Computer Vision'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  )
                },
                {
                  title: 'Founder (side project)',
                  company: 'Fusion',
                  period: 'January 2025 - February 2025',
                  description: 'Built an innovative LLM/Agent orchestrator platform serving 1,000 users.',
                  skills: ['AI/ML', 'LLM', 'Product Development', 'Entrepreneurship'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'AI Poker (side project)',
                  company: 'DeepFlush AI',
                  period: 'December 2024',
                  description: 'Collaborated with Eliott Valette to develop an advanced AI poker bot using Monte Carlo Counterfactual Regret Minimization (MCCFR) for optimal decision making in Texas Hold\'em 6-max for professional players.',
                  skills: ['Python', 'MCCFR', 'Game Theory', 'AI'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  )
                },
                {
                  title: 'Freelance Media Buyer & Data Scientist',
                  company: 'Meta and TikTok',
                  period: 'July 2023 - Present',
                  description: 'Managed acquisition strategies for cultural sector clients with €30,000+ budget, achieving 50% revenue increase through targeted campaigns.',
                  skills: ['Media Buying', 'Digital Marketing', 'Strategy', 'Data Science'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  )
                },
                {
                  title: 'Master in Management',
                  company: 'HEC Paris',
                  period: 'September 2023 - April 2027',
                  description: 'Specializing in Economics, Marketing, Finance, and Data Science',
                  skills: ['Economics', 'Finance', 'Data Science'],
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                }
              ].map((exp, i) => (
                <div key={i} className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl -z-10 blur-sm opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/70 transition-all duration-300 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 h-full flex flex-col">
                    {/* Entête avec icône et titre */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-blue-500/80 shadow-md shadow-blue-500/30 flex-shrink-0">
                        <div className="text-blue-400">
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text">{exp.title}</h3>
                        <span className="text-blue-400 block mt-1 font-medium">{exp.company}</span>
                        <span className="text-gray-400 block mt-1 text-sm font-light">{exp.period}</span>
                      </div>
                    </div>
                    
                    {/* Description et compétences */}
                    <p className="text-gray-300 mb-4 leading-relaxed ml-14 flex-grow">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 ml-14 mt-auto">
                      {exp.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 bg-blue-500/10 backdrop-blur-sm rounded-full text-xs text-blue-300 border border-blue-500/20 hover:border-blue-500/50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent -z-10" />
          
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">Let's Connect</h2>
            <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Looking to collaborate on innovative projects or discuss business opportunities? Let&apos;s connect and create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:mathias.garcia@hec.edu"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Email Me</span>
                <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:0782641318"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Call Me</span>
                <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/math.garcia10/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Instagram</span>
                <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.066.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
                  <circle cx="18" cy="6" r="1" stroke="none" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://x.com/garciamathias_"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">Twitter</span>
                <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mathias-garcia-a01047218/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 text-blue-500 font-medium overflow-hidden rounded-md hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">LinkedIn</span>
                <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14v7h4v-7M4 7a2 2 0 104 0 2 2 0 00-4 0z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
