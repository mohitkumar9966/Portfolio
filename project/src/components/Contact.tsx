import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a friendly chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just connecting with fellow developers. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <p className="text-blue-400">mohitkumarsahu3636@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <p className="text-blue-400">+91 810 222 6984</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Location</p>
                  <p className="text-blue-400">Jamshedpur , Jharkhand, India</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/mohitkumar9966" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-xl transition-colors duration-300 group">
                  <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/mohit-kumar3636/" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-xl transition-colors duration-300 group">
                  <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;