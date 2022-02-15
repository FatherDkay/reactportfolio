import React from 'react';
import "./navStyle.css"

function Nav( props ) {

  return (
    <nav class="topnav">
    <ul className="flex-row">
      <li className="mx-2">
        <button onClick={() => props.setCurrentPage ("About")}>
          About Me
        </button>
      </li>
      <li className="mx-2">
        <button onClick={() => props.setCurrentPage ("Projects")}>
          Projects
        </button>
      </li>
      {/* <li className="mx-2">
      <button onClick={() => props.setCurrentPage ("Contact")}>
        Contact Me
        </button>
      </li> */}
      <li className="mx-2">
      <a class="linkButton" href="https://drive.google.com/file/d/193cpT0_Hjcg_zMG0r-c8Oc3Grp2Y62qT/view?usp=sharing"  target = "_blank" rel = "noopener noreferrer"onClick={() => props.setCurrentPage ("About")}>
      Resume
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;