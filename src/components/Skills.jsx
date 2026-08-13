import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Code2, Database, BarChart3, Settings, Layers } from 'lucide-react';

const Skills = () => {
  const iconMap = {
    "Languages": Code2,
    "Analytics": BarChart3,
    "Libraries": Layers,
    "BI / Tools": Database,
    "Development": Settings
  };

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Equipped with a diverse set of tools and technologies to handle the full data lifecycle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((category, idx) => {
            const Icon = iconMap[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal-50 p-3 rounded-2xl text-teal-700">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.02, backgroundColor: '#dbeafe' }}
                      className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-700 font-medium cursor-default transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;