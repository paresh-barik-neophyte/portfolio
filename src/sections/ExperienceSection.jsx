import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Calendar, MapPin, Building } from 'lucide-react';
import { experience } from '../data/mock';

const ExperienceSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const timelineRef = useRef();

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
    .fromTo(".timeline-item",
      { opacity: 0, x: -100, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.3 },
      "-=0.5"
    );

  }, []);

  const gradients = [
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600', 
    'from-purple-500 to-pink-600'
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Building size={18} />
            <span>Career Journey</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Professional
            <span className="text-gradient block">Experience</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My career progression through different roles, responsibilities, and achievements 
            in the frontend development landscape, building impactful solutions.
          </p>
        </div>

        <div ref={timelineRef} className="space-y-8">
          {experience.map((job, index) => (
            <div key={job.id} className="timeline-item">
              <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 group">
                
                {/* Header Section */}
                <div className={`bg-gradient-to-r ${gradients[index]} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <div className="w-full h-full bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black mb-2">
                          {job.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 text-lg opacity-90">
                          <div className="flex items-center space-x-2">
                            <Building size={20} />
                            <span className="font-semibold">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={20} />
                            <span className="font-medium">{job.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                          <span className="text-2xl font-black text-white">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center space-x-2">
                      <CheckCircle size={24} className="text-emerald-500" />
                      <span>Key Achievements</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="group/achievement">
                          <div className="bg-slate-50 dark:bg-slate-700 rounded-xl p-6 h-full border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors duration-300">
                            <div className="flex items-start space-x-4">
                              <div className={`w-8 h-8 bg-gradient-to-r ${gradients[index]} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                                <CheckCircle size={16} className="text-white" />
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                {achievement}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`h-1 bg-gradient-to-r ${gradients[index]}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-8">
              Career Highlights
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5+", label: "Years Experience", gradient: "from-blue-400 to-indigo-500" },
                { number: "3", label: "Companies", gradient: "from-emerald-400 to-teal-500" },
                { number: "25+", label: "Projects Led", gradient: "from-purple-400 to-pink-500" },
                { number: "15+", label: "Team Members Mentored", gradient: "from-amber-400 to-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;