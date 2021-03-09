import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CaseSection from "../CaseSection/CaseSection";
import ClientSection from "../ClientSection/ClientSection";
import Footer from "../Footer/Footer";
import FunSection from "../FunSection/FunSection";
import Industriessection from "../IndustriesSection/Industriessection";
import NewsSection from "../NewsSection/NewsSection";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Testimonial from "../Testimonial/Testimonial";
import WorkProcess from "../WorkProcess/WorkProcess";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <WorkProcess />
      <Industriessection />
      <Skills />
      <Testimonial />
      <CaseSection />
      <FunSection />
      <NewsSection />
      <ClientSection />
      <Footer />
    </>
  );
}

export default Home;
