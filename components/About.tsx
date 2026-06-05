"use client";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* numbered label */}
        <div className="sec-label">01 — About</div>

        {/* big heading */}
        <h2 className="sec-heading">
          Crafting Code<br />with Purpose
        </h2>

        <div className="about-wrap">

          {/* ── Left: prose + stats ── */}
          <div className="about-left">

            <p>
              Hi, I'm <strong>Abhijith</strong>, a passionate{" "}
              <strong>fresher software developer</strong> who enjoys building web
              applications from the ground up. I love working with Python and
              JavaScript to create practical, user-friendly solutions.
            </p>

            <p>
              I'm skilled in building full-stack web apps using{" "}
              <strong>Django, React, and REST APIs</strong>. Though I'm just
              starting my professional journey, I'm a fast learner with a strong
              urge to write clean and meaningful code every day.
            </p>

            {/* 2×2 stat grid */}
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-icon">🎓</span>
                <span className="stat-lbl">Fresh Graduate</span>
              </div>

              <div className="stat-card">
                <span className="stat-icon"></span>
                <span className="stat-val">5+</span>
                <span className="stat-lbl">Projects Built</span>
              </div>

              <div className="stat-card">
                <span className="stat-val">11</span>
                <span className="stat-lbl">Technologies</span>
              </div>

              <div className="stat-card">
                <span className="stat-icon">💡</span>
                <span className="stat-lbl">Always Learning</span>
              </div>
            </div>
          </div>

          {/* ── Right: Python code block ── */}
          <div className="about-code">
            {/* title bar */}
            <div className="code-tbar">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <span className="code-fname">about_me.py</span>
            </div>

            {/* code body */}
            <div className="code-body">
              <code>
                <span className="code-line">
                  <span className="ck">class </span>
                  <span className="cn">Abhijith</span>
                  <span className="co">:</span>
                </span>
                <span className="code-line">
                  {"    "}
                  <span className="ck">def </span>
                  <span className="cn">__init__</span>
                  <span className="co">(</span>
                  <span className="ck">self</span>
                  <span className="co">):</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">role</span>
                  <span className="co"> = </span>
                  <span className="cs">"Software Developer"</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">level</span>
                  <span className="co"> = </span>
                  <span className="cs">"Fresher"</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">location</span>
                  <span className="co"> = </span>
                  <span className="cs">"Kerala, India"</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">degree</span>
                  <span className="co"> = </span>
                  <span className="cs">"B.Sc CS"</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">loves</span>
                  <span className="co"> = [</span>
                </span>
                <span className="code-line">
                  {"            "}
                  <span className="cs">"Python"</span>
                  <span className="co">, </span>
                  <span className="cs">"Django"</span>
                  <span className="co">,</span>
                </span>
                <span className="code-line">
                  {"            "}
                  <span className="cs">"React"</span>
                  <span className="co">, </span>
                  <span className="cs">"Clean Code"</span>
                </span>
                <span className="code-line">
                  {"        "}
                  <span className="co">]</span>
                </span>
                <span className="code-line"> </span>
                <span className="code-line">
                  {"        "}
                  <span className="ck">self</span>
                  <span className="co">.</span>
                  <span className="cp">status</span>
                  <span className="co"> = </span>
                  <span className="cg">"open_to_work 🚀 "</span>
                </span>
                <span className="code-prompt">&gt;&gt;&gt;</span>
              </code>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}