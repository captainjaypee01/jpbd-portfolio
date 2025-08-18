export function EducationCerts() {
    return (
        <section id="education" className="container py-20">
            <h2 className="text-2xl font-semibold mb-6">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-5">
                    <h3 className="font-semibold">FEU Institute of Technology</h3>
                    <p className="text-sm text-neutral-400">B.S. Information Technology (2015–2021)</p>
                    <p className="mt-3 text-neutral-300 text-sm">Specialization in Web & Mobile Application. Thesis: Web & Mobile Booking & Reservation with monitoring application.</p>
                </div>
                <div className="card p-5">
                    <h3 className="font-semibold">Certifications</h3>
                    <p className="text-sm text-neutral-400">Microsoft Technology Associate for Introduction to programming using Javascript.</p>
                </div>
            </div>
        </section>
    )
}
