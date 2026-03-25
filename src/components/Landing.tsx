import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>SHIVANSH</h1>
            <h1>
              <span>TEOTIA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2" style={{ flexDirection: "column", gap: "10px" }}>
              <div className="landing-h2-1">Data</div>
              <div className="landing-h2-1">Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
