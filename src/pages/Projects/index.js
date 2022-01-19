import React from 'react';
import "./projectStyle.css"
import Footer from "../../components/Footer";

function Projects() {
  return (
    <section id="projects">
<div>
        <h2 id="projects"><br /><br />Development Projects</h2>
        <div class="grid-container">
        <div class="project miniGram"><a href = "https://minigram2.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Mini-Gram</a></div>
          <div class="project runBuddy"><a href = "https://fatherdkay.github.io/run-buddy/" target = "_blank" rel="noopener noreferrer">Run Buddy</a></div>
          <div class="project scheduler"><a href="https://fatherdkay.github.io/workDayScheduler/" target = "_blank" rel = "noopener noreferrer">Workday Scheduler</a></div>
          <div class="project techBlog"><a href="https://sheltered-tundra-87517.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Tech Blog</a></div>
          <div class="project tempoFinder"><a href = "https://nicwille.github.io/group1/" target = "_blank" rel = "noopener noreferrer">Tempo Finder</a></div>
          <div class="project weather"><a href="https://fatherdkay.github.io/weatherDashboard/" target = "_blank" rel = "noopener noreferrer">Weather Dashboard</a></div>
        </div>
      </div>
      <footer>
      <Footer />
      </footer>
    </section>
  );
}

export default Projects;