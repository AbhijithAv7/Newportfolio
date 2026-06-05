"use client";

import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section id="hero">
      <div className="glows">
        <div className="go go1"></div>
        <div className="go go2"></div>
      </div>

      <div className="hero-in">
        <div className="hero-left">
          <div className="corner-tl"></div>
          <div className="corner-br"></div>

          <div className="htag">Open to opportunities</div>

          <h1>
            Hello, I'm
            <br />
            <span>Abhijith</span>
          </h1>

          <p className="hrole">
            &gt; <TypingEffect />
          </p>

          <p className="hdesc">
            A fresher software developer who loves turning ideas into real
            working applications. Focused on building clean, functional web
            apps using Python and modern web technologies.
          </p>

          <div className="cta">
            <a href="#projects" className="btn bp">
              ▶ View Projects
            </a>

            <a href="#contact" className="btn bo">
              ✉ Contact Me
            </a>
          </div>

          {/* Floating badges */}

          <div className="float-badge fb1">Python</div>
          <div className="float-badge fb2">Django</div>
          <div className="float-badge fb3">React</div>
          <div className="float-badge fb4">Open To Work</div>
        </div>

        {/* Right Card */}

        <div className="hvis">
          <div className="neofetch">
            <div className="tbar">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>

              <div className="ttl">
                abhijith@portfolio ~
              </div>
            </div>

            <div className="neo-body">
              <div className="neo-grid">
                <div className="neo-art">
                  <div className="neo-orbit-wrap">
                    <div className="neo-avatar">
                      <div className="neo-avatar-inner">
                        <span className="neo-initial">A</span>
                        <span className="neo-sub-init">dev</span>
                      </div>
                    </div>

                    <div className="neo-ring neo-ring1"></div>
                    <div className="neo-ring neo-ring2"></div>

                    <div className="neo-planet p1">🐍</div>
                    <div className="neo-planet p2">⚛️</div>
                    <div className="neo-planet p3">🎸</div>
                    <div className="neo-planet p4">🗄️</div>
                  </div>
                </div>

                <div className="neo-info">
                  <div className="neo-user">
                    <span className="neo-cyan">abhijith</span>
                    <span className="neo-w">@</span>
                    <span className="neo-green">portfolio</span>
                  </div>

                  <div className="neo-sep">
                    ─────────────────
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">OS</span>
                    <span className="neo-val">
                      Developer Mode 🚀
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Role</span>
                    <span className="neo-val">
                      Software Developer
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Level</span>
                    <span className="neo-val">Fresher</span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Location</span>
                    <span className="neo-val">
                      Kerala, India
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Stack</span>
                    <span className="neo-val">
                      Python · Django · React
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">DB</span>
                    <span className="neo-val">
                      PostgreSQL · SQLite
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Status</span>
                    <span className="neo-val neo-green">
                      Open To Work ✓
                    </span>
                  </div>

                  <div className="neo-row">
                    <span className="neo-key">Coffee</span>
                    <span className="neo-val">
                      ☕☕☕☕☕
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Right */}
      </div>
    </section>
  );
}