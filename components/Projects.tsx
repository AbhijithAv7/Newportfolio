"use client";

import { useEffect, useState } from "react";

export interface Project {
  id: string;
  title: string;
  desc: string;
  status: "live" | "wip" | "archived";
  featured: boolean;
  tags: string[];
  github: string;
  demo: string;
}

/* fallback static projects shown before any admin data */
const FALLBACK: Project[] = [
  {
    id: "1",
    title: "AI Interview Assistant",
    desc: "A web application that helps users practice technical interviews using AI-powered questions and real-time feedback.",
    status: "live",
    featured: true,
    tags: ["Python", "Flask", "React", "PostgreSQL"],
    github: "https://github.com",
    demo: "",
  },
  {
    id: "2",
    title: "Portfolio Website",
    desc: "Modern responsive developer portfolio built with Next.js and TypeScript featuring a cyberpunk aesthetic.",
    status: "live",
    featured: false,
    tags: ["Next.js", "TypeScript", "CSS"],
    github: "https://github.com",
    demo: "",
  },
  {
    id: "3",
    title: "Task Management System",
    desc: "A full-stack task management application with authentication, project tracking and team collaboration.",
    status: "wip",
    featured: false,
    tags: ["React", "Django", "PostgreSQL"],
    github: "https://github.com",
    demo: "",
  },
];

const TAG_COLOURS = ["tc0", "tc1", "tc2", "tc3", "tc4", "tc5"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK);

  /* load from admin localStorage if available */
  useEffect(() => {
    try {
      const raw = localStorage.getItem("portfolio-projects");
      if (raw) {
        const parsed: Project[] = JSON.parse(raw);
        if (parsed.length > 0) setProjects(parsed);
      }
    } catch {}
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">

        <div className="sec-label">04 — Projects</div>
        <h2 className="sec-heading">Things I've Built</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card ${p.featured ? "featured" : ""}`}
            >
              {/* project number */}
              <div className="proj-num">
                PROJECT // {String(i + 1).padStart(3, "0")}
              </div>

              {/* title */}
              <h3 className="proj-title">{p.title}</h3>

              {/* description */}
              <p className="proj-desc">{p.desc}</p>

              {/* tech tags */}
              <div className="proj-tags">
                {p.tags.map((tag, ti) => (
                  <span
                    key={tag}
                    className={`proj-tag ${TAG_COLOURS[ti % TAG_COLOURS.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* divider + links */}
              <div className="proj-divider" />
              <div className="proj-links">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    <span className="pl-icon">◎</span> Live Demo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    <span className="pl-icon">⇒</span> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}