"use client";

const categories = [
  {
    id: "sk-frontend",
    icon: "🌐",
    label: "Frontend",
    desc: "Responsive UIs with modern web technologies.",
    skills: [
      { name: "HTML5",      icon: "🧱" },
      { name: "CSS3",       icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "TypeScript", icon: "🔷" },
      { name: "React",      icon: "⚛️" },
      { name: "Next.js",    icon: "▲" },
      { name: "Tailwind",   icon: "💨" },
      { name: "Bootstrap",  icon: "🅱" },
    ],
  },
  {
    id: "sk-backend",
    icon: "🐍",
    label: "Backend",
    desc: "Scalable APIs and server-side logic with Python.",
    skills: [
      { name: "Python",   icon: "🐍" },
      { name: "Django",   icon: "🎸" },
      { name: "Flask",    icon: "🧪" },
      { name: "REST API", icon: "🔗" },
      { name: "Celery",   icon: "⚙️" },
      { name: "Node.js",  icon: "🟢" },
      { name: "Express",  icon: "🚂" },
      { name: "JWT",      icon: "🔐" },
    ],
  },
  {
    id: "sk-database",
    icon: "🗄️",
    label: "Database & Tools",
    desc: "Data management and dev workflow essentials.",
    skills: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQLite",     icon: "💾" },
      { name: "Redis",      icon: "🔴" },
      { name: "Git",        icon: "🌿" },
      { name: "GitHub",     icon: "🐙" },
      { name: "Docker",     icon: "🐳" },
      { name: "Linux",      icon: "🐧" },
      { name: "Nginx",      icon: "🔁" },
    ],
  },
];

const chips = [
  { label: "SQLite",     color: "#a78bfa" },
  { label: "Celery",     color: "#00ff88" },
  { label: "HTML",       color: "#e34c26" },
  { label: "CSS",        color: "#264de4" },
  { label: "JavaScript", color: "#f7df1e" },
  { label: "Bootstrap",  color: "#7952b3" },
  { label: "Python",     color: "#00e5ff" },
  { label: "React",      icon: "⚛️", color: "#61dafb" },
  { label: "Django",     color: "#00ff88" },
  { label: "REST API",   color: "#ff6b35" },
  { label: "PostgreSQL", color: "#a78bfa" },
  { label: "Git",        color: "#f05032" },
  { label: "Docker",     color: "#2496ed" },
  { label: "Next.js",    color: "#ffffff" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="sec-label">02 — Skills</div>
        <h2 className="sec-heading">Technical Arsenal</h2>

        <div className="skills-cards">
          {categories.map((cat) => (
            <div key={cat.id} className={`sk-card ${cat.id}`}>
              {/* header */}
              <div className="sk-header">
                <span className="sk-icon">{cat.icon}</span>
                <div>
                  <div className="sk-cat">{cat.label}</div>
                  <p className="sk-desc">{cat.desc}</p>
                </div>
              </div>

              {/* tags */}
              <div className="sk-tags">
                {cat.skills.map((s, i) => (
                  <span
                    className="sk-tag"
                    key={s.name}
                    style={{ "--td": `${i * 0.05}s` } as React.CSSProperties}
                  >
                    <span className="sk-tag-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* marquee */}
        <div className="sk-ticker">
          <div className="sk-track-inner">
            {[...chips, ...chips].map((chip, i) => (
              <span className="sk-chip" key={i}>
                <span className="sk-chip-dot" style={{ background: chip.color }} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}