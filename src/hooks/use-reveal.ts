import { useEffect } from "react";

/**
 * Attaches a single IntersectionObserver that reveals elements
 * with the `reveal` utility class by adding `reveal-in` on first
 * intersection. Respects prefers-reduced-motion via CSS.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || nodes.length === 0) {
      nodes.forEach((n) => n.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
