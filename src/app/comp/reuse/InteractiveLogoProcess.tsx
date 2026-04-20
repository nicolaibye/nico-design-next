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

const expand = (el: HTMLElement, duration = 0.45) => {
  gsap.set(el, { autoAlpha: 1, height: "auto" });
  const height = el.scrollHeight;

  gsap.set(el, { height: 0, overflow: "hidden" });

  return gsap.to(el, {
    height,
    opacity: 1,
    duration,
    ease: "expo.out",
    onComplete: () => gsap.set(el, { height: "auto" }),
  });
};

const collapse = (el: HTMLElement, duration = 0.35) => {
  return gsap.to(el, {
    height: 0,
    opacity: 0,
    duration,
    ease: "expo.in",
  });
};

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
  const containerRef = useRef<HTMLDivElement>(null);

  /* ---------------- INITIAL STATE ---------------- */

  useEffect(() => {
    if (hintRef.current) {
      gsap.fromTo(
        hintRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6 },
      );
    }

    if (rowRef.current) {
      gsap.set(rowRef.current, { height: 0, opacity: 0 });
    }

    if (refinementRef.current) {
      gsap.set(refinementRef.current, { height: 0, opacity: 0 });
    }
  }, []);

  /* ---------------- HERO CLICK ---------------- */

  const handleHeroClick = () => {
    if (!rowRef.current) return;

    if (phase === "hero") {
      const tl = gsap.timeline({
        onComplete: () => setPhase("explore"),
      });

      tl.to(hintRef.current, { opacity: 0, y: -6, duration: 0.25 });

      tl.to(
        heroRef.current,
        { scale: 0.38, duration: 0.65, ease: "expo.inOut" },
        "<0.1",
      );

      // Expand row
      tl.add(() => expand(rowRef.current!));

      // Animate items
      tl.fromTo(
        rowItemsRef.current.filter(Boolean),
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.07,
          ease: "back.out(1.4)",
        },
        "<0.1",
      );
    } else {
      const tl = gsap.timeline({
        onComplete: () => setPhase("hero"),
      });

      // Close refinement first
      if (activePanel !== null && refinementRef.current) {
        tl.add(() =>
          collapse(refinementRef.current!).eventCallback("onComplete", () =>
            setActivePanel(null),
          ),
        );
      }

      // Hide items
      tl.to(
        rowItemsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 24,
          scale: 0.92,
          duration: 0.35,
          stagger: 0.05,
        },
        "<0.1",
      );

      // Collapse row
      tl.add(() => collapse(rowRef.current!));

      // Restore hero
      tl.to(
        heroRef.current,
        { scale: 1, duration: 0.65, ease: "expo.inOut" },
        "<0.05",
      );

      // Hint back
      tl.to(hintRef.current, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2");
    }
  };

  /* ---------------- REFINEMENT ---------------- */

  const handleDirectionClick = (idx: number) => {
    if (activePanel === idx) {
      closeRefinement(() => setActivePanel(null));
    } else {
      if (activePanel !== null) {
        closeRefinement(() => setActivePanel(idx));
      } else {
        setActivePanel(idx);
      }
    }
  };

  useEffect(() => {
    if (activePanel === null || !refinementRef.current) return;

    expand(refinementRef.current);

    gsap.fromTo(
      refinementItemsRef.current.filter(Boolean),
      { opacity: 0, y: 16, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: "back.out(1.3)",
        delay: 0.1,
      },
    );
  }, [activePanel]);

  const closeRefinement = (onComplete?: () => void) => {
    if (!refinementRef.current) return onComplete?.();

    collapse(refinementRef.current).eventCallback("onComplete", onComplete);
  };

  const exploreItems = logoStart.slice(1);

  return (
    <section
      ref={containerRef}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="w-full">
        {/* ── Hero stage ── */}
        <div className="relative flex justify-center items-center">
          <button
            ref={heroRef}
            onClick={handleHeroClick}
            aria-label="Click to explore the logo process"
            className={[
              "origin-left transition-none focus-visible:outline-none cursor-pointer",
            ].join(" ")}
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

        {/* ── Exploration row ── */}
        <div
          ref={rowRef}
          className="overflow-hidden opacity-0 mt-6 will-change-[height,opacity]"
          style={{ height: 0 }}
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

          {/* ── Refinement panel ── */}
          <div
            ref={refinementRef}
            className="overflow-hidden opacity-0 mt-6 will-change-[height,opacity]"
            style={{ height: 0 }}
          >
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex flex-wrap gap-5 justify-center px-10">
                {logoRefinement.map((item, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      refinementItemsRef.current[i] = el;
                    }}
                    className={`opacity-0 ${item.chosen ? "outline-1 -outline-offset-4 outline-red-CoralRed rounded-lg" : ""}`}
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
