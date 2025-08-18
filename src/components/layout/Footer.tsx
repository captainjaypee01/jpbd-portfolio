import { GITHUB, LINKEDIN } from '@/lib/utils'
export function Footer() {
    return (
        <footer className="border-t border-neutral-900">
            <div className="container py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} John Paul Dala. All rights reserved.</p>
                <p className="flex gap-4">
                    <a className="hover:text-neutral-200" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="hover:text-neutral-200" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a className="hover:text-neutral-200" href="/Resume.pdf" download>Resume</a>
                </p>
            </div>
        </footer>
    )
}