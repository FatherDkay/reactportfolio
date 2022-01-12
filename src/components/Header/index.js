import React from 'react';
import "./headerStyle.css"
import Nav from "../Nav";
function Header( props ) {

  return (
    <header>
      <div>
        Paul D. Bailey, MA.Ed/SPE </div>
        <div>
        <Nav currentPage= { props.currentPage } setCurrentPage = {props.setCurrentPage } class ="topNav"/>
    </div>
    </header>
  );
}

export default Header;