import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  name: string;
  category: string;
  tools: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "01",
    name: "Social Media ETL Pipeline",
    category: "Data Engineering",
    tools: "Python, Apache Airflow, AWS EC2, S3, Twitter API",
    link: "https://github.com/ShivanshCode18",
    image: "/images/etl_pipeline.png"
  },
  {
    id: "02",
    name: "Product Safety Analyzer",
    category: "Machine Learning",
    tools: "Python, Scikit Learn, Logistic Regression, Random Forest",
    link: "https://github.com/ShivanshCode18",
    image: "/images/ml_safety.png"
  },
  {
    id: "03",
    name: "Page Replacement Simulator",
    category: "Systems / GUI",
    tools: "Python, Tkinter, Matplotlib, FIFO, LRU, Optimal",
    link: "https://github.com/ShivanshCode18/Efficient-Page-Replacement-Algorithm-Simulator",
    image: "/images/os_simulator.png"
  },
  {
    id: "04",
    name: "EVScope – EV Adoption Analysis",
    category: "Data Analytics",
    tools: "Python, Pandas, Seaborn, Folium, KMeans Clustering",
    link: "https://github.com/ShivanshCode18/-Data-Analysis-on-EV-Population-Dataset-using-Python",
    image: "/images/evscope.png"
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let translateX: number = 0;
    let timeline: gsap.core.Timeline;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
