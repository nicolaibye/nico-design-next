"use client";
import { useEffect, useState } from "react";

type Phase = "typing" | "pausing" | "deleting";

interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

function useTypewriter(
  words: string[],
  {
    typingSpeed = 125,
    deletingSpeed = 75,
    pauseDuration = 3000,
  }: TypewriterOptions = {},
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing" && text === currentWord) {
      timeout = setTimeout(() => setPhase("pausing"), 0);
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
    } else if (phase === "deleting" && text === "") {
      timeout = setTimeout(() => {
        setPhase("typing");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 0);
    } else if (phase === "typing") {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typingSpeed,
      );
    } else if (phase === "deleting") {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        deletingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  // cursor should hold solid (not blink) while actively changing text
  const isBlinking = phase === "pausing";

  return { text, isBlinking };
}

export default useTypewriter;
