import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Download, MessageCircle, Sparkles } from "lucide-react";
import ThreeScene from "../components/ThreeScene";
import { personalInfo } from "../data/mock";

const HeroSection = () => {
  const heroRef = useRef();

  useEffect(() => {
    // Enhanced GSAP animations for bold design
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    // Add floating animation to elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.3,
    });
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactNow = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-padding"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-animated opacity-20 z-0"></div>

      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-10 opacity-40">
        <ThreeScene />
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20 z-20"></div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className="lg:col-span-7 text-left -mt-0 lg:-mt-20 space-y-8">
            {/* Floating Badge */}
            <div className="floating-element inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              <span>Available for work</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              <span className="text-gradient block floating-element">
                {personalInfo.name.split(" ")[0]}
              </span>
              <span
                className="text-primary block floating-element"
                style={{ animationDelay: "0.2s" }}
              >
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            {/* Subtitle with enhanced styling */}
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary floating-element"
              style={{ animationDelay: "0.4s" }}
            >
              {personalInfo.title}
            </h2>

            {/* Description with rich styling */}
            <div
              className="floating-element space-y-4"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
                {personalInfo.tagline}
              </p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>5+ Years Experience</span>
                </span>
                <span>•</span>
                <span>25+ Projects Delivered</span>
                <span>•</span>
                <span>React & TypeScript Expert</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 floating-element"
              style={{ animationDelay: "0.8s" }}
            >
              <button
                onClick={handleContactNow}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <MessageCircle size={24} />
                  <span>Contact Now</span>
                </div>
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 cursor-hover"
              >
                <div className="relative flex items-center justify-center space-x-3">
                  <Download size={24} />
                  <span>Download Resume</span>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 pb-8 lg:pb-0 floating-element"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-gradient">5+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-gradient">25+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Projects
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-gradient">98%</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced 3D Scene area */}
          <div className="lg:col-span-5 relative h-96 hidden lg:block lg:h-screen items-center justify-center">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
              <ThreeScene />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 lg:bottom-24 hidden lg:block left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition-all duration-3000 cursor-hover animate-bounce group"
          aria-label="Scroll to next section"
        >
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-3 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
            <ArrowDown size={24} className="text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
