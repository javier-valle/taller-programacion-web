function initPauseLoops() {
  const animatedElements = document.querySelectorAll(
    ".bl-wave, .bl-audio-vis__icon",
  );
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.style.animationPlayState = entry.isIntersecting
          ? "running"
          : "paused";
      });
    },
    { threshold: 0 },
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
    const parent = el.closest("[data-reveal]");
    if (parent) {
      const parentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const waves = entry.target.querySelectorAll(
              ".bl-wave, .bl-audio-vis__icon",
            );
            waves.forEach((w) => {
              w.style.animationPlayState = entry.isIntersecting
                ? "running"
                : "paused";
            });
          });
        },
        { threshold: 0 },
      );
      parentObserver.observe(parent);
    }
  });
}
