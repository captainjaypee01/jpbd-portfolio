import { skills } from '@/data/skills'
import { useMemo, useState } from 'react'
import { Progress } from '@/components/ui/progress'

const cats = ['Frontend', 'Backend & API', 'Cloud & Infrastructure', 'DevOps & Tools', 'AI & Data'] as const

type Cat = typeof cats[number]

export function Skills() {
    const [active, setActive] = useState<Cat>('Frontend')
    const filtered = useMemo(() => skills.filter(s => s.category === active), [active])
    return (
        <section id="skills" className="container py-20">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-2xl font-semibold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {(cats as readonly string[]).map(c => (
                        <button key={c} onClick={() => setActive(c as Cat)} className={`badge ${active === c ? 'bg-primary-600/20 text-primary-200 border-primary-600/40' : 'hover:bg-neutral-700/60'}`}>{c}</button>
                    ))}
                </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map(s => (
                    <div key={s.name} className="card p-5">
                        <div className="flex items-center justify-between">
                            <div className="font-medium">{s.name}</div>
                            <div className="text-xs text-neutral-400">{s.level ?? 0}%</div>
                        </div>
                        <div className="mt-3 bg-black"><Progress value={s.level ?? 0} className=''/></div>
                    </div>
                ))}
            </div>
        </section>
    )
}