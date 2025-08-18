import { useEffect, useRef, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function useCounter(target: number, durationMs = 1500) {
    const [val, setVal] = useState(0)
    const start = useRef<number | null>(null)
    useEffect(() => {
        let raf = 0
        const tick = (t: number) => {
            if (!start.current) start.current = t
            const p = Math.min(1, (t - start.current) / durationMs)
            setVal(Math.round(target * p))
            if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [target, durationMs])
    return val
}

export function About() {
    const years = useCounter(5)
    const projects = useCounter(12)
    const tech = useCounter(20)
    return (
        <section id="about" className="container py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl font-semibold">About</h2>
                    <p className="mt-4 text-neutral-300">
                        Full-stack developer with 5+ years of experience building robust web applications in React, Laravel, and Python, and managing cloud-based deployments (Azure). Committed to SOLID, TDD, and clean code, with hands-on IoT integrations and DevOps.
                    </p>
                    <Separator />
                    <div className="mt-6 grid grid-cols-3 gap-5 text-center">
                        <Card className='rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm shadow-sm p-5 text-white'>
                            <CardHeader>
                                <CardTitle className='text-3xl font-bold'>{years}+</CardTitle>
                                <CardDescription className='text-xs text-neutral-400'>Years</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className='rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm shadow-sm p-5 text-white'>
                            <CardHeader>
                                <CardTitle className='text-3xl font-bold'>{projects}+</CardTitle>
                                <CardDescription className='text-xs text-neutral-400'>Projects</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className='rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm shadow-sm p-5 text-white'>
                            <CardHeader>
                                <CardTitle className='text-3xl font-bold'>{tech}+</CardTitle>
                                <CardDescription className='text-xs text-neutral-400'>Technologies</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div className="card p-6">
                    <h3 className="font-medium">Tech Stack Highlights</h3>
                    <p className="mt-2 text-sm text-neutral-300">React, TypeScript, Vite, Tailwind, shadcn/ui • Laravel, Python • Azure, Docker • CI/CD (Azure DevOps) • MQTT • OpenAI integration</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Laravel', 'Python', 'Azure', 'Docker', 'MQTT', 'OpenAI'].map(t => (
                            <span key={t} className="badge">{t}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
