"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

/* ---------------- DATA ---------------- */

const logoStart = [
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/1_fgwzx5.jpg",
    alt: "Brand mark sketch",
    isHero: true,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/2_gyezxs.jpg",
    alt: "Brand mark digitised",
    button: false,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/3_zhzr4u.jpg",
    alt: "Brand mark with new antlers",
    button: false,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_bpavts.jpg",
    alt: "Brand mark with adjusted antlers",
    button: true,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/5_p8ayq5.jpg",
    alt: "Brand mark as antlers",
    button: false,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/6_ycikex.jpg",
    alt: "Brand mark as antlers with trophy base",
    button: false,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/7_l2lkhw.jpg",
    alt: "Brand mark as refined antlers with trophy base",
    button: false,
  },
];

const logoRefinement = [
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_2_lvriyi.jpg",
    alt: "Logo Refinement 1",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_3_uzeur2.jpg",
    alt: "Logo Refinement 2",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_4_j0ntlf.jpg",
    alt: "Logo Refinement 3",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_5_sb54g8.jpg",
    alt: "Logo Refinement 4",
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_6_eoaplv.jpg",
    alt: "Final logo",
    chosen: true,
  },
  {
    src: "https://res.cloudinary.com/dg0c4lry9/image/upload/t_blog_header/4_7_whsbr1.jpg",
    alt: "Alt logo",
    chosen: true,
  },
];

/* ---------------- ANIMATION HELPERS ---------------- */

const ITEMS_FROM = { opacity: 0, y: 0, scale: 0.92 };
const ITEMS_TO = {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 0.45,
  stagger: 0.07,
  ease: "back.out(1.4)",
};
const ITEMS_OUT = {
  opacity: 0,
  y: 0,
  scale: 0.92,
  duration: 0.35,
  stagger: 0.05,
  ease: "power2.in",
};

// rowRef is the single height-animated container.
// Recalculate its full scrollHeight and tween to it.
function resizeRow(el: HTMLElement, onComplete?: () => void): void {
  const current = el.offsetHeight;
  gsap.set(el, { height: "auto" });
  const target = el.scrollHeight;
  gsap.fromTo(
    el,
    { height: current },
    { height: target, duration: 0.45, ease: "expo.out", onComplete },
  );
}

function expandEl(el: HTMLElement, onComplete?: () => void): void {
  gsap.set(el, { height: "auto", opacity: 0, visibility: "visible" });
  const height = el.scrollHeight;
  gsap.set(el, { height: 0 });
  gsap.to(el, {
    height,
    opacity: 1,
    duration: 0.45,
    ease: "expo.out",
    onComplete,
  });
}

function collapseEl(el: HTMLElement, onComplete?: () => void): void {
  gsap.to(el, {
    height: 0,
    opacity: 0,
    duration: 0.35,
    ease: "expo.in",
    onComplete,
  });
}

function staggerIn(els: (HTMLElement | null)[]): void {
  gsap.fromTo(els.filter(Boolean), ITEMS_FROM, ITEMS_TO);
}

function staggerOut(els: (HTMLElement | null)[]): void {
  gsap.to(els.filter(Boolean), ITEMS_OUT);
}

/* ---------------- COMPONENT ---------------- */

export default function LogoShowcase() {
  const [phase, setPhase] = useState<"hero" | "explore">("hero");
  const [activePanel, setActivePanel] = useState<number | null>(null);

  const heroRef = useRef<HTMLButtonElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const rowItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const refinementRef = useRef<HTMLDivElement>(null);
  const refinementItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  /* ---------------- MOUNT ---------------- */

  useEffect(() => {
    gsap.set(rowRef.current, { height: 0, opacity: 0 });
    // Refinement starts hidden in flow (height: auto, opacity: 0)
    // so rowRef can always measure it correctly
    gsap.set(refinementRef.current, { height: 0, opacity: 0 });
    gsap.fromTo(
      hintRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6 },
    );
  }, []);

  /* ---------------- REFINEMENT HELPERS ---------------- */

  const openRefinement = () => {
    if (!refinementRef.current || !rowRef.current) return;
    // Make refinement visible in flow so rowRef can measure the new total height
    gsap.set(refinementRef.current, { opacity: 0, height: "auto" });
    gsap.set(refinementItemsRef.current.filter(Boolean), ITEMS_FROM);
    // Grow rowRef to fit, then stagger in the items
    resizeRow(rowRef.current, () => {
      gsap.to(refinementRef.current, { opacity: 1, duration: 0.2 });
      staggerIn(refinementItemsRef.current);
    });
  };

  const closeRefinement = (onComplete?: () => void) => {
    if (!refinementRef.current || !rowRef.current) {
      onComplete?.();
      return;
    }
    staggerOut(refinementItemsRef.current);
    // Shrink rowRef back to just the row items, then hide refinement
    resizeRow(rowRef.current, () => {
      gsap.set(refinementRef.current!, { height: "auto", opacity: 0 });
      onComplete?.();
    });
  };

  /* ---------------- HERO TOGGLE ---------------- */

  const handleHeroClick = () => {
    if (phase === "hero") {
      gsap.to(hintRef.current, { opacity: 0, y: -6, duration: 0.25 });
      gsap.to(heroRef.current, {
        scale: 0.38,
        duration: 0.65,
        ease: "expo.inOut",
        delay: 0.1,
      });
      gsap.set(rowItemsRef.current.filter(Boolean), ITEMS_FROM);
      expandEl(rowRef.current!, () => {
        staggerIn(rowItemsRef.current);
        setPhase("explore");
      });
    } else {
      const collapseRow = () => {
        staggerOut(rowItemsRef.current);
        collapseEl(rowRef.current!, () => {
          gsap.to(heroRef.current, {
            scale: 1,
            duration: 0.65,
            ease: "expo.inOut",
          });
          gsap.to(hintRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.35,
            delay: 0.3,
          });
          setPhase("hero");
        });
      };

      if (activePanel !== null) {
        // No need to animate refinement closed separately — collapseEl on rowRef hides everything
        staggerOut(refinementItemsRef.current);
        setActivePanel(null);
        collapseRow();
      } else {
        collapseRow();
      }
    }
  };

  /* ---------------- DIRECTION TOGGLE ---------------- */

  const handleDirectionClick = (idx: number) => {
    if (activePanel === idx) {
      closeRefinement(() => setActivePanel(null));
    } else if (activePanel !== null) {
      closeRefinement(() => {
        setActivePanel(idx);
        openRefinement();
      });
    } else {
      setActivePanel(idx);
      openRefinement();
    }
  };

  /* ---------------- RENDER ---------------- */

  const exploreItems = logoStart.slice(1);

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full">
        {/* Hero */}
        <div className="relative flex justify-center items-center">
          <button
            ref={heroRef}
            onClick={handleHeroClick}
            aria-label="Click to explore the logo process"
            className="cursor-pointer focus-visible:outline-none"
            style={{ transformOrigin: "center center" }}
          >
            <Image
              src={logoStart[0].src}
              alt={logoStart[0].alt}
              width={750}
              height={750}
              priority
              className="w-auto h-72 md:h-105 rounded-xl shadow-lg"
            />
          </button>

          <p
            ref={hintRef}
            className="absolute -bottom-8 text-sm tracking-widest uppercase text-black-Mirage dark:text-white-LinkWater opacity-0 select-none font-lexend"
          >
            Click to explore
          </p>
        </div>

        {/* Exploration row */}
        <div
          ref={rowRef}
          className="overflow-hidden mt-6 will-change-[height,opacity]"
          style={{ height: 0, opacity: 0 }}
        >
          <div className="flex flex-wrap gap-5 justify-center items-start px-10">
            {exploreItems.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  rowItemsRef.current[i] = el;
                }}
                className="flex flex-col items-center gap-2 opacity-0"
              >
                {item.button ? (
                  <>
                    <button
                      onClick={() => handleDirectionClick(i)}
                      className={[
                        "rounded-lg outline -outline-offset-4 transition-colors duration-200 focus-visible:outline-none",
                        activePanel === i
                          ? "outline-black-Mirage"
                          : "outline-transparent hover:outline-black-Mirage/30",
                      ].join(" ")}
                      aria-expanded={activePanel === i}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={750}
                        height={750}
                        className="w-auto h-28 rounded-lg shadow-md"
                      />
                    </button>
                    <span className="text-[10px] tracking-widest uppercase text-black-Mirage dark:text-white-LinkWater font-lexend">
                      direction
                    </span>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={750}
                    height={750}
                    className="w-auto h-28 rounded-lg shadow-md"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Refinement panel */}
          <div
            ref={refinementRef}
            className="overflow-hidden mt-6 will-change-[height,opacity]"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex flex-wrap gap-5 justify-center px-10">
                {logoRefinement.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      refinementItemsRef.current[i] = el;
                    }}
                    className={`${item.chosen ? "outline-1 -outline-offset-4 outline-red-CoralRed rounded-lg" : ""}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={750}
                      height={750}
                      className="w-auto h-28 rounded-lg shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
