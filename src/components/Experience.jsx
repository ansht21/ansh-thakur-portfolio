import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-slate-200"
            >
              <div className="absolute left-[-17px] top-0 bg-teal-700 p-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                <Briefcase size={16} className="text-white" />
              </div>

              <div className="card p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <div className="text-teal-700 font-semibold">{exp.company}</div>
                  </div>
                  <span className="px-4 py-1 bg-teal-50 border border-teal-100 text-teal-800 rounded-full text-sm font-medium w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-4 text-slate-600 leading-relaxed">
                      <CheckCircle2 size={18} className="text-teal-500 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;