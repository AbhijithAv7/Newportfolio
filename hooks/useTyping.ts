"use client";

import { useEffect, useState } from "react";

export default function useTyping(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1800
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));

        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        setText(current.slice(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    text,
    deleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}