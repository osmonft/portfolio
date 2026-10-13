"use client";

// All motion for the site, in one place. Mount once in the root layout.
// Everything lives in the entrances; hover stays quiet (underlines only).
//
// Attributes, set in the page markup:
//   data-intro="n"   plays on arrival, in order n (0, 1, 2…)
//   data-rise        plays when scrolled into view
//   data-split       on either of the above: split into lines that rise from a mask
//   data-rule        a hairline that draws from the left
//   data-sep         a short vertical divider that grows from its centre
//   data-plate       an image mount that fades in place; its <img> develops and settles from 1.025
//   data-page        on an internal <a>/<Link>: the page softens and lifts away before navigating

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "expo.out";
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function entrance(el: HTMLElement) {
  gsap.set(el, { visibility: "visible" });
  if (el.hasAttribute("data-split")) {
    const split = SplitText.create(el, { type: "lines", mask: "lines" });
    return gsap.from(split.lines, { yPercent: 115, duration: 1.3, ease: EASE, stagger: 0.09, paused: true });
  }
  if (el.hasAttribute("data-rule")) {
    return gsap.from(el, { scaleX: 0, duration: 1.4, ease: "expo.inOut", paused: true });
  }
  if (el.hasAttribute("data-sep")) {
    return gsap.from(el, { scaleY: 0, duration: 1.1, ease: "expo.inOut", paused: true });
  }
  if (el.hasAttribute("data-plate")) {
    // No wipe, no travel: the mount is already where it belongs. The picture
    // develops on it, a slow exposure with the faintest settle into focus.
    const img = el.querySelector("img");
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.9, ease: "power1.out" }, 0);
    if (img) {
      tl.fromTo(img, { opacity: 0 }, { opacity: 1, duration: 1.6, ease: "power2.inOut" }, 0.2);
      tl.fromTo(img, { scale: 1.025 }, { scale: 1, duration: 2.4, ease: "power3.out", transformOrigin: "50% 50%", clearProps: "transform" }, 0.2);
    }
    return tl;
  }
  // Default: whatever sits inside a .mask rises from behind it; otherwise a soft lift.
  const kids = el.classList.contains("mask") ? el.children : el.querySelectorAll(":scope > .mask > *");
  if (kids.length) return gsap.from(kids, { yPercent: 110, duration: 1.2, ease: EASE, stagger: 0.06, paused: true });
  return gsap.from(el, { y: 24, autoAlpha: 0, duration: 1.2, ease: EASE, paused: true });
}

export function Motion() {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useRef<Lenis | null>(null);

  // Smooth scroll, in-page anchors, and the page-leave transition: once.
  useEffect(() => {
    const reduced = reducedMotion();
    if (!reduced) {
      const l = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 });
      lenis.current = l;
      l.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => l.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    // Capture phase, so this runs before next/link's own click handler.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.("a");
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const href = a.getAttribute("href") ?? "";

      if (href.startsWith("#")) {
        const target = href === "#top" ? 0 : document.querySelector<HTMLElement>(href);
        if (target === null) return;
        e.preventDefault();
        e.stopPropagation();
        if (lenis.current) lenis.current.scrollTo(target, { duration: 1.6 });
        else if (target === 0) window.scrollTo({ top: 0, behavior: "smooth" });
        else target.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (a.hasAttribute("data-page") && !reduced) {
        e.preventDefault();
        e.stopPropagation();
        gsap.to(document.body, {
          opacity: 0, y: -16, filter: "blur(6px)", duration: 0.55, ease: "power2.in",
          onComplete: () => router.push(href, { scroll: false }),
        });
      }
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, [router]);

  // Entrances: on first load and after every route change.
  useEffect(() => {
    let alive = true;
    let removeAtEnd = () => {};
    const ctx = gsap.context(() => {});

    const start = () => {
      if (!alive) return;
      const reduced = reducedMotion();

      // Arriving from another page: start at the top, or at the #hash we were sent to.
      const hash = window.location.hash;
      const anchor = hash ? document.querySelector<HTMLElement>(hash) : null;
      lenis.current?.scrollTo(anchor ?? 0, { immediate: true, force: true });
      if (!lenis.current) window.scrollTo(0, anchor ? anchor.offsetTop : 0);

      ctx.add(() => {
        if (reduced) {
          gsap.set("[data-intro],[data-rise]", { visibility: "visible" });
          gsap.set(document.body, { opacity: 1, clearProps: "filter,transform" });
          return;
        }

        gsap.fromTo(
          document.body,
          { opacity: 0, y: 12, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power2.out", clearProps: "filter,transform" },
        );

        const intro = gsap.timeline({ delay: 0.15 });
        document.querySelectorAll<HTMLElement>("[data-intro]").forEach((el) => {
          intro.add(entrance(el).play(), (parseFloat(el.dataset.intro ?? "0") || 0) * 0.18);
        });

        const pending = new Set<gsap.core.Animation>();
        document.querySelectorAll<HTMLElement>("[data-rise]").forEach((el) => {
          const anim = entrance(el);
          pending.add(anim);
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () => {
              pending.delete(anim);
              anim.play();
            },
          });
        });
        // The last lines of a page may sit below the 90% line even at full scroll:
        // reaching the end plays whatever is still waiting.
        const atEnd = () => {
          const root = document.documentElement;
          if (window.scrollY + window.innerHeight < root.scrollHeight - 4) return;
          pending.forEach((a) => a.play());
          pending.clear();
        };
        window.addEventListener("scroll", atEnd, { passive: true });
        removeAtEnd = () => window.removeEventListener("scroll", atEnd);
        ScrollTrigger.refresh();
      });
    };

    // Wait for the web font so lines split where they will actually break.
    document.fonts.ready.then(start);

    return () => {
      alive = false;
      removeAtEnd();
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
