import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { GITHUB, LINKEDIN } from '@/lib/utils'
import { Github, Linkedin, Menu, X } from 'lucide-react'

const nav = [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'iot', label: 'IoT Demo' },
    { id: 'contact', label: 'Contact' }
]

export function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
            <div className="container flex h-16 items-center justify-between">
                <a href="#hero" className="font-semibold tracking-tight">JP Dala</a>
                <nav className="hidden md:flex items-center gap-6">
                    {nav.map(n => (
                        <a key={n.id} href={`#${n.id}`} className="text-neutral-300 hover:text-white">{n.label}</a>
                    ))}
                </nav>
                <div className="hidden md:flex items-center gap-2">
                    <a href={GITHUB} target="_blank" rel="noreferrer" className="btn btn-outline" aria-label="GitHub"><Github className="size-4" />GitHub</a>
                    <a href={LINKEDIN} target="_blank" rel="noreferrer" className="btn btn-primary" aria-label="LinkedIn"><Linkedin className="size-4" />LinkedIn</a>
                </div>
                <Button aria-label="Menu" className="md:hidden" variant="ghost" onClick={() => setOpen(v => !v)}>
                    {open ? <X /> : <Menu />}
                </Button>
            </div>
            {open && (
                <div className="md:hidden border-t border-neutral-900">
                    <div className="container py-3 flex flex-col gap-3">
                        {nav.map(n => (
                            <a key={n.id} href={`#${n.id}`} className="text-neutral-300" onClick={() => setOpen(false)}>{n.label}</a>
                        ))}
                        <div className="flex gap-2 pt-2">
                            <a className="btn btn-outline" href={GITHUB} target="_blank" rel="noreferrer"><Github className="size-4" />GitHub</a>
                            <a className="btn btn-primary" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin className="size-4" />LinkedIn</a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
