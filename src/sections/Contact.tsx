import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { EMAIL, LOCATION, PHONE } from '@/lib/utils'

export function Contact() {
    const [sending, setSending] = useState(false)
    const [ok, setOk] = useState<string | null>(null)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSending(true)
        setOk(null)
        const fd = new FormData(e.currentTarget)
        const payload = Object.fromEntries(fd.entries())
        try {
            // If you have an API endpoint, call it here. Fallback to mailto.
            const href = `mailto:${EMAIL}?subject=${encodeURIComponent(String(payload.subject || 'Message from Portfolio'))}&body=${encodeURIComponent(`From: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`)}`
            window.location.href = href
            setOk('Opened your email client. If that failed, copy the address below and email manually.')
        } finally {
            setSending(false)
                ; (e.target as HTMLFormElement).reset()
        }
    }

    return (
        <section id="contact" className="container py-20">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-6 grid lg:grid-cols-2 gap-8">
                <form onSubmit={onSubmit} className="card p-6 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input required name="name" placeholder="Your name" />
                        <Input required type="email" name="email" placeholder="Your email" />
                    </div>
                    <Input name="subject" placeholder="Subject" />
                    <Textarea required name="message" placeholder="Your message" rows={6} />
                    <div className="flex items-center gap-3">
                        <Button type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send'}</Button>
                        {ok && <span className="text-xs text-neutral-400">{ok}</span>}
                    </div>
                </form>
                <div className="card p-6">
                    <h3 className="font-medium">Reach me</h3>
                    <ul className="mt-3 text-neutral-300 space-y-2">
                        <li><span className="text-neutral-400">Email:</span> <button className="underline" onClick={() => navigator.clipboard.writeText(EMAIL)}>{EMAIL}</button></li>
                        <li><span className="text-neutral-400">Phone:</span> <button className="underline" onClick={() => navigator.clipboard.writeText(PHONE)}>{PHONE}</button></li>
                        <li><span className="text-neutral-400">Location:</span> {LOCATION}</li>
                    </ul>
                    <div className="mt-4 text-sm text-neutral-400">Click items to copy.</div>
                </div>
            </div>
        </section>
    )
}