import React, { useState } from 'react';
import "./navStyle.css"
function Nav( props ) {


  return (
    <nav class="topnav">
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#" onClick={() => props.setCurrentPage ("About")}>
          About me
        </a>
      </li>
      <li className="mx-2">
        <a href="#"onClick={() => props.setCurrentPage ("Projects")}>
          Projects
        </a>
      </li>
      <li className="mx-2">
      <a href="#"onClick={() => props.setCurrentPage ("Contact")}>
        Contact Me
        </a>
      </li>
      <li className="mx-2">
      <a href="https://drive.google.com/file/d/1bkh2E-NiZv-gUdzFNQ0Rr4LYvmjV7NoS/view?usp=sharing"  target = "_blank" rel = "noopener noreferrer"onClick={() => props.setCurrentPage ("About")}>
      Resume
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default Nav;