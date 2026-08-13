import { motion } from 'framer-motion';
import { Mail, FileText, ChevronDown, Globe, BarChart3, Database, TrendingUp } from 'lucide-react';
import { Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f4f7f5_42%,#ecfdf5_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,#0f766e_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="container relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Entry-Level Data Analyst Opportunities
          </span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight mb-5 leading-tight"
          >
            ANSH THAKUR
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-teal-800 mb-6"
          >
            ENTRY-LEVEL DATA ANALYST
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-700 mb-4 font-semibold"
          >
            Python &nbsp;|&nbsp; SQL &nbsp;|&nbsp; Power BI &nbsp;|&nbsp; Excel
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              <FileText size={18} />
              DOWNLOAD RESUME
            </motion.a>
            <motion.a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LINKEDIN
            </motion.a>
            <motion.a
              href={portfolioData.gitlab}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary"
            >
              <Globe size={18} />
              VIEW PROJECT FILES
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center lg:justify-start gap-4"
          >
            {[
              { icon: Globe, href: portfolioData.portfolio, label: 'Portfolio' },
              { icon: Linkedin, href: portfolioData.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' }
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-slate-500 hover:text-teal-700 transition-colors p-3 bg-white/85 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
          aria-label="Portfolio analytics summary"
        >
          <div className="rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Portfolio Overview</p>
                <p className="text-sm text-slate-500">Verified analytics projects and business findings</p>
              </div>
              <BarChart3 size={24} className="text-teal-700" />
            </div>
            <div className="grid grid-cols-2 gap-px bg-slate-200">
              {[
                ['7,991', 'Orders analyzed'],
                ['47', 'SKUs'],
                ['35K+', 'Ride records'],
                ['54.8%', 'Airport revenue']
              ].map(([value, label]) => (
                <div key={label} className="bg-white p-5">
                  <p className="text-3xl font-extrabold text-slate-950">{value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-teal-50 border border-teal-100 p-4">
                <Database size={20} className="text-teal-700 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">Python, SQL, Excel/VBA, Power BI, and KPI reporting presented as recruiter-ready case studies.</p>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-100 p-4">
                <TrendingUp size={20} className="text-amber-700 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">Project files are available through the Google Drive archive linked across the portfolio.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-slate-300"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
