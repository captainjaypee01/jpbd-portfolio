import { experience } from '@/data/experience'
import { motion } from 'motion/react'

export function Experience() {
    return (
        <section id="experience" className="container py-20">
            <h2 className="text-2xl font-semibold mb-8">Experience</h2>
            <div className="relative">
                <div className="absolute left-[10px] top-0 bottom-0 w-px bg-neutral-800" aria-hidden />
                <ul className="space-y-6">
                    {experience.map((e, idx) => (
                        <motion.li
                            key={e.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative pl-10"
                        >
                            <div className="absolute left-0 top-2 size-2 rounded-full bg-primary-600" />
                            <div className="card p-5">
                                <div className="flex flex-wrap items-baseline justify-between gap-3">
                                    <h3 className="text-lg font-semibold">{e.role} — {e.company}</h3>
                                    <span className="text-sm text-neutral-400">{e.start} — {e.end}</span>
                                </div>
                                <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300">
                                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}