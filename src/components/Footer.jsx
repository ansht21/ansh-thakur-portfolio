import { portfolioData } from '../data/portfolio';
import { FolderOpen } from 'lucide-react';
import { Linkedin } from './Icons';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold text-gradient mb-2">© Ansh Thakur</div>
          <p className="text-slate-600 text-sm font-medium mb-2">
            Data Analyst | Python | SQL | Power BI | Excel
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
           <a href="#projects" className="text-slate-500 hover:text-teal-700 transition-colors text-sm font-medium">Projects</a>
           <a href="#resume" className="text-slate-500 hover:text-teal-700 transition-colors text-sm font-medium">Resume</a>
           <a href="#contact" className="text-slate-500 hover:text-teal-700 transition-colors text-sm font-medium">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-teal-700 transition-colors">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={portfolioData.gitlab} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-teal-700 transition-colors">
            <FolderOpen size={16} />
            Project Files
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
