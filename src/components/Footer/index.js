import React from 'react';
import "./footerStylesheet.css"

function Footer() {

  return (
    <footer>
      <div>
      <div>
        Reach Me At:
        <a class="footerLink" href="https://github.com/FatherDkay"  target = "_blank" rel = "noopener noreferrer">
      Github</a>
        <a class="footerLink" href="www.linkedin.com/in/pdbailey0213"  target = "_blank" rel = "noopener noreferrer">
      Linkedin
        </a>
        <a class="footerLink" href="https://www.facebook.com/paul.bailey.10236"  target = "_blank" rel = "noopener noreferrer">
      Facebook
        </a>
        <a class="footerLink" href="mailto:paul.d.bailey@hotmail.com">Email</a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;