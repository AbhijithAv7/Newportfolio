"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const ring = document.getElementById("curR");

    const move = (e: MouseEvent) => {
      if (!cur || !ring) return;

      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;

      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cur" />
      <div id="curR" />
    </>
  );
}