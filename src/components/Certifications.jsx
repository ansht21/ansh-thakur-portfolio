import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Verified <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="section-subtitle"
          >
            Professional simulations and technical courses that shaped my analytical skills.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="card p-6 flex flex-col justify-between relative overflow-hidden card-hover">
                {/* Background Pattern */}
                <div className="absolute -right-4 -bottom-4 text-teal-200/50 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <Award size={120} />
                </div>

                <div className="relative z-10">
                  <div className="bg-teal-50 p-3 rounded-2xl text-teal-700 mb-6 w-fit">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-teal-700 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-6">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-teal-700 font-bold text-sm group/btn"
                >
                  Verify Certificate
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;