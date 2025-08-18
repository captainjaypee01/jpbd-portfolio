export type Skill = { name: string; level?: number; category: 'Frontend' | 'Backend & API' | 'Cloud & Infrastructure' | 'DevOps & Tools' | 'AI & Data' }
export const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 88, category: 'Frontend' },
    { name: 'Vite', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'shadcn/ui', level: 80, category: 'Frontend' },
    { name: 'AngularJS', level: 65, category: 'Frontend' },
    // Backend & API
    { name: 'Laravel', level: 88, category: 'Backend & API' },
    { name: 'Node.js', level: 75, category: 'Backend & API' },
    { name: 'Python', level: 78, category: 'Backend & API' },
    { name: 'C# / .NET', level: 70, category: 'Backend & API' },
    { name: 'RESTful APIs', level: 85, category: 'Backend & API' },
    // Cloud & Infrastructure
    { name: 'Azure', level: 80, category: 'Cloud & Infrastructure' },
    { name: 'Docker', level: 78, category: 'Cloud & Infrastructure' },
    { name: 'Azure DevOps (CI/CD)', level: 82, category: 'Cloud & Infrastructure' },
    { name: 'ExpressRoute', level: 60, category: 'Cloud & Infrastructure' },
    { name: 'Firewalls', level: 65, category: 'Cloud & Infrastructure' },
    // DevOps & Tools
    { name: 'Git', level: 90, category: 'DevOps & Tools' },
    { name: 'Agile/Scrum', level: 80, category: 'DevOps & Tools' },
    { name: 'SOLID', level: 85, category: 'DevOps & Tools' },
    { name: 'TDD (Pest PHP)', level: 75, category: 'DevOps & Tools' },
    { name: 'MQTT', level: 70, category: 'DevOps & Tools' },
    // AI & Data
    { name: 'OpenAI Integration', level: 70, category: 'AI & Data' },
    { name: 'ChatGPT / Claude / Deepseek / Cursor', level: 75, category: 'AI & Data' },
    { name: 'Pandas', level: 60, category: 'AI & Data' }
]