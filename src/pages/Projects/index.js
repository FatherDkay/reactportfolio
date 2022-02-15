import React from 'react';
import "./projectStyle.css"
import Footer from "../../components/Footer";

function Projects() {
  return (
    <section id="projects">
<div>
        <h2 id="projects"><br /><br />Development Projects</h2>
        <div class="grid-container">
        <div class="project access tooltip col-7"><a href = "https://fatherdkay.github.io/accessInfo/" target = "_blank" rel = "noopener noreferrer">Microsoft Access</a>
        <span class="tooltiptext">Informaiton and screenshots for my Microsoft Access projects</span></div>
        <div class="project employeeTracker tooltip col-7"><a href = "https://drive.google.com/file/d/11UFXMedNR5GNwYkOE5Vshi3uurcTwdUN/view?usp=sharing" target = "_blank" rel = "noopener noreferrer">Employee Tracker</a>
        <span class="tooltiptext">Video walkthrough of my MySQL terminal based system</span></div>        
        <div class="project miniGram tooltip col-7"><a href = "https://minigram2.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Mini-Gram</a>
        <span class="tooltiptext">Group project 2.  I built the backend with MySQL</span></div>
          <div class="project runBuddy tooltip col-7"><a href = "https://fatherdkay.github.io/run-buddy/" target = "_blank" rel="noopener noreferrer">Run Buddy</a>
          <span class="tooltiptext">HTML, CSS example</span></div>
          <div class="project scheduler tooltip col-7"><a href="https://fatherdkay.github.io/workDayScheduler/" target = "_blank" rel = "noopener noreferrer">Workday Schedule</a>
          <span class="tooltiptext">HTML site using JavaScript to dynamically generate content</span></div>
          <div class="project techBlog tooltip col-7"><a href="https://sheltered-tundra-87517.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">Tech Blog</a>
          <span class="tooltiptext">MySQL backend, express handlebars front end, bcrypt, session for security, sequelize</span></div>
          <div class="project tempoFinder tooltip col-7"><a href = "https://nicwille.github.io/group1/" target = "_blank" rel = "noopener noreferrer">Tempo Finder</a>
          <span class="tooltiptext">Group project 1.  API fetch focused project</span></div>
          <div class="project weather tooltip col-7"><a href="https://fatherdkay.github.io/weatherDashboard/" target = "_blank" rel = "noopener noreferrer">Weather Info</a>
          <span class="tooltiptext">HTML with dynamic contenct created with JavaScript and API fetch functions to hanlde contenct</span></div>
          <div class="project quack tooltip col-7"><a href="https://git.heroku.com/quackchat-project3.git" target = "_blank" rel = "noopener noreferrer">Quack Chat</a>
          <span class="tooltiptext">Group project 3.  I worked on the back end using graphql.  Front end react.  Note:  Project did not deploy correclty.  Troubleshooting in progress</span></div>
        </div>
      </div>
      <footer>
      <Footer />
      </footer>
    </section>
  );
}

export default Projects;