import React from "react";
import shape4 from "../../images/shape/shape-4.png";
import decor1 from "../../images/icons/decor-1.png";
import illastration1 from "../../images/resource/illastration-1.png"

function Skills() {
  return (
    <section className='skills-section'>
      <div
        className='pattern-layer'
        style={{backgroundImage: `url(${shape4})`}}
      ></div>
      <div className='auto-container'>
        <div className='row clearfix'>
          <div className='col-lg-6 col-md-6 col-sm-12 image-column'>
            <div
              className='image-box wow slideInLeft'
              data-wow-delay='200ms'
              data-wow-duration='1500ms'
            >
              <figure className='image js-tilt'>
                  {/* script.js file 554  */}
                <img src={illastration1} alt='' />
              </figure>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 content-column'>
            <div id='content_block_02'>
              <div className='content-box'>
                <div className='sec-title text-left'>
                  <p>Skills & Facts</p>
                  <h2>We keep our self updated with latest trends</h2>
                  <div
                    className='decor'
                    style={{backgroundImage: `url(${decor1})`}}
                  ></div>
                </div>
                <div className='text'>
                  <p>
                    As a solution providing company we offer a range consulting,
                    development quality testing services with 100% satisfaction.
                  </p>
                </div>
                <div className='inner-box'>
                  <div className='progress-box'>
                    <h5>Data Consulting</h5>
                    <div className='icon-box'>
                      <i className='flaticon-chat'></i>
                    </div>
                    <div className='bar'>
                      <div className='bar-inner count-bar' data-percent='62%'>
                        <div className='count-text'>62%</div>
                      </div>
                    </div>
                  </div>
                  <div className='progress-box'>
                    <h5>Big Data & BI</h5>
                    <div className='icon-box'>
                      <i className='flaticon-cloud-computing'></i>
                    </div>
                    <div className='bar'>
                      <div className='bar-inner count-bar' data-percent='89%'>
                        <div className='count-text'>89%</div>
                      </div>
                    </div>
                  </div>
                  <div className='progress-box'>
                    <h5>Predictive Analysis</h5>
                    <div className='icon-box'>
                      <i className='flaticon-analysis-1'></i>
                    </div>
                    <div className='bar'>
                      <div className='bar-inner count-bar' data-percent='75%'>
                        <div className='count-text'>75%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
