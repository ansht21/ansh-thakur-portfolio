import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Award, BookOpen, LayoutDashboard, Database, CheckCircle, Sparkles } from 'lucide-react';

const About = () => {
  const iconMap = {
    "Information Technology background with data analytics specialization": LayoutDashboard,
    "Data Analytics internship at Unified Mentor Pvt. Ltd.": Award,
    "Python, SQL, Power BI, Advanced Excel proficiency": Database,
    "Data cleaning, EDA, KPI reporting, dashboard development": BookOpen,
    "Strong analytical and problem-solving ability": Sparkles
  };

  return (
    <section id="about" className="section-padding bg-stone-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-3/5"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-medium mb-4">
                About Me
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-title"
              >
                Transforming Data into <span className="text-gradient">Business Impact</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
            >
              {portfolioData.about.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {portfolioData.about.highlights.map((highlight, i) => {
                const Icon = iconMap[highlight] || CheckCircle;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-xl card-hover"
                  >
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-teal-700" />
                    </div>
                    <p className="text-slate-700 font-medium">{highlight}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230f766e%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
                <div className="relative z-10 text-center p-8">
                  <Database size={64} className="text-teal-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-lg">Data Analytics<br/>Visualization</p>
                </div>
              </div>
            </div>
            
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xl w-64"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">2</p>
                  <p className="text-sm text-slate-500">Major Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">3</p>
                  <p className="text-sm text-slate-500">Certifications</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;