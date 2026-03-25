import "./styles/CertificatesAchievements.css";

const CertificatesAchievements = () => {
  return (
    <div className="ca-section section-container" id="achievements">
      <div className="ca-container">
        <h2>
          Certificates <span>&</span>
          <br /> Achievements
        </h2>
        <div className="ca-info">
          <div className="ca-timeline">
            <div className="ca-dot"></div>
          </div>
          
          {/* Certificate 1 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/accenture/a87cff" alt="Accenture" className="ca-company-logo" />
                  <div>
                    <h4>Go for Gold Contest</h4>
                    <h5>Accenture</h5>
                  </div>
                </div>
              </div>
              <h3>Jan<br/>2026</h3>
            </div>
            <p>
              Successfully participated in and completed the Go for Gold Contest orchestrated by Accenture.
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/google/a87cff" alt="Google" className="ca-company-logo" />
                  <div>
                    <h4>Bits and Bytes of Computer Networking</h4>
                    <h5>Google</h5>
                  </div>
                </div>
              </div>
              <h3>Dec<br/>2024</h3>
            </div>
            <p>
              Completed Google's comprehensive programming providing foundational knowledge in modern computer networking.
            </p>
          </div>

          {/* Certificate 3 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/ibm/052FAD" alt="IBM" className="ca-company-logo" style={{ backgroundColor: '#ffffff', padding: '5px', borderRadius: '4px' }} />
                  <div>
                    <h4>Intro to Hardware and OS</h4>
                    <h5>IBM</h5>
                  </div>
                </div>
              </div>
              <h3>Dec<br/>2024</h3>
            </div>
            <p>
              Mastered foundational concepts in hardware components and operating system management through IBM's certification program.
            </p>
          </div>

          {/* Achievement 1 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/leetcode/a87cff" alt="Problem Solving" className="ca-company-logo" />
                  <div>
                    <h4>175+ DSA Problems Solved</h4>
                    <h5>Problem Solving</h5>
                  </div>
                </div>
              </div>
              <h3>Jan<br/>2026</h3>
            </div>
            <p>
              Solved 175+ DSA problems across platforms, including 100+ on LeetCode, covering core topics like Graphs, DP, Trees, and Linked Lists.
            </p>
          </div>

          {/* Achievement 2 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/leetcode/a87cff" alt="LeetCode" className="ca-company-logo" />
                  <div>
                    <h4>LeetCode Contest Rating: 1497</h4>
                    <h5>LeetCode</h5>
                  </div>
                </div>
              </div>
              <h3>Feb<br/>2026</h3>
            </div>
            <p>
              Achieved a LeetCode Contest Rating of 1497, consistently demonstrating strong competitive programming performance.
            </p>
          </div>

          {/* Achievement 3 */}
          <div className="ca-info-box">
            <div className="ca-info-in">
              <div className="ca-role">
                <div className="ca-role-header">
                  <img src="https://cdn.simpleicons.org/codechef/a87cff" alt="CodeChef" className="ca-company-logo" />
                  <div>
                    <h4>CodeChef Contest Rating: 855</h4>
                    <h5>CodeChef</h5>
                  </div>
                </div>
              </div>
              <h3>Jan<br/>2026</h3>
            </div>
            <p>
              Secured a CodeChef Contest Rating of 855 through active participation and problem solving in rated algorithmic contests.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CertificatesAchievements;
