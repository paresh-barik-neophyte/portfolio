import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Star, Zap } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectsSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const projectsRef = useRef();

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
    .fromTo(".project-card",
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.2 },
      "-=0.5"
    );

  }, []);

  const gradients = [
    'from-blue-500 via-purple-500 to-indigo-600',
    'from-emerald-500 via-teal-500 to-cyan-600',
    'from-orange-500 via-red-500 to-pink-600',
    'from-violet-500 via-purple-500 to-fuchsia-600'
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-br from-violet-50 via-white to-cyan-50 dark:from-violet-900/20 dark:via-slate-900 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Zap size={18} />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            Latest
            <span className="text-gradient block">Projects</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in modern web development, 
            user experience design, and technical innovation with cutting-edge technologies.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card group relative ${project.featured ? 'lg:col-span-1' : ''}`}
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:-translate-y-4 cursor-hover h-full">
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`bg-gradient-to-r ${gradients[index]} text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-bold shadow-lg`}>
                      <Star size={14} className="fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Project Image with Enhanced Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradients[index]} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Dynamic Background Shape */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-bl ${gradients[index]} rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700`}></div>
                  </div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="View live project"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-4 rounded-2xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label="View source code"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Technologies with Enhanced Styling */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${gradients[index]} text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Border */}
                <div className={`h-2 bg-gradient-to-r ${gradients[index]} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-violet-100 text-lg max-w-2xl mx-auto">
                Let's collaborate on your next project and create something that stands out in the digital landscape.
              </p>
            </div>
            
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-violet-50 hover:scale-105 transition-all duration-300 cursor-hover shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;