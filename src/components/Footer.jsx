import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin, Phone, Sparkles, Code2 } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    },
    // {
    //   icon: Mail,
    //   href: `mailto:${personalInfo.email}`,
    //   label: 'Email',
    //   gradient: 'from-emerald-600 to-teal-700'
    // }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-rose-500/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rose-400/20 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-violet-300 font-medium">{personalInfo.title}</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed">
                {personalInfo.tagline}
              </p>

              {/* Contact Info Cards */}
              {/* <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-hover">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <Mail size={18} className="text-white" />
                    </div>
                    <a href={`mailto:${personalInfo.email}`} className="text-white font-medium hover:text-emerald-300 transition-colors duration-300">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-hover">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Phone size={18} className="text-white" />
                    </div>
                    <a href={`tel:${personalInfo.phone}`} className="text-white font-medium hover:text-blue-300 transition-colors duration-300">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-hover">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <span className="text-white font-medium">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center space-x-2">
                <Code2 size={20} className="text-violet-400" />
                <span>Quick Links</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-slate-300 hover:text-white font-medium transition-all duration-300 
                             p-3 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20 
                             cursor-hover group"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-rose-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      <span>{link.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links & Stats */}
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center space-x-2">
                <Heart size={20} className="text-rose-400" />
                <span>Connect With Me</span>
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-hover">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <span className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">
                            {social.label}
                          </span>
                          <p className="text-slate-400 text-sm">Follow me for updates</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Mini Stats */}
              {/* <div className="bg-gradient-to-r from-violet-600/30 to-rose-600/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h5 className="text-white font-bold mb-4 text-center">Quick Stats</h5>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { number: "5+", label: "Years" },
                    { number: "25+", label: "Projects" },
                    { number: "98%", label: "Success" },
                    { number: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-black text-white">{stat.number}</div>
                      <div className="text-violet-200 text-xs font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-slate-400 text-sm">
                  © {currentYear} {personalInfo.name}. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-rose-400 fill-current animate-pulse" />
                <span>using React, Three.js & GSAP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;