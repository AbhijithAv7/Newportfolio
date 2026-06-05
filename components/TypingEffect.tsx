"use client";

import useTyping from "@/hooks/useTyping";

export default function TypingEffect() {
  const text = useTyping([
    "Software Developer",
    "Python Developer",
    "Full-Stack Developer",
  ]);

  return (
    <span>
      {text}
      <span className="bl">█</span>
    </span>
  );
}