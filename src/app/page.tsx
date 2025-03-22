"use client";

import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with 3D Robot and Blue Accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full -z-10" />
      
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center px-4 lg:px-8 xl:px-20 z-20">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">HEC Paris Student</span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Mathias Garcia
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Full Stack Developer and Business Student at HEC Paris, passionate about bridging technology and business innovation
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold hover:opacity-90 transition-opacity">
                View Projects
              </button>
              <button className="px-8 py-4 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Robot */}
        <div className="absolute lg:relative inset-0 lg:inset-auto translate-y-20 lg:translate-y-10 z-10 opacity-20 lg:opacity-100 scale-[1.3] lg:scale-[1.2]">
        <Spline
            scene="https://prod.spline.design/UjwbElZorV6KYXJO/scene.splinecode"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <div className="h-[2px] flex-1 mx-8 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl -z-10 blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="h-48 bg-white/5 rounded-lg mb-6" />
                  <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
                  <p className="text-gray-400">Innovative solutions combining business and technology</p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-sm">TypeScript</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-32 relative">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 text-lg mb-8">
                As a student at HEC Paris, I combine my technical expertise in full-stack development with business acumen. 
                I'm passionate about creating innovative digital solutions that solve real business challenges.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    HEC
                  </div>
                  <div className="text-gray-400 mt-2">Paris Business School</div>
                </div>
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Full Stack
                  </div>
                  <div className="text-gray-400 mt-2">Developer</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-white/5 rounded-xl overflow-hidden">
              {/* Placeholder for an image or another Spline scene */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent -z-10" />
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Looking to collaborate on innovative projects or discuss business opportunities? Let's connect and create something extraordinary together.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
