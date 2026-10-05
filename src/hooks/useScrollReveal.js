import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
