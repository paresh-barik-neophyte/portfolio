import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Code2, Layers, Globe, Users2 } from 'lucide-react';
import { expertise } from '../data/mock';

const SkillsSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(".expertise-section",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 },
      "-=0.5"
    );

  }, []);

  const expertiseSections = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      items: expertise.languages,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Layers,
      items: expertise.frameworks,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'webDevelopment',
      title: 'Web Development & Tools',
      icon: Globe,
      items: expertise.webDevelopment,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      id: 'leadership',
      title: 'Leadership & Management',
      icon: Users2,
      items: expertise.leadership,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-900/20 dark:via-slate-900 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Code2 size={18} />
            <span>Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Skills & 
            <span className="text-gradient block">Expertise</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies, frameworks, and leadership skills 
            to build scalable, performant applications and lead successful development teams.
          </p>
        </div>

        {/* Expertise Sections */}
        <div className="space-y-8">
          {expertiseSections.map((section, index) => {
            const IconComponent = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="expertise-section">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className={`w-full text-left bg-white dark:bg-slate-800 p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group ${isActive ? 'rounded-t-2xl' : 'rounded-2xl'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                          {section.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">
                          {section.items.length} technologies
                        </p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r ${section.gradient} text-white transition-transform duration-300 ${
                      isActive ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </button>

                {/* Static Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${ 
                  isActive ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                  <div className="bg-white dark:bg-slate-800 rounded-b-2xl p-6 lg:p-8 border-x border-b border-slate-200 dark:border-slate-700">
                    <div className="flex flex-wrap gap-4">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="inline-flex items-center space-x-3 bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg">
                          <div className={`w-2.5 h-2.5 bg-gradient-to-r ${section.gradient} rounded-full`}></div>
                          <span className="text-slate-800 dark:text-slate-200 font-medium text-base">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Technical Proficiency
            </h3>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Years of experience and dedication to continuous learning and improvement
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Coding", icon: "💻" },
              { number: "25+", label: "Projects Built", icon: "🚀" },
              { number: "15+", label: "Technologies", icon: "⚡" },
              { number: "8+", label: "Frameworks", icon: "🛠️" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-indigo-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;