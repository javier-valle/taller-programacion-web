const nav = document.getElementById("mainNav");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function initNavbar() {
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle("is-scrolled", window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navMenu.querySelectorAll(".bl-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("is-open") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      navToggle.focus();
    }
  });
}

function initActiveNavHighlight() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".bl-nav__link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.style.color = "";
            link.style.background = "";
            if (
              link.getAttribute("href") === "#" + id &&
              !link.classList.contains("bl-nav__link--cta")
            ) {
              link.style.color = "var(--color-white)";
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-72px 0px -50% 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        if (navMenu.classList.contains("is-open")) {
          navMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      }
    });
  });
}

function initParallaxSubtle() {
  const hero = document.querySelector(".bl-hero__bg");
  if (!hero) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          if (scrolled < window.innerHeight) {
            hero.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  let ticking = false;
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initWhatsAppButton() {
  const btn = document.querySelector(".bl-whatsapp");
  if (!btn) return;

  btn.style.opacity = "0";
  btn.style.pointerEvents = "none";
  btn.style.transition =
    "opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
  btn.style.transform = "translateY(20px)";

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const show = window.scrollY > 400;
          btn.style.opacity = show ? "1" : "0";
          btn.style.pointerEvents = show ? "auto" : "none";
          btn.style.transform = show ? "translateY(0)" : "translateY(20px)";
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}
