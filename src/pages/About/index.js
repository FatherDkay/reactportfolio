import React from 'react';
import headShot from "../../assets/About/headShot.jpg";
import Footer from "../../components/Footer";
import './aboutStyle.css';

function About() {
  return (
    <section id="about">
      <div>
        <br />
        <br />
      <h2>About Me</h2>
      <div class="container">
      <div><img src={headShot} style={{ width:"50%" }} alt="Paul Bailey head shot"></img></div>
      <div class="textBox">When one sturdy career <br></br>
Crossroads another</div>
      </div>
      </div>
      <div class="cool">
      <p>The first years of my career weren’t in development—I spent them teaching, working in administration, and supporting school districts throughout Utah and California. Supporting students with special needs while keeping both my students and my staff safe were the cornerstone of my days, and I believed it was the work I would trade my life doing.</p>
      <p><b>But then a problem created a path.</b> Early 2015, after being promoted into my first director position, I realized there was a desperate need for a school database. Students in special eduacation often have special dietary and medical needs, behavioral challenges, service schedules, and very specific data reporting requirements outlined by the federal and state governments. Teachers had a revolving suite of certification and task requirements, not to mention keeping track of the courses offerred by all of the different districts the schools served. All of it was being tracked by pencil and paper.</p> 
      <p>They had no budget. I had time in the evenings. So I rolled up my sleeves, watched A LOT of Youtube videos, and developed <b>a robust, fully functional database </b>that hundreds of students and teachers use to support their day-to-day lives right now, as you read.</p>
      <p><b>Along the way, I fell in love</b>—with development, specifically. I had accidentally unearthed a passion for coding and creating digital spaces. And try as I might, I couldn’t sew back that seam. I halved my working hours as a director, and I threw myself into the study of full stack development. I learned. I learned how much I didn’t know. And the deeper I dug, the bigger my smile grew. This work? This way of thinking? It became my home.</p>
      <p> In addition to my development obsession, I’m a theater nerd, Disney/themepark enthusiast, diet coke drinking amateur wood worker. I'm ready to leverage my experience and skills to help your project get to the next level.  Let’s [Var][1+1]=?answer: meet</p>
      </div>


      <footer>
      <Footer />
      </footer>
    </section>
  );
}

export default About;