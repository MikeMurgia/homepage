import React from 'react';
import logo from './logo.svg';
import './App.css';

const Experience = [
  {
    title: "Technical College Intern",
    company: "Northrop Grumman",
    date: "May 2025 - Present",
    description: "Developing web applications using C# and ASP.NET.",
  }, 
  {
    title: "B.S. Computer Science",
    company: "Florida State University",
    date: "August 2023 - May 2027",
    description: "Minor in Data Analytics & Mathematics",
  }
];

const Projects = [
  {
    title: 'Exoplanet Detector',
    description: 'A machine learning model that detects exoplanets from light curves.',
    href: 'https://api.happymeadow-cb2a8313.eastus.azurecontainerapps.io/',
  }
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-name">Michael Murgia</span>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#showcase">Showcase</a>
        </nav>
      </header>
 
      <main>
        <section id="about" className="section">
          <h1>Michael Murgia</h1>
          <div className="about-row">
            <div className="avatar">
              <img src={`${process.env.PUBLIC_URL}/DSC_0092.JPG`} alt="Michael Murgia" />              
            </div>
            <p>
              I'm a Computer Science student at Florida State University, with experience in software engineering and data analytics. 
            </p>
          </div>
        </section>
 
        <section id="experience" className="section">
          <h2>Experience</h2>
          <ul className="plain-list">
            {Experience.map((item) => (
              <li key={item.title}>
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="org">{item.company}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
 
        <section id="showcase" className="section">
          <h2>Showcase</h2>
          <ul className="plain-list">
            {Projects.map((project) => (
              <li key={project.title}>
                <h3>
                  <a href={project.href}>{project.title}</a>
                </h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
 
    </div>
  );
}
 
export default App;
