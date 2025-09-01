import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data/mock";

const ContactSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();
  const infoRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      [formRef.current, infoRef.current],
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-rose-50 via-white to-violet-50 dark:from-rose-900/20 dark:via-slate-900 dark:to-violet-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-rose-500/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-violet-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-400/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-rose-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <MessageSquare size={18} />
            <span>Let's Connect</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Let's Work
            <span className="text-gradient block">Together</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you and explore how we can create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <div className="w-full h-full bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <Sparkles size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Start Your Project</h3>
                  </div>
                  <p className="text-violet-100">
                    Ready to bring your ideas to life? Let's discuss your next
                    project.
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-slate-900 dark:text-white mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 
                               bg-white dark:bg-slate-900 text-slate-900 dark:text-white
                               focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 
                               transition-all duration-300 cursor-hover font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-slate-900 dark:text-white mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 
                               bg-white dark:bg-slate-900 text-slate-900 dark:text-white
                               focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 
                               transition-all duration-300 cursor-hover font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-slate-900 dark:text-white mb-3"
                  >
                    Project Type *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 
                             bg-white dark:bg-slate-900 text-slate-900 dark:text-white
                             focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 
                             transition-all duration-300 cursor-hover font-medium"
                    placeholder="Web Development, Mobile App, Consultation..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-slate-900 dark:text-white mb-3"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-600 
                             bg-white dark:bg-slate-900 text-slate-900 dark:text-white
                             focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 
                             transition-all duration-300 cursor-hover resize-none font-medium"
                    placeholder="Tell me about your project goals, timeline, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-rose-600 hover:from-violet-700 hover:to-rose-700 text-white 
                           px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 disabled:hover:scale-100
                           transition-all duration-300 cursor-hover flex items-center justify-center space-x-3
                           disabled:opacity-70 shadow-lg hover:shadow-2xl hover:shadow-violet-500/25"
                >
                  <Send
                    size={20}
                    className={isSubmitting ? "animate-pulse" : ""}
                  />
                  <span>
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8">
                Get In Touch
              </h3>

              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 cursor-hover">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                          {info.label}
                        </p>
                        {info.href.startsWith("#") ? (
                          <p className="text-xl font-bold text-slate-900 dark:text-white">
                            {info.value}
                          </p>
                        ) : (
                          <a
                            href={info.href}
                            className="text-xl font-bold text-slate-900 dark:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-rose-600 hover:bg-clip-text transition-all duration-300 cursor-hover"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 cursor-hover">
                      <div className="flex items-center justify-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <social.icon size={20} className="text-white" />
                        </div>
                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-300">
                          {social.label}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-rose-600 rounded-3xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                Why Work With Me?
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "25+", label: "Projects Done" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-black text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-violet-100 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
