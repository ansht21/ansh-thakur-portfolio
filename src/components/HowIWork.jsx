import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Database, Filter, Code, Search, LayoutDashboard, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const stepIcons = {
  'DATA': Database,
  'CLEANING & VALIDATION': Filter,
  'SQL / PYTHON': Code,
  'EDA': Search,
  'DASHBOARDS': LayoutDashboard,
  'BUSINESS INSIGHTS': Lightbulb,
  'RECOMMENDATIONS': CheckCircle
};

const HowIWork = () => {
  return (
    <section id="workflow" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            How I <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            A structured, analytical workflow that transforms raw data into actionable business decisions.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-200 via-teal-600 to-teal-200 -translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {portfolioData.workflow.map((step, idx) => {
              const Icon = stepIcons[step.step] || Database;
              const isLast = idx === portfolioData.workflow.length - 1;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-start gap-8 lg:gap-12`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'pr-8 lg:pr-12 text-right' : 'pl-8 lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -4, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
                      className="card p-6 md:p-8 group relative z-10"
                    >
                      <div className="flex items-center gap-4 mb-4 justify-end">
                        <span className="badge badge-blue text-sm px-4 py-1.5">
                          Step {idx + 1}
                        </span>
                        {!isLast && (
                          <motion.div
                            animate={{ rotate: [0, 90, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className="text-teal-500"
                          >
                            <ArrowRight size={20} />
                          </motion.div>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.step}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:flex lg:w-12 lg:items-center lg:justify-center relative z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-2xl bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-100 group-hover:border-teal-300 transition-all duration-300"
                    >
                      <Icon size={28} className="text-teal-700" />
                    </motion.div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden flex w-12 items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center border border-teal-100">
                      <Icon size={24} className="text-teal-700" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile connecting dots */}
        <div className="lg:hidden mt-8 space-y-4">
          {portfolioData.workflow.map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-teal-500" />
              {idx < portfolioData.workflow.length - 1 && (
                <div className="w-px h-16 bg-gradient-to-b from-teal-200 to-teal-600" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;