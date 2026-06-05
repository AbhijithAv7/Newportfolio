"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="logo">&lt; DEV /&gt;</div>

        <ul className="dnav">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#education">Education</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button
          className={`hbg ${open ? "on" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="ov"
        className={open ? "on" : ""}
        onClick={closeMenu}
      />

      <ul
        id="drawer"
        className={open ? "on" : ""}
      >
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}