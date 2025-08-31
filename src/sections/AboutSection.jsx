import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Users, Zap, Lightbulb, Rocket, Trophy } from 'lucide-react';
import { whyHireMe } from '../data/mock';

const AboutSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const cardsRef = useRef();

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
    .fromTo(".about-card",
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1, 
        ease: "back.out(1.7)", 
        stagger: {
          amount: 0.6,
          from: "start"
        }
      },
      "-=0.5"
    );

  }, []);

  const iconMap = {
    Code2: Code2,
    Users: Users, 
    Zap: Zap,
    Lightbulb: Lightbulb
  };

  const gradients = [
    'from-blue-600 to-purple-600',
    'from-emerald-600 to-teal-600', 
    'from-amber-600 to-orange-600',
    'from-purple-600 to-pink-600'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-purple-50 via-white to-emerald-50 dark:from-purple-900/20 dark:via-slate-900 dark:to-emerald-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Rocket size={18} />
            <span>About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Why Choose Me for
            <span className="text-gradient block">Your Next Project?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I bring a unique combination of technical expertise, leadership experience, and passion for creating 
            exceptional digital experiences that drive business success and exceed expectations.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {whyHireMe.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={index}
                className="about-card group relative"
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-4 cursor-hover h-full overflow-hidden">
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          {IconComponent && (
                            <IconComponent 
                              size={28} 
                              className="text-white" 
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <div className={`w-32 h-32 bg-gradient-to-br ${gradients[index]} rounded-full blur-2xl`}></div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className={`w-24 h-24 bg-gradient-to-tl ${gradients[index]} rounded-full blur-xl`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Trophy size={16} />
              <span>Achievements</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Track Record of Success
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Numbers that speak for themselves - consistent delivery and exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience", icon: "🚀" },
              { number: "25+", label: "Projects Delivered", icon: "💼" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "15+", label: "Team Members Led", icon: "👥" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
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

export default AboutSection;