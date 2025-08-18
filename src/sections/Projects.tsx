import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { useMemo, useState } from 'react'

const tags = Array.from(new Set(projects.flatMap(p => p.tech)))

export function Projects() {
    const [active, setActive] = useState<string>('All')
    const filtered = useMemo(() => active === 'All' ? projects : projects.filter(p => p.tech.includes(active)), [active])
    return (
        <section id="projects" className="container py-20">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    <button className={`badge ${active === 'All' ? 'bg-primary-600/20 text-primary-200 border-primary-600/40' : ''}`} onClick={() => setActive('All')}>All</button>
                    {tags.map(t => (
                        <button key={t} className={`badge ${active === t ? 'bg-primary-600/20 text-primary-200 border-primary-600/40' : ''}`} onClick={() => setActive(t)}>{t}</button>
                    ))}
                </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                    <motion.article
                        key={p.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ delay: i * 0.05 }}
                        className="card overflow-hidden"
                    >
                        <div className="aspect-[16/9] bg-neutral-900/70 flex items-center justify-center text-neutral-500">Screenshot / Mockup</div>
                        <div className="p-5">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            {p.subtitle && <p className="text-sm text-neutral-400 mt-0.5">{p.subtitle}</p>}
                            <p className="mt-2 text-neutral-300 text-sm">{p.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map(t => <Badge key={t}>{t}</Badge>)}
                            </div>
                            {p.links && (
                                <div className="mt-4 flex gap-3">
                                    {p.links.demo && <a className="btn btn-primary" href={p.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                                    {p.links.repo && <a className="btn btn-outline" href={p.links.repo} target="_blank" rel="noreferrer">GitHub</a>}
                                </div>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
