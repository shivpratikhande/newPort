import React from 'react'
import "./Css/Skills.css"

function Skills() {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <hr />

      <div className="webdev">
      <h2>Web-development</h2>
      <p>- HTML5, CSS3, JavaScript (ES6+)</p>
      <p>- React.js, Node.js, Express</p>
      <p>- RESTful API design and implementation</p>
      <p>- Responsive Web Design</p>
      <p>- Authentication And Authorisation</p>
      </div>
      <hr />

      <div className="language">
        <h2>Programming-language</h2>
        <p>- C</p>
        <p>- C++</p>
        <p>- javascript</p>
        <p>- python</p>
      </div>
      <hr />

      <div className="database">
        <h2>Database</h2>
        <p>- MongoDB</p>
        <p>- MySQL</p>
      </div>
      <hr />

      <div className="design">
        <h2>Design Tools</h2>
        <p>- Figma</p>
        <p>- Canva</p>
      </div>
      <hr />


    <div className="softSkill">
      <h2>Soft Skills</h2>
      <p>- Team collaboration</p>
      <p>- Problem Solving</p>
      <p>- Leadership</p>
      <p>- Adaptability</p>

    </div>
    <hr />


    </div>
  )
}

export default Skills
