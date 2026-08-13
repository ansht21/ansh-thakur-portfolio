import { motion } from 'framer-motion';
import { Mail, MapPin, BriefcaseBusiness } from 'lucide-react';
import { Linkedin } from './Icons';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Open to entry-level Data Analyst, BI, Reporting, and Analytics opportunities.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            className="max-w-3xl mx-auto card p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="relative z-10 mb-8">
            <p className="text-2xl font-bold text-slate-900">{portfolioData.name}</p>
            <p className="text-teal-800 font-semibold">{portfolioData.title}</p>
          </div>

          <motion.a
            href={`mailto:${portfolioData.email}`}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(37,99,235,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-8 py-4 text-base md:text-lg font-bold inline-flex items-center gap-3 mb-10 transition-all duration-300 relative z-10"
          >
            <Mail size={22} />
            {portfolioData.email}
          </motion.a>

          <div className="w-full border-t border-slate-200 my-6 relative z-10" />

          {/* Social and Info Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-4 relative z-10">
            <motion.a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex items-center gap-3 px-5 py-3 card rounded-2xl border border-slate-200 text-slate-600 hover:text-teal-700 hover:border-teal-300 transition-all duration-300"
            >
              <Linkedin size={20} />
              <span className="text-sm font-semibold">LinkedIn</span>
            </motion.a>

            <div className="flex items-center gap-3 px-5 py-3 card rounded-2xl border border-slate-200 text-slate-600">
              <MapPin size={20} className="text-teal-700" />
              <span className="text-sm font-semibold">Chandrapur, Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-3 card rounded-2xl border border-slate-200 text-slate-600">
              <BriefcaseBusiness size={20} className="text-teal-700" />
              <span className="text-sm font-semibold">Entry-Level Analyst Roles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
