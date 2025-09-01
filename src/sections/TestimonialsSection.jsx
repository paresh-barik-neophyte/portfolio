import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, Heart, Users } from "lucide-react";
import { testimonials } from "../data/mock";

const TestimonialsSection = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const gridRef = useRef();

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
      ".testimonial-card",
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          amount: 0.6,
          from: "random",
        },
      },
      "-=0.5"
    );
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? "text-amber-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-900/20 dark:via-slate-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Heart size={18} className="text-pink-300" />
            <span>Wall of Love</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-tight mb-6">
            What My Clients &
            <span className="text-gradient block">Colleagues Say</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's what my clients, colleagues, and team members have shared
            about their experience working with me. Their trust and satisfaction
            motivate me to continue delivering exceptional results.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 sm:space-x-12 mt-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-black text-gradient">5.0</div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <Users size={32} className="text-emerald-600 mx-auto mb-2" />
              <div className="text-3xl font-black text-gradient">25+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card group relative ${
                index % 3 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 hover:-translate-y-2 cursor-hover h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote size={24} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-slate-700 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-6 rounded-2xl shadow-lg">
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Want to join this wall of love?
              </h3>
              <p className="text-emerald-100">
                Let's work together on your next project
              </p>
            </div>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors duration-300 cursor-hover whitespace-nowrap"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
