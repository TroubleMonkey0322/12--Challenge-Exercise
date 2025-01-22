import React from 'react';

function Footer() {
  const Footer: React.FC = () => {
    return (
      <footer style={footerStyle}>
        <div style={linkStyle}>
          <a href="https://github.com/TroubleMonkey0322/Project-1---Quiz.git" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} /> GitHub
          </a>
        </div>
        <div style={linkStyle}>
          <a href="will update with linkedIn info" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> LinkedIn
          </a>
        </div>
        <div style={linkStyle}>
          <a href="will update with stack overflow info" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow size={30} /> Stack Overflow
          </a>
        </div>
      </footer>
    );
  };
}

export default Footer