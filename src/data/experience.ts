export type Experience = {
    company: string;
    role: string;
    start: string;
    end: string;
    bullets: string[];
}

export const experience: Experience[] = [
    {
        company: 'Lingjack Engineering Works Pte Ltd',
        role: 'Senior Software Engineer',
        start: 'Sept 2021',
        end: 'Present',
        bullets: [
            'Led IoT admin dashboard from scratch (React + Vite + Tailwind + shadcn/ui).',
            'Implemented secure Azure cloud architecture incl. firewalls & ExpressRoute.',
            'Conducted VAPT, fixed vulnerabilities, and reinforced security practices.',
            'Engineered full-stack IoT solutions: Python device comms, Laravel APIs, React dashboards.',
            'Enabled real-time analytics and alerts across 50+ industrial devices (scalable to thousands).',
            'Drove SOLID, TDD (Pest PHP), and clean code adoption across the team.',
            'Maintained company-wide ERP (C# .NET) ensuring stability and integrations.'
        ]
    },
    {
        company: 'Make Technology',
        role: 'Backend Developer',
        start: 'May 2021',
        end: 'Oct 2021',
        bullets: [
            'Developed RESTful APIs using Node.js and Laravel for client projects.',
            'Optimized queries and server-side logic to improve API response times.'
        ]
    },
    {
        company: 'Northstar Solution Inc.',
        role: 'Software Engineer',
        start: 'May 2019',
        end: 'May 2021',
        bullets: [
            'Built responsive web apps with Laravel & modern JS; improved scalability.',
            'Hardened infra: monitored networks, configured firewalls, administered AD.'
        ]
    },
    {
        company: 'Cloudcompass Technologies',
        role: 'Lead Developer',
        start: 'Oct 2018',
        end: 'May 2019',
        bullets: [
            'Led payroll system project: delivered core features & resolved critical issues.',
            'Ensured seamless AngularJS (frontend) + Laravel (backend) integration.'
        ]
    },
    {
        company: 'Convey Health Solutions',
        role: 'Software Development Intern',
        start: 'Aug 2018',
        end: 'Dec 2018',
        bullets: [
            'Automated document generation from structured data, reducing manual work.',
            'Wrote scripts to migrate legacy software data and templates.'
        ]
    }
]