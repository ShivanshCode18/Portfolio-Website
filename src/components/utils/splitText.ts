import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simple text splitting utility (replaces premium SplitText plugin)
function splitTextIntoSpans(
  element: HTMLElement,
  type: "chars" | "words" | "lines" = "chars"
): HTMLElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";
  const spans: HTMLElement[] = [];

  if (type === "chars" || type === "words") {
    const words = text.split(/\s+/);
    words.forEach((word, wordIndex) => {
      if (type === "words") {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        span.textContent = word;
        element.appendChild(span);
        spans.push(span);
      } else {
        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.style.display = "inline-block";
          span.textContent = char;
          element.appendChild(span);
          spans.push(span);
        });
      }
      if (wordIndex < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
    });
  }

  return spans;
}

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  originalHTML?: string;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      if (para.originalHTML) para.innerHTML = para.originalHTML;
    }

    para.originalHTML = para.innerHTML;
    const words = splitTextIntoSpans(para, "words");

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      if (title.originalHTML) title.innerHTML = title.originalHTML;
    }
    title.originalHTML = title.innerHTML;
    const chars = splitTextIntoSpans(title, "chars");

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
