import React from 'react';
import './Style.css'; // Archivo de estilos

const skills = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React', percentage: 75 },
  { name: 'Redux', percentage: 100},
  { name: 'NodeJS', percentage: 75},
  { name: 'Express', percentage: 100},
  { name: 'MySql', percentage: 70},
  { name: 'Git', percentage: 85},
  { name: 'GitHub', percentage: 85},
  { name: 'Trello', percentage: 100},
  { name: 'Jira', percentage: 60},
];

const VistosoCard = () => {
  // Dividir las habilidades en grupos de cuatro
  const groupedSkills = skills.reduce((acc, skill, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(skill);
    return acc;
  }, []);

  return (
    <div className="vistoso-card">
      <div className="vistoso-card-content">
        <h2>Mis Skill</h2>
        {groupedSkills.map((group, groupIndex) => (
          <div className="skill-row" key={groupIndex}>
            {group.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-circle">
                  <div
                    className="skill-circle-fill"
                    style={{ transform: `rotate(${(skill.percentage / 100) * 360}deg)` }}
                  ></div>
                  <div className="skill-circle-text">
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistosoCard;
