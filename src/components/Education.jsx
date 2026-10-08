import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#a5d8ff] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div data-aos="fade-up" className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Education
          </h2>
          <p className="text-slate-700 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Academic foundation and achievements that shaped my engineering journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div data-aos="fade-up" className="bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl p-8">
            <p className="text-slate-900/60 text-xs font-bold uppercase tracking-widest mb-3">Degree</p>
            <h3 className="text-slate-900 text-2xl font-black mb-2">{education.degree}</h3>
            <p className="text-slate-700 font-semibold mb-4">{education.institution}</p>
            <div className="text-slate-900/90 text-sm space-y-2">
              <p><span className="font-semibold">CGPA:</span> {education.cgpa}</p>
              <p><span className="font-semibold">Graduation:</span> {education.graduation}</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="bg-white/45 backdrop-blur-md border border-white/60 rounded-3xl p-8">
            <p className="text-slate-900/60 text-xs font-bold uppercase tracking-widest mb-3">Academic Highlights</p>
            <ul className="text-slate-900/90 text-sm font-medium space-y-3 list-disc pl-5">
              <li>{education.twelfth}</li>
              <li>{education.tenth}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
