import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { IoTWorkflow } from '@/sections/IoTWorkflow'
import { EducationCerts } from '@/sections/EducationCerts'
import { Contact } from '@/sections/Contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <IoTWorkflow />
            <EducationCerts />
            <Contact />
        </main>
    )
}