import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function FooterContact() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Let’s build something magical</h3>
          <p className="mt-2 max-w-2xl text-slate-600">Available for freelance and collaborations. I’m excited to hear about your ideas.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50">
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 hover:bg-slate-50">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
        <div className="mt-10 flex items-center justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Magic Portfolio</span>
          <a href="#home" className="hover:text-slate-700">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
