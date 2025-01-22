import React from 'react';

const Resume = () => {
    const proficiencies = [
        'JavaScript',
        'React',
        'Node.js',
        'CSS',
        'HTML',
        'SQL',
        'Git',
        'TypeScript',
      ];
};

return (
    <div>
      <h2>Resume</h2>
      <a href="will add path to resume" download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </div>
  );


export default Resume;