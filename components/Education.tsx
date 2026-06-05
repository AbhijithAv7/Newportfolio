"use client";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">

        <div className="sec-label">03 — Education</div>
        <h2 className="sec-heading">Academic Background</h2>

        <div className="edu-wrap">
          {/* pulsing dot — positioned top-right via CSS */}
          <div className="edu-dot" />

          {/* single education card */}
          <div className="edu-card">

            {/* icon box */}
            <div className="edu-icon-box">🎓</div>

            {/* text */}
            <div className="edu-info">
              <div className="edu-degree">B.Sc Computer Science</div>
              <div className="edu-college">College of Applied Science Cheemeni</div>
              <span className="edu-year">Year of Passing — 2025</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}