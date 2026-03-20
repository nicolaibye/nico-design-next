import { useEffect, useState } from "react";

export const useHeroPosition = () => {
  const [style, setStyle] = useState({
    width: 1500 / 2,
    height: 1552 / 2,
    x: -450,
    y: 800,
  });

  useEffect(() => {
    const calculate = () => {
      const container = document.getElementById("hero-container");
      const heroTarget = document.getElementById("hero-target");

      if (!container || !heroTarget) return;

      const containerRect = container.getBoundingClientRect();

      // ORIGINAL IMAGE SIZE
      const img = {
        width: 1500,
        height: 1552,
      };

      // YOUR EYE POSITION (px in original image)
      const eye = {
        x: 1050.6,
        y: 312.9,
      };

      // ---- STEP 1: SCALE IMAGE LIKE "COVER" ----
      const scale = Math.max(
        containerRect.width / img.width,
        containerRect.height / img.height,
      );

      const scaled = {
        width: img.width * scale * 1.05,
        height: img.height * scale * 1.05,
      };

      // ---- STEP 2: FIND "O" POSITION ----
      const text = heroTarget.textContent || "";
      const index = text.toLowerCase().indexOf("o");
      if (index === -1) return;

      const range = document.createRange();
      const textNode = heroTarget.firstChild;

      if (!textNode) return;

      range.setStart(textNode, index);
      range.setEnd(textNode, index + 1);

      const oRect = range.getBoundingClientRect();

      const oCenter = {
        x: oRect.left + oRect.width / 2,
        y: oRect.top + oRect.height / 2,
      };

      // ---- STEP 3: WHERE IS THE EYE AFTER SCALING? ----
      const eyeScaled = {
        x: eye.x * scale,
        y: eye.y * scale,
      };

      // ---- STEP 4: CENTER IMAGE FIRST ----
      const baseOffset = {
        x: (containerRect.width - scaled.width) / 2,
        y: (containerRect.height - scaled.height) / 2,
      };

      // ---- STEP 5: CURRENT EYE SCREEN POSITION ----
      const eyeScreen = {
        x: containerRect.left + baseOffset.x + eyeScaled.x,
        y: containerRect.top + baseOffset.y + eyeScaled.y,
      };

      // ---- STEP 6: DELTA ----
      const delta = {
        x: oCenter.x - eyeScreen.x,
        y: oCenter.y - eyeScreen.y,
      };

      // ---- FINAL POSITION ----
      setStyle({
        width: scaled.width,
        height: scaled.height,
        x: baseOffset.x + delta.x,
        y: baseOffset.y + delta.y,
      });
    };

    calculate();
  }, []);

  return style;
};

export default useHeroPosition;
