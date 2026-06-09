"use client";

import { useState, useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  desc: string;
  status: "live" | "wip" | "archived";
  featured: boolean;
  tags: string[];
  github: string;
  demo: string;
  docs: string;
}

const STORAGE_KEY = "portfolio-projects";
const AUTH_KEY    = "adm-auth";
const PASSWORD    = "admin@333"; 

const empty: Omit<Project, "id"> = {
  title: "",
  desc: "",
  status: "live",
  featured: false,
  tags: [],
  github: "",
  demo: "",
  docs: "",
};

type Tab = "list" | "add" | "export";

/* ── Password Gate ─────────────────────────────────────────── */
function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw]       = useState("");
  const [error, setError] = useState(false);
  const [show, setShow]   = useState(false);

  const attempt = () => {
    if (pw === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      onAuth();
    } else {
      setError(true);
      setPw("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="gate-wrap">
      <div className="gate-card">
        <div className="gate-icon">🔒</div>
        <h2 className="gate-title">Admin Access</h2>
        <p className="gate-sub">Enter the password to continue</p>

        <div className="gate-field">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && attempt()}
            className={error ? "gate-input error" : "gate-input"}
            autoFocus
          />
          <button
            className="gate-eye"
            onClick={() => setShow(!show)}
            type="button"
            aria-label="Toggle password visibility"
          >
            {show ? "🙈" : "👁"}
          </button>
        </div>

        {error && <p className="gate-error">❌ Incorrect password</p>}

        <button className="adm-btn primary gate-submit" onClick={attempt}>
          Unlock
        </button>
      </div>
    </div>
  );
}

/* ── Main Admin Page ────────────────────────────────────────── */
export default function AdminPage() {
  const [authed, setAuthed]     = useState(false);
  const [checked, setChecked]   = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tab, setTab]           = useState<Tab>("list");
  const [editId, setEditId]     = useState<string | null>(null);
  const [form, setForm]         = useState({ ...empty, tagsRaw: "" });
  const [copied, setCopied]     = useState(false);
  const [search, setSearch]     = useState("");

  /* check session on mount */
  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "1") setAuthed(true);
    setChecked(true);
  }, []);

const loadProjects = async () => {
  const res = await fetch("/api/projects");
  const data = await res.json();
  setProjects(data);
};

/* load projects */
useEffect(() => {
  if (!authed) return;

  loadProjects();
}, [authed]);


  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  };

  /* form helpers */
  const resetForm = () => { setForm({ ...empty, tagsRaw: "" }); setEditId(null); };

  const startEdit = (p: Project) => {
    setForm({ ...p, tagsRaw: p.tags.join(", ") });
    setEditId(p.id);
    setTab("add");
  };


const saveProject = async () => {
  if (!form.title.trim() || !form.desc.trim()) {
    alert("Title and description are required.");
    return;
  }

  const tags = form.tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const proj = {
    title: form.title.trim(),
    desc: form.desc.trim(),
    status: form.status,
    featured: form.featured,
    tags,
    github: form.github.trim(),
    demo: form.demo.trim(),
    docs: form.docs.trim(),
  };

  const res = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(proj),
  });

  if (!res.ok) {
    alert("Failed to save project");
    return;
  }

  resetForm();
  setTab("list");

  loadProjects();
};

const deleteProject = async (id: string) => {
  if (!confirm("Delete this project?")) return;

  const res = await fetch(`/api/projects/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    alert("Failed to delete project");
    return;
  }

  await loadProjects();
};

  const exportCode = () => {
    if (!projects.length) return "// No projects yet";
    return (
      `export const projects: Project[] = [\n` +
      projects.map((p) =>
        `  {\n    id: "${p.id}",\n    title: "${p.title.replace(/"/g, '\\"')}",\n` +
        `    desc: "${p.desc.replace(/"/g, '\\"')}",\n    status: "${p.status}",\n` +
        `    featured: ${p.featured},\n    tags: [${p.tags.map((t) => `"${t}"`).join(", ")}],\n` +
        `    github: "${p.github}",\n    demo: "${p.demo}",\n    docs: "${p.docs}",\n  }`
      ).join(",\n") + `\n];`
    );
  };

  const copyExport = () => {
    navigator.clipboard.writeText(exportCode()).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    });
  };

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  const statusLabel: Record<Project["status"], string> = {
    live: "Live", wip: "Work in Progress", archived: "Archived",
  };

  /* ── render ── */
  if (!checked) return null;
  if (!authed)  return <PasswordGate onAuth={() => setAuthed(true)} />;

  return (
    <div className="adm-wrap">
      {/* topbar */}
      <div className="adm-top">
        <div className="adm-brand">
          <span className="adm-logo">⚙ Admin</span>
          <span className="adm-count">{projects.length} project{projects.length !== 1 ? "s" : ""}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="/" className="adm-back">← Portfolio</a>
          <button className="adm-btn" onClick={logout}>🔒 Lock</button>
        </div>
      </div>

      {/* tabs */}
      <div className="adm-tabs">
        {(["list", "add", "export"] as Tab[]).map((t) => (
          <button key={t} className={`adm-tab ${tab === t ? "on" : ""}`}
            onClick={() => { if (t !== "add") resetForm(); setTab(t); }}>
            {t === "list" ? "📋 All Projects" : t === "add" ? "➕ Add New" : "📤 Export JSX"}
          </button>
        ))}
      </div>

      {/* LIST */}
      {tab === "list" && (
        <div className="adm-section">
          <input className="adm-search" placeholder="🔍  Search by name or tag…"
            value={search} onChange={(e) => setSearch(e.target.value)} />
          {filtered.length === 0 ? (
            <div className="adm-empty">
              {projects.length === 0 ? "No projects yet — hit ➕ Add New to get started." : "No results."}
            </div>
          ) : (
            <div className="adm-list">
              {filtered.map((p) => (
                <div className="adm-card" key={p.id}>
                  <div className="adm-card-head">
                    <div className="adm-card-title">
                      {p.title}
                      {p.featured && <span className="adm-badge feat">Featured</span>}
                    </div>
                    <div className="adm-card-actions">
                      <button className="adm-btn-ic" onClick={() => startEdit(p)} title="Edit">✏️</button>
                      <button className="adm-btn-ic danger" onClick={() => deleteProject(p.id)} title="Delete">🗑</button>
                    </div>
                  </div>
                  <p className="adm-card-desc">{p.desc}</p>
                  <div className="adm-card-foot">
                    <span className={`adm-badge ${p.status}`}>{statusLabel[p.status]}</span>
                    <div className="adm-tags">{p.tags.map((t) => <span className="adm-tag" key={t}>{t}</span>)}</div>
                    <div className="adm-links">
                      {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="adm-link">GitHub ↗</a>}
                      {p.docs && <a href={p.docs} target="_blank" rel="noreferrer" className="adm-link">Docs ↗</a>}
                      {p.demo   && <a href={p.demo}   target="_blank" rel="noreferrer" className="adm-link">Demo ↗</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* FORM */}
      {tab === "add" && (
        <div className="adm-section">
          <div className="adm-form-card">
            <div className="adm-form-title">{editId ? "Edit Project" : "New Project"}</div>
            <div className="adm-form-grid">
              <div className="adm-field">
                <label>Title *</label>
                <input type="text" placeholder="e.g. Portfolio Website" value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="adm-field">
                <label>Status</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Project["status"] })}>
                  <option value="live">Live</option>
                  <option value="wip">Work in Progress</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="adm-field full">
                <label>Description *</label>
                <textarea placeholder="Briefly describe the project…" value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })} />
              </div>
              <div className="adm-field full">
                <label>Tech Stack (comma separated)</label>
                <input type="text" placeholder="React, Django, PostgreSQL" value={form.tagsRaw}
                  onChange={(e) => setForm({ ...form, tagsRaw: e.target.value })} />
              </div>
              <div className="adm-field">
                <label>GitHub URL</label>
                <input type="url" placeholder="https://github.com/…" value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })} />
              </div>
              <div className="adm-field">
                <label>Live Demo URL</label>
                <input type="url" placeholder="https://…" value={form.demo}
                  onChange={(e) => setForm({ ...form, demo: e.target.value })} />
              </div>
              <div className="adm-field">
                <label>Docs URL</label>
                <input type="url" placeholder="https://docs.example.com/..." value={form.docs}
                  onChange={(e) => setForm({ ...form, docs: e.target.value })} />
              </div>
              <div className="adm-field">
                <label>Featured</label>
                <select value={form.featured ? "true" : "false"}
                  onChange={(e) => setForm({ ...form, featured: e.target.value === "true" })}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="adm-form-actions">
              <button className="adm-btn" onClick={() => { resetForm(); setTab("list"); }}>Cancel</button>
              <button className="adm-btn primary" onClick={saveProject}>{editId ? "Update Project" : "Save Project"}</button>
            </div>
          </div>
        </div>
      )}

      {/* EXPORT */}
      {tab === "export" && (
        <div className="adm-section">
          <div className="adm-export-card">
            <div className="adm-export-head">
              <span className="adm-export-fname">projects.ts</span>
              <button className="adm-btn" onClick={copyExport}>{copied ? "✅ Copied!" : "📋 Copy"}</button>
            </div>
            <pre className="adm-export-pre">{exportCode()}</pre>
          </div>
          <p className="adm-export-hint">
            Paste this into <code>data/projects.ts</code> in your Next.js project.
          </p>
        </div>
      )}
    </div>
  );
}