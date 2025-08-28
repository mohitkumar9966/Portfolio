import React from 'react';
import { Code2, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Education', href: 'education' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Hobbies', href: 'hobbies' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Mohit Kumar
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Software Engineer passionate about creating innovative solutions 
              and building exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 mohitkumarsahu3636@gmail.com</p>
              <p>📱 +91 810 222 6984</p>
              <p>📍 Jamshedpur , Jharkhand, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Mohit Kumar</span>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <ArrowUp className="h-5 w-5 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;