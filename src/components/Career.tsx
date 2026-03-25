import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>Lord Buddha Public School, Kota</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary education with a focus on Science and
              Mathematics at Lord Buddha Public School, Kota, Rajasthan.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Manager</h4>
                <h5>Untangle – Student-led Organization</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed operations for 10+ events including hackathons, workshops,
              and panel discussions. Streamlined planning processes, reducing
              event preparation time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science and
              Engineering with CGPA 7.26. Focused on data science, machine
              learning, and cloud computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
