import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Linkedin } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Insights', href: '#insights' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Project Files', href: '#project-files' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-gradient"
          aria-label="Ansh Thakur - Home"
        >
          AT.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="nav-link text-sm"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 ml-4"
          >
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-teal-700 transition-colors p-2 rounded-lg hover:bg-teal-50" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.gitlab} target="_blank" rel="noreferrer" className="btn-primary text-sm px-5 py-2" aria-label="Project Files on GitLab">
              <Globe size={16} />
              Project Files
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 py-6"
          >
            <div className="container flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-700 hover:text-teal-700 transition-colors px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center" aria-label="LinkedIn">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href={portfolioData.gitlab} target="_blank" rel="noreferrer" className="btn-primary flex-1 justify-center" aria-label="Project Files">
                  <Globe size={18} />
                  Project Files
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
