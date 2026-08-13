import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FileText, Download, ExternalLink, Shield } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${portfolioData.resumeFile}`;
    link.download = portfolioData.resumeFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section-padding bg-slate-100">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              <span className="text-gradient">Resume</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle"
            >
              Download my latest resume optimized for Data Analyst roles. It includes LinkedIn, portfolio, analytics experience, verified projects, education, and certifications.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-8 bg-teal-50 rounded-2xl flex items-center justify-center">
              <FileText size={48} className="text-teal-700" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ansh Thakur — Data Analyst Resume
            </h3>

            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Entry-level Data Analyst with hands-on experience in Python, SQL, Power BI, and Advanced Excel. 
              Two end-to-end analytics projects with quantified business impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full sm:w-auto"
              >
                <Download size={20} />
                Download Resume (PDF)
              </motion.button>

              <motion.a
                href={portfolioData.gitlab}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary w-full sm:w-auto"
              >
                <ExternalLink size={20} />
                View Project Files
              </motion.a>
            </div>

            <div className="divider" />

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-teal-700">2</div>
                <div className="text-sm text-slate-600">Major Projects</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600">3</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">1</div>
                <div className="text-sm text-slate-600">Internship</div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 text-slate-500 text-sm">
              <Shield size={16} className="text-green-600" />
              <span>Verified information only — no inflated metrics</span>
            </div>
          </motion.div>

          {/* Resume Preview / Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Resume Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Technical Skills", items: ["Python (Pandas, NumPy)", "SQL (MySQL, PostgreSQL)", "Power BI (DAX, Power Query)", "Advanced Excel & VBA"] },
                { title: "Core Competencies", items: ["Data Cleaning & EDA", "KPI Reporting", "Dashboard Development", "Business Analysis"] },
                { title: "Projects", items: ["Supply Chain Optimization", "Ride Demand Forecasting", "7,991 orders analyzed", "35,000+ ride records"] },
                { title: "Experience", items: ["Data Analytics Intern", "Unified Mentor Pvt. Ltd.", "Sep – Dec 2025", "End-to-end analytics workflow"] }
              ].map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card p-6"
                >
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
