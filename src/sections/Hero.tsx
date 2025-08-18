import { Button } from '@/components/ui/button'
import { Github, Linkedin, Download } from 'lucide-react'
import { Typewriter } from '@/components/animations/Typewriter'
import { GITHUB, LINKEDIN } from '@/lib/utils'
import { motion } from 'motion/react'

export function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden">
            {/* background geometric glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-32 left-1/2 size-[52rem] -translate-x-1/2 rounded-full bg-primary-600/20 blur-3xl" />
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 md:py-28">
                <div>
                    <p className="text-sm text-neutral-400">Hello, I am</p>
                    <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight">John Paul Dala</h1>
                    <p className="mt-3 text-xl text-neutral-300">
                        <Typewriter text="Senior Software Engineer — Full-Stack & IoT" />
                    </p>
                    <p className="mt-5 text-neutral-300 max-w-prose">
                        Building robust web & IoT platforms with React, Laravel, and Python — and deploying securely to Azure with CI/CD.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="#projects" className="btn btn-primary"><span>View Projects</span></a>
                        <a href="/Resume.pdf" download className="btn btn-outline"><Download className="size-4" />Download Resume</a>
                        <a className="btn btn-outline" href={GITHUB} target="_blank" rel="noreferrer"><Github className="size-4" />GitHub</a>
                        <a className="btn btn-outline" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin className="size-4" />LinkedIn</a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        src="/headshot.JPG" alt="John Paul Dala headshot"
                        className="size-44 md:size-56 rounded-full ring-4 ring-neutral-800 object-cover floating shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}