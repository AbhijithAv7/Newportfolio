"use client";

import { useEffect, useState } from "react";

export interface Project {
  id: string;
  title: string;
  desc: string;
  status: "live" | "wip" | "archived";
  featured: boolean;
  tags: string[];
  github: string | null;
  demo: string | null;
  docs?: string | null;
}

/* Optional fallback projects if database is empty */
const FALLBACK: Project[] = [];

const TAG_COLOURS = ["tc0", "tc1", "tc2", "tc3", "tc4", "tc5"];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("/api/projects");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();

        if (Array.isArray(data)) {
          setProjects(data);
        }
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="sec-label">04 — Projects</div>
        <h2 className="sec-heading">Things I've Built</h2>

        {loading ? (
          <div className="adm-empty">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="adm-empty">
            No projects found. Add one from the admin panel.
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className={`proj-card ${p.featured ? "featured" : ""}`}
              >
                <div className="proj-num">
                  PROJECT // {String(i + 1).padStart(3, "0")}
                </div>

                <h3 className="proj-title">{p.title}</h3>

                <p className="proj-desc">{p.desc}</p>

                <div className="proj-tags">
                  {p.tags?.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`proj-tag ${
                        TAG_COLOURS[ti % TAG_COLOURS.length]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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

                  {p.docs && (
                    <a
                      href={p.docs}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-link"
                    >
                      <span className="pl-icon">📄</span> Docs
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}