import React from "react";
import caseImageOne from "../../images/gallery/case-1.png";
import decor1 from "../../images/icons/decor-1.png";
import SingleCaseSection from "./SingleCaseSection";

function CaseSection() {
  const caseSection = [
    {
      title: "Banking & Finance",
      description: "Consulting on invoice data capture",
      image: caseImageOne,
    },
    {
      title: "Entertainment",
      description: "Automate feedback analysis",
      image: caseImageOne,
    },
    {
      title: "Banking & Finance",
      description: "Big data processing implementation",
      image: caseImageOne,
    },
    {
      title: "Healthcare",
      description: "BI implementation for baby care App",
      image: caseImageOne,
    },
  ];
  return (
    <section className='case-section'>
      <div className='auto-container'>
        <div className='inner-container'>
          <div className='sec-title text-center'>
            <p>Case Studies</p>
            <h2>
              What our clients say about our
              <br />
              awesome solutions
            </h2>
            <div
              className='decor'
              style={{ backgroundImage: `url(${decor1})` }}
            ></div>
          </div>
          <div className='row clearfix'>
            {caseSection.map((singleCaseSection, index) => (
              <SingleCaseSection key={index} caseSection={singleCaseSection} />
            ))}
            {/* <div className='col-lg-3 col-md-6 col-sm-12 case-block'>
              <div
                className='case-block-one wow fadeInUp'
                data-wow-delay='00ms'
                data-wow-duration='1500ms'
              >
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a
                      href='assets/images/gallery/case-1.png'
                      className='lightbox-image'
                      data-fancybox='gallery'
                    >
                      <img src='assets/images/gallery/case-1.png' alt='' />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <p>Banking & Finance</p>
                    <h4>
                      <a href='project-details.html'>
                        Consulting on invoice data capture
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 case-block'>
              <div
                className='case-block-one wow fadeInUp'
                data-wow-delay='200ms'
                data-wow-duration='1500ms'
              >
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a
                      href='assets/images/gallery/case-2.png'
                      className='lightbox-image'
                      data-fancybox='gallery'
                    >
                      <img src='assets/images/gallery/case-2.png' alt='' />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <p>Entertainment</p>
                    <h4>
                      <a href='project-details.html'>
                        Automate feedback analysis
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 case-block'>
              <div
                className='case-block-one wow fadeInUp'
                data-wow-delay='400ms'
                data-wow-duration='1500ms'
              >
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a
                      href='assets/images/gallery/case-3.png'
                      className='lightbox-image'
                      data-fancybox='gallery'
                    >
                      <img src='assets/images/gallery/case-3.png' alt='' />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <p>Banking & Finance</p>
                    <h4>
                      <a href='project-details.html'>
                        Big data processing implementation
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 case-block'>
              <div
                className='case-block-one wow fadeInUp'
                data-wow-delay='600ms'
                data-wow-duration='1500ms'
              >
                <div className='inner-box'>
                  <figure className='image-box'>
                    <a
                      href='assets/images/gallery/case-4.png'
                      className='lightbox-image'
                      data-fancybox='gallery'
                    >
                      <img src='assets/images/gallery/case-4.png' alt='' />
                    </a>
                  </figure>
                  <div className='lower-content'>
                    <p>Healthcare</p>
                    <h4>
                      <a href='project-details.html'>
                        BI implementation for baby care App
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className='more-btn'>
            <a
              // href='project-details.html'
              href='#'
              className='btn-style-four'
            >
              All Case Studies
              {/* //plus btn problem */}
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseSection;
