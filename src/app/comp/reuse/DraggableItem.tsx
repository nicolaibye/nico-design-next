"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MIN_SCALE = 0.5;
const MAX_SCALE = 4;

const DraggableItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isScaled = useRef(false);
  const currentScale = useRef(1);
  const pinchStartDistance = useRef(0);
  const pinchStartScale = useRef(1);

  // Desktop double-click
  const handleDoubleClick = () => {
    if (!ref.current) return;
    isScaled.current = !isScaled.current;
    const scale = isScaled.current ? 2 : 1;
    currentScale.current = scale;

    gsap.to(ref.current, {
      scale,
      zIndex: isScaled.current ? 5 : 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  // Click outside to reset
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      isScaled.current
    ) {
      isScaled.current = false;
      currentScale.current = 1;
      gsap.to(ref.current, {
        scale: 1,
        zIndex: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Pinch-to-zoom
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getDistance = (touches: TouchList) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      pinchStartDistance.current = getDistance(e.touches);
      pinchStartScale.current = currentScale.current;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      e.preventDefault(); // prevent page scroll during pinch

      const distance = getDistance(e.touches);
      const delta = distance / pinchStartDistance.current;
      const next = gsap.utils.clamp(
        MIN_SCALE,
        MAX_SCALE,
        pinchStartScale.current * delta,
      );

      currentScale.current = next;
      isScaled.current = next > 1;

      gsap.to(el, {
        scale: next,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        // Snap back if pinched below 1
        if (currentScale.current < 1) {
          currentScale.current = 1;
          isScaled.current = false;
          gsap.to(el, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.5)" });
        }
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false }); // passive: false to allow preventDefault
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-draggable
      onDoubleClick={handleDoubleClick}
      className={`cursor-grab active:cursor-grabbing height-fit ${className} duration-[0ms]!`}
    >
      {children}
    </div>
  );
};

export default DraggableItem;