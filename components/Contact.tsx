"use client";

const links = [
  {
    label: "Email",
    href: "mailto:abhijithav758@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919747502097",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+919747502097",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 10a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/a_b.h_iii_",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abhijith-a-v/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/AbhijithAv7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">

        <div className="sec-label">05 — Contact</div>
        <h2 className="sec-heading">Let's Build Something</h2>

        <p className="contact-sub">
          Have a project in mind or a role to fill? My inbox is always open — I'll get back to you fast.
        </p>

        <div className="contact-grid">
          {/* row 1: first 4 */}
          <div className="contact-row">
            {links.slice(0, 4).map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-btn">
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>

          {/* row 2: last 2 centered */}
          <div className="contact-row">
            {links.slice(4).map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-btn">
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}