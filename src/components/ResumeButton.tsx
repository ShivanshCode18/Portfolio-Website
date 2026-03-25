import './styles/ResumeButton.css';
import resumePdf from '../assets/Shivansh_Teotia_Resume.pdf';

const ResumeButton = () => {
  return (
    <a 
      href={resumePdf} 
      download="Shivansh_Teotia_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-download-btn"
      aria-label="Download Resume"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="resume-icon"
      >
        <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm9-2v6H3v-6H1v8h22v-8h-2z" />
      </svg>
      <span>Resume</span>
    </a>
  );
};

export default ResumeButton;
