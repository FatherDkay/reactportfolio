import React from 'react';
import "./navStyle.css"

function Nav( props ) {

  return (
    <nav class="topnav">
    <ul className="flex-row">
      <li class="topPad mx-3">
        <button onClick={() => props.setCurrentPage ("About")}>
          About Me
        </button>
      </li>
      <li className="topPad mx-3">
        <button onClick={() => props.setCurrentPage ("Projects")}>
          Projects
        </button>
      </li>
      <li className="topPad mx-3">
      <a href="https://drive.google.com/file/d/1OIOGOpDTMiN3LK23RoeVP6e5FEso864-/view?usp=sharing"  target = "_blank" rel = "noopener noreferrer"> <button>Resume</button></a>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;