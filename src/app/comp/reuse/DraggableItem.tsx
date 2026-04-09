"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import React from "react";

const DraggableItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isScaled = useRef(false);

  const handleDoubleClick = () => {
    if (!ref.current) return;
    isScaled.current = !isScaled.current;

    gsap.to(ref.current, {
      scale: isScaled.current ? 2 : 1,
      zIndex: isScaled.current ? 5 : 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      isScaled.current
    ) {
      isScaled.current = false;
      gsap.to(ref.current, {
        scale: 1,
        zIndex: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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
