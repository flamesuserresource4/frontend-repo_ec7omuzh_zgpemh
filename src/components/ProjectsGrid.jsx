import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A sleek analytics dashboard with motion-first interactions.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
  {
    title: '3D Product Teaser',
    desc: 'Interactive product hero integrating live 3D elements.',
    tags: ['Spline', 'WebGL', 'UX'],
    link: '#',
  },
  {
    title: 'Magic UI Kit',
    desc: 'A playful component set with glass, gradients, and depth.',
    tags: ['Design', 'Components', 'Accessibility'],
    link: '#',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600">A snapshot of things I’ve been building recently.</p>
          </div>
          <div className="hidden md:flex items-center gap-1 text-amber-500">
            <Star className="h-5 w-5 fill-amber-400/20" />
            <Star className="h-5 w-5 fill-amber-400/20" />
            <Star className="h-5 w-5 fill-amber-400/20" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-sky-100 to-violet-100 group-hover:from-indigo-200 group-hover:to-violet-200 transition-colors" />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
                </div>
                <p className="mt-1 text-slate-600 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />
    </section>
  );
}
