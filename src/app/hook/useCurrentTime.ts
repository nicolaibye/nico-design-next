"use client";
import { useState, useEffect } from "react";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00");

  useEffect(() => {
    // This ensures the effect only runs on the client
    let mounted = true;

    const updateTime = () => {
      if (!mounted) return;

      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Oslo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const timeString = new Intl.DateTimeFormat("no-NO", options).format(now);
      setCurrentTime(timeString);
    };

    // Initial update
    updateTime();

    // Set up interval
    const interval = setInterval(updateTime, 1000);

    // Cleanup
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []); // Empty dependency array is correct here

  return currentTime;
};
