import { useEffect, useRef } from "react";

export function useRevealAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements =
      container.querySelectorAll<HTMLElement>("[data-reveal-el]");
    console.log(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          elements.forEach((el) => {
            console.log(el);
            const delay = parseInt(el.dataset.revealDelay ?? "0", 10);
            console.log(delay);
            setTimeout(() => {
              el.style.opacity = "1";
            }, delay);
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return containerRef;
}

export default useRevealAnimation;
