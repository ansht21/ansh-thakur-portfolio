import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FolderOpen, FileCode, Database, BarChart3, Download, ExternalLink, ArrowRight, Shield } from 'lucide-react';

const ProjectFiles = () => {
  const fileTypes = [
    { icon: FileCode, label: 'Python Notebooks', desc: 'Jupyter notebooks with full analysis pipelines', count: '2 projects' },
    { icon: Database, label: 'SQL Scripts', desc: 'Cleaning, transformation, and analysis queries', count: 'Multiple files' },
    { icon: BarChart3, label: 'Dashboards', desc: 'Power BI .pbix and Excel .xlsm files', count: '3+ dashboards' },
    { icon: Download, label: 'Datasets', desc: 'Raw and cleaned CSV/Excel data files', count: 'Source + processed' },
    { icon: FileCode, label: 'VBA Macros', desc: 'Automated Excel dashboard functionality', count: 'Supply Chain project' },
    { icon: Shield, label: 'Documentation', desc: 'README files, methodology, and findings', count: 'Complete docs' }
  ];

  return (
    <section id="project-files" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            <span className="text-gradient">Project Files</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Browse the complete project archive including code, SQL scripts, datasets, notebooks, dashboards, screenshots, documentation, and resume.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 md:p-12 text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-teal-50 rounded-lg flex items-center justify-center">
            <FolderOpen size={40} className="text-teal-700" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            GitLab Project Repository
          </h3>

          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            All project source files — code, SQL scripts, datasets, notebooks, dashboards, screenshots, and documentation — are hosted in my GitLab data-analytics repository.
          </p>

          <motion.a
            href={portfolioData.gitlab}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-lg"
          >
            <FolderOpen size={24} />
            View Project Files on GitLab
            <ExternalLink size={20} />
          </motion.a>

          <p className="mt-6 text-sm text-slate-500 italic max-w-xl mx-auto">
            Browse the full data-analytics portfolio repository with reproducible analysis on GitLab.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">What's Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fileTypes.map((type, idx) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card p-6 group"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <type.icon size={24} className="text-teal-700" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{type.label}</h4>
                <p className="text-sm text-slate-600 mb-3">{type.desc}</p>
                <span className="text-xs text-slate-500 badge badge-blue">{type.count}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project-specific CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-8 text-center">Project-Specific Archives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6 border-l-4 border-teal-700"
              >
                <h4 className="font-semibold text-slate-900 mb-2">{project.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{project.shortProblem}</p>
                <motion.a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-900"
                >
                  View Files
                  <ArrowRight size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectFiles;
