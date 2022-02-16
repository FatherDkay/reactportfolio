import React from 'react';
import "./headerStyle.css"
import Nav from "../Nav";

function Header( props ) {

  return (
    <header>
      <div class ="headerBox">
        Paul Bailey, MA.Ed/SPE, Full Stack Developer
        <div>
        <Nav currentPage= { props.currentPage } setCurrentPage = {props.setCurrentPage } class ="topNav"/>
    </div>
    </div>
    </header>
  );
}

export default Header;