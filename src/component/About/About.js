import React, { useState } from "react";
import decor1 from "../../images/icons/decor-1.png";
import video from "../../images/background/video-1.jpg";
import SingleAbout from "./SingleAbout";
function About() {
  const [activeOne, setActiveOne] = useState("active-btn");
  const [activeTwo, setActiveTwo] = useState("");
  const [activeThree, setActiveThree] = useState("");
  const firstClick = () => {
    // setActiveOne("active-btn");
    setActiveTwo("");
    setActiveThree("");
  };
  const secondClick = () => {
    setActiveTwo("active-btn");
    setActiveOne("");
    setActiveThree("");
  };
  const thirdClick = () => {
    setActiveThree("active-btn");
    setActiveOne("");
    setActiveTwo("");
  };
  const about = [
    {
      title: "About Company",
      firstHeading: "Mission is to bring the power of AI to every business",
      description:
        " As a solution providing company we offer a wide range of consulting, development & quality services with 100% satisfaction.",
      ideaPhysical: "Idea of denouncing pleasure & praising",
      everPhysical: "Ever undertakes laborious physical",
      avoidsPain: "Avoids a pain that produces no resultant",
      greatTruth: "Great explorer of the real truth",
      firstStyleImage: decor1,
      secondStyleImage: video,
      icon: "flaticon-play-button",
    },
  ];
  return (
    <section className='about-section'>
      <div className='auto-container'>
        <div className='tabs-box'>
          <div className='tabs-content' id='content_block_01'>
            <div className='tab active-tab' id='tab-1'>
              <div className='row clearfix'>
                {about.map((singleAbout, i) => (
                  <SingleAbout key={i} about={singleAbout} />
                ))}
              </div>
            </div>
            <div className='tab' id='tab-2'>
              <div className='row clearfix'>
                {about.map((singleAbout, i) => (
                  <SingleAbout key={i} about={singleAbout} />
                ))}
              </div>
            </div>
            <div className='tab' id='tab-3'>
              <div className='row clearfix'>
                {about.map((singleAbout, i) => (
                  <SingleAbout key={i} about={singleAbout} />
                ))}
              </div>
            </div>
          </div>
          <div className='tab-btn-box'>
            <ul className='tab-btns tab-buttons clearfix'>
              <li
                className={`tab-btn ${activeOne}`}
                onClick={firstClick}
                data-tab='#tab-1'
              >
                {/* <li className='tab-btn' onClick={()=> setActive('active-btn')} data-tab='#tab-1'> */}
                <h4>Our Mission</h4>
              </li>
              <li
                className={`tab-btn ${activeTwo}`}
                onClick={secondClick}
                data-tab='#tab-2'
              >
                <h4>Our Vison</h4>
              </li>
              <li
                className={`tab-btn ${activeThree}`}
                onClick={thirdClick}
                data-tab='#tab-3'
              >
                <h4>Core Values</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
