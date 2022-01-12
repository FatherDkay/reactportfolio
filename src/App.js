import React, { useState } from "react";

import Header from "./components/Header"
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactForm from './pages/Contact';



function App() {
  const [currentPage, setCurrentPage] = useState("About") //hook
  function renderPage () {
    if(currentPage==="About") {
      return <About />
    } else if (currentPage==="Projects") {
      return <Projects />
    } else if (currentPage==="Contact") {
      return <ContactForm />
    }else {
      return <About />
    }
  }
  return (
    <div>
      <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage} />

      <main>
        { renderPage() }
      </main>
    </div>
  );
}

export default App;