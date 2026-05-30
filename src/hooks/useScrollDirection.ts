"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  scrollDirection: "up" | "down";
  scrollY: number;
  pastHero: boolean;
}

export default function useScrollDirection(heroThreshold = 100): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollDirection: "down",
    scrollY: 0,
    pastHero: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      setScrollState({
        scrollDirection: direction,
        scrollY: currentScrollY,
        pastHero: currentScrollY > heroThreshold,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroThreshold]);

  return scrollState;
}
