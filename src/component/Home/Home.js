import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import WorkProcess from "../WorkProcess/WorkProcess";

function Home() {
  return (
    <div>
      <h3>This is main part start</h3>
      {/* <Banner /> */}
      <Services />
      <About />
      <WorkProcess />
      <Skills />
    </div>
  );
}

export default Home;
