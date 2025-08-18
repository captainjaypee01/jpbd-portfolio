import { GITHUB } from "@/lib/utils"

export type Project = {
    title: string
    subtitle?: string
    description: string
    tech: string[]
    type: 'IoT' | 'Web App' | 'Admin Portal' | 'On-Premise'
    links?: { demo?: string; repo?: string }
    image?: string
}

export const projects: Project[] = [
    {
        title: 'IoT Monitoring Dashboard',
        subtitle: 'Cloud-based real-time device analytics',
        description:
            'Real-time visualizations and device health monitoring with MQTT streams, FastAPI microservices, and a React + Vite dashboard. Zero-downtime deploys via Azure DevOps.',
        tech: ['React', 'Vite', 'Tailwind', 'shadcn/ui', 'MQTT', 'FastAPI', 'Laravel', 'OpenAI'],
        type: 'IoT',
        links: { repo: GITHUB + '?tab=repositories' }
    },
    {
        title: 'Web-Based Beach Resort Booking System',
        subtitle: 'End-to-end booking & payments',
        description:
            'Full-stack booking system with Laravel APIs and a React admin/guest UI. Clerk auth, email notifications, and online payments.',
        tech: ['Laravel', 'React', 'Clerk', 'MySQL', 'Tailwind'],
        type: 'Web App',
        links: { repo: GITHUB + '?tab=repositories' }
    },
    {
        title: 'On-Premise IoT Monitoring System',
        subtitle: 'Offline-first, sub-second processing',
        description:
            'Local gateway deployment for industrial equipment with offline caching and realtime charts even without cloud connectivity.',
        tech: ['Python', 'MQTT', 'SQLite', 'React'],
        type: 'On-Premise'
    },
    {
        title: 'In-House Asset Management Portal',
        subtitle: 'Asset tracking & dashboards',
        description:
            'Portal to track company assets, lifecycle events, and generate interactive dashboards to reduce manual reporting.',
        tech: ['Laravel', 'React', 'Tailwind'],
        type: 'Admin Portal'
    },
    {
        title: 'Team Registration & Management System',
        subtitle: 'Events, roles, and scheduling',
        description:
            'Role-based registration and management with secure APIs and intuitive React admin UI.',
        tech: ['Laravel', 'React'],
        type: 'Web App'
    }
]
