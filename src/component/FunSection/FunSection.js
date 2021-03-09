import React from "react";
import SingleFunSection from "./SingleFunSection";
import CountTo from 'react-count-to';

function FunSection() {
  const funSection = [
    {
      icon: "flaticon-analytics",
      title: "Projects Completed",
      description: "To take trivial example, which idea of ever undertakes.",
      no:3500
    },
    {
      icon: "flaticon-brain-1",
      title: "Industries Covered",
      description: "Best every pleasure is to welcomed every pain avoided.",
      no:1857
    },
    {
      icon: "flaticon-freelance",
      title: "Expert Scientists",
      description: "Have to be repudiated annoyances accepted the wise.",
      no:239
    },
  ];
  return (
    <div>
      <section class='fun-fact'>
        <div class='auto-container'>
          <div class='row clearfix'>
            {funSection.map((singleFun, i) => (
              <SingleFunSection key={i} singleFunSection={singleFun} />
            ))}
            {/* <div class='col-lg-4 col-md-6 col-sm-12 counter-block'>
              <div
                class='counter-block-one wow slideInUp'
                data-wow-delay='00ms'
                data-wow-duration='1500ms'
              >
                <div class='inner-box'>
                  <div class='icon-box'>
                    <i class='flaticon-analytics'></i>
                  </div>
                  <div class='count-outer count-box'>
                    <span class='count-text' data-speed='1500' data-stop='3500'>
                      0
                    </span>
                    +
                  </div>
                  <h4>Projects Completed</h4>
                  <p>To take trivial example, which idea of ever undertakes.</p>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6 col-sm-12 counter-block'>
              <div
                class='counter-block-one wow slideInUp'
                data-wow-delay='200ms'
                data-wow-duration='1500ms'
              >
                <div class='inner-box'>
                  <div class='icon-box'>
                    <i class='flaticon-brain-1'></i>
                  </div>
                  <div class='count-outer count-box'>
                    <span class='count-text' data-speed='1500' data-stop='1867'>
                      0
                    </span>
                  </div>
                  <h4>Industries Covered</h4>
                  <p>Best every pleasure is to welcomed every pain avoided.</p>
                </div>
              </div>
            </div>
            <div class='col-lg-4 col-md-6 col-sm-12 counter-block'>
              <div
                class='counter-block-one wow slideInUp'
                data-wow-delay='300ms'
                data-wow-duration='1500ms'
              >
                <div class='inner-box'>
                  <div class='icon-box'>
                    <i class='flaticon-freelance'></i>
                  </div>
                  <div class='count-outer count-box'>
                    <span class='count-text' data-speed='1500' data-stop='239'>
                      0
                    </span>
                  </div>
                  <h4>Expert Scientists</h4>
                  <p>Have to be repudiated annoyances accepted the wise.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FunSection;
