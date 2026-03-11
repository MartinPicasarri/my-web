import React from 'react';
import { Element } from 'react-scroll'; 
import './Skill.css'; 

const Skill = () => {
  const frontEndSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Git/GitHub',
    'Sass/SCSS',
    'Responsive Design',
  ];

  return (
    <Element name="skill" className="skill-section"> 
      <h1>MIS HABILIDADES</h1>
      <h2 className="skill-subtitle">Desarrollador Front-End</h2>
      <div className="skills-container">
        {frontEndSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <p className="skills-description">
        Soy un desarrollador Front-End con experiencia en la creación de interfaces de usuario atractivas y responsivas. Domino las tecnologías clave para construir experiencias web modernas.
      </p>
    </Element>
  );
};

export default Skill;