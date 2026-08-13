import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500">
                <GraduationCap size={120} className="text-teal-200" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-50 p-3 rounded-2xl text-teal-700">
                  <GraduationCap size={28} />
                </div>
                <div className="text-sm font-bold text-teal-700 uppercase tracking-wider">Education</div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{edu.degree}</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} className="text-teal-700" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                {edu.university && (
                   <div className="text-sm text-slate-500 ml-7">{edu.university}</div>
                )}
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar size={18} className="text-teal-700" />
                  <span>{edu.period}</span>
                </div>
                {edu.result && (
                  <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Result</span>
                    <span className="text-xl font-bold text-gradient">{edu.result}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;