import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowDownRight, FolderOpen } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Real-world applications of data analytics, SQL, and business intelligence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              id={project.id}
              className="group project-card scroll-mt-28"
            >
              {/* Image Section */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} dashboard screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover project-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-slate-950 mb-4 group-hover:text-teal-800 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.shortProblem}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-stone-50 rounded-lg border border-slate-100 p-4">
                        <p className="text-2xl md:text-3xl font-bold text-teal-800">{metric.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Methodology</h4>
                  <ul className="space-y-2">
                    {project.methodology.map((method, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Important Findings</h4>
                  <ul className="space-y-2">
                    {project.findings.map((finding, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {project.recommendations.map((recommendation, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-6 border-t border-slate-200 mt-auto">
                  <motion.a
                    href={`#${project.id}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-secondary py-2.5 text-sm flex-1"
                  >
                    <ArrowDownRight size={18} />
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary py-2.5 text-sm flex-1"
                  >
                    <FolderOpen size={18} />
                    View Project Files
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
