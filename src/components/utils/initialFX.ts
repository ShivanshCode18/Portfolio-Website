import gsap from "gsap";

// Simple text splitting utility (replaces premium SplitText plugin)
function splitTextIntoSpans(
  elements: string | string[],
  _options?: { type?: string; linesClass?: string }
): HTMLElement[] {
  const selectors = Array.isArray(elements) ? elements : [elements];
  const allSpans: HTMLElement[] = [];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      const element = el as HTMLElement;
      const text = element.textContent || "";
      element.innerHTML = "";

      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.style.display = "inline-block";
        if (char === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = char;
        }
        element.appendChild(span);
        allSpans.push(span);
      });
    });
  });

  return allSpans;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingChars = splitTextIntoSpans(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  var landingChars2 = splitTextIntoSpans(".landing-h2-1", {
    type: "chars,lines",
    linesClass: "split-h2",
  });
  gsap.fromTo(
    landingChars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}


