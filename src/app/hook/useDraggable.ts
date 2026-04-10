import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

const MAX_Z = 40;

export function useDraggable(boundsId: string) {
  const topZ = useRef(1);

  useEffect(() => {
    const instances = Draggable.create("[data-draggable]", {
      bounds: `#${boundsId}`,
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
      dragResistance: 0,

      onPress() {
        topZ.current = Math.min(topZ.current + 1, MAX_Z);
        this.target.style.zIndex = String(topZ.current);
      },

      onDrag() {
        const rotation = gsap.utils.clamp(-20, 20, this.velocityX * 0.05);
        gsap.to(this.target, {
          rotation,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      },

      onRelease() {
        const currentScale = gsap.getProperty(this.target, "scale") as number;
        const rotation = gsap.utils.clamp(-30, 30, this.velocityX * 0.05);

        gsap.to(this.target, {
          scale: currentScale > 1.25 ? currentScale : 1,
          rotation,
          duration: 0.3,
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.to(this.target, {
          rotation: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
          delay: 0.3,
        });
      },
    });

    return () => instances.forEach((d) => d.kill());
  }, [boundsId]);
}