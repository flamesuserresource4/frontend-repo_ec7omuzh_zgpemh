import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-sm">
          <a href="#home" className="flex items-center gap-2 px-4 py-3">
            <Rocket className="h-5 w-5 text-indigo-500" />
            <span className="font-semibold text-slate-800">Magic Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-1 pr-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg">
              <Github className="h-5 w-5 text-slate-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg">
              <Linkedin className="h-5 w-5 text-slate-700" />
            </a>
            <a href="#contact" className="p-2 hover:bg-slate-100 rounded-lg">
              <Mail className="h-5 w-5 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
