import { useEffect } from "react";

function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animateCounter(el: HTMLElement, target: number, duration = 2400) {
  const startTime = performance.now();

  function tick(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    const count = Math.floor(eased * target);

    el.textContent = count < 10 ? `0${count}` : `${count}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target < 10 ? `0${target}` : `${target}`;
    }
  }

  requestAnimationFrame(tick);
}

export function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>("[data-target]");
    if (counters.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.target ?? "0", 10);
          animateCounter(el, target);
          observer.unobserve(el); // fire once
        });
      },
      { threshold: 0.3 },
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);
}

export default useCounterAnimation;
