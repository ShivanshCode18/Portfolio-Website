import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import gsap from "gsap";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        
        const loaderPhoto = document.querySelector('.profile-photo-loader') as HTMLElement;
        const navbarPhoto = document.querySelector('.navbar-photo') as HTMLElement;
        
        if (loaderPhoto && navbarPhoto) {
          const loaderRect = loaderPhoto.getBoundingClientRect();
          const navRect = navbarPhoto.getBoundingClientRect();
          
          const clonedPhoto = loaderPhoto.cloneNode(true) as HTMLElement;
          document.body.appendChild(clonedPhoto);
          
          clonedPhoto.style.position = 'fixed';
          clonedPhoto.style.top = `${loaderRect.top}px`;
          clonedPhoto.style.left = `${loaderRect.left}px`;
          clonedPhoto.style.width = `${loaderRect.width}px`;
          clonedPhoto.style.height = `${loaderRect.height}px`;
          clonedPhoto.style.margin = '0';
          clonedPhoto.style.zIndex = '99999999';
          
          loaderPhoto.style.opacity = '0';

          const deltaX = navRect.left - loaderRect.left;
          const deltaY = navRect.top - loaderRect.top;
          
          gsap.to(clonedPhoto, {
            x: deltaX,
            y: deltaY,
            width: navRect.width,
            height: navRect.height,
            duration: 0.9,
            ease: "power3.inOut",
            onComplete: () => {
              clonedPhoto.remove();
            }
          });
        }

        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable" style={{ opacity: 0, pointerEvents: "none" }}>
          <span className="logo-face">🧑‍💻</span>
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> A Data Engineer</span> <span>A Data Engineer</span>
            <span> A Data Engineer</span> <span>A Data Engineer</span>
          </Marquee>
        </div>
        <img src="/images/profile.jpeg" className="profile-photo-loader" alt="Profile" />
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
