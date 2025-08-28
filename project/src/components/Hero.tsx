import React from 'react';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            MK
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Mohit Kumar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Aspiring Software Engineer | Passionate about Web Development & Problem Solving
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Building innovative solutions with modern technologies and creative problem-solving
            </p>
          </div>

          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download Resume Button */}
            <a
             href="https://drive.google.com/file/d/1O5WRUhikC8pwlTBbOCkPfKTfWvxa_J9x/view?usp=sharing" // Place resume.pdf inside your public/ folder
             download="Mohit_Kumar.pdf"
             className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
             >
             <Download className="h-5 w-5 group-hover:animate-bounce" />
             <span>Resume</span>
            </a>

          {/* View Projects Button */}
        <button
          onClick={scrollToProjects}
          className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
          View Projects
        </button>
</div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/mohitkumar9966" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohit-kumar3636/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
