import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { TrendingUp, Database, FileText, BarChart3, Target, Zap } from 'lucide-react';

const KeyInsights = () => {
  const icons = [TrendingUp, Database, FileText, BarChart3, Target, Zap];

  return (
    <section id="insights" className="section-padding bg-slate-100">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Key <span className="text-gradient">Insights</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            Quantified results from real-world analytics projects demonstrating measurable business impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {portfolioData.keyInsights.map((insight, idx) => (
            (() => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={insight.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="kpi-card group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-100 group-hover:scale-105 transition-all duration-300">
                    <Icon size={28} className="text-teal-700" />
                  </div>
                  <div className="kpi-value text-teal-800">{insight.value}</div>
                  <div className="kpi-label">{insight.label}</div>
                </motion.div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInsights;
