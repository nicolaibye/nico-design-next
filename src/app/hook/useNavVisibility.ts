import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DURATION = 0.3;
const EASE = "none";

export function useNavVisibility() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const desktopNav = document.getElementById("desktop-nav");
    const tabletNav = document.getElementById("tablet-nav");
    const mobileButton = document.getElementById("mobile-nav-button");

    const heroNav = document.getElementById("hero-nav");

    const hide = () => {
      if (desktopNav)
        gsap.to(desktopNav, { x: 100, duration: DURATION, ease: EASE });
      if (tabletNav)
        gsap.to(tabletNav, { y: 100, duration: DURATION, ease: EASE });
      if (mobileButton)
        gsap.to(mobileButton, { y: 100, duration: DURATION, ease: EASE });
    };

    const show = () => {
      if (desktopNav)
        gsap.to(desktopNav, { x: 0, duration: DURATION, ease: EASE });
      if (tabletNav)
        gsap.to(tabletNav, { y: 0, duration: DURATION, ease: EASE });
      if (mobileButton)
        gsap.to(mobileButton, { y: 0, duration: DURATION, ease: EASE });
    };

    const ctx = gsap.context(() => {
      gsap.set(desktopNav, isHome ? { x: 100 } : { x: 0 });
      gsap.set(tabletNav, isHome ? { y: 100 } : { y: 0 });
      gsap.set(mobileButton, isHome ? { y: 100 } : { y: 0 });

      if (heroNav && isHome) {
        ScrollTrigger.create({
          trigger: heroNav,
          start: "bottom top",
          onEnter: hide,
          onLeave: show,
          onEnterBack: show,
          onLeaveBack: hide,
        });
      }
    });

    return () => ctx.revert();
  }, [pathname, isHome]);
}
