"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { PlusIcon } from "@phosphor-icons/react";

const AccordionItem = ({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [isOpen]);

  return (
    <div className="border-b border-black-Mirage/20 dark:border-white-LinkWater/20">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 text-left cursor-pointer"
      >
        <span className="font-semibold">{label}</span>
        <span
          className="text-xs transition-transform"
          style={{ transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}
        >
          <PlusIcon size={14} weight="bold" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
      >
        <div className="pb-4 font-light">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
