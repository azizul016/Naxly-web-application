import React from "react";
import decor1 from "../../images/icons/decor-1.png";
import Service from "./Service";

function Services() {
  const services = [
    {
      title: "Data Science",
      icon: "flaticon-data",
      description: "Simple & easy distinguish in a free hour, when our power choice prevents",
    },
    {
      title: "Machine Learning",
      icon: "flaticon-brain",
      description: "Claims duty the obligations of busines it will frequently occur that all pleasures.",
    },
    {
      title: "Artificial Intelligence",
      icon: "flaticon-vr",
      description: "Therefore always hold these matters to this principle of reject pleasures secure.",
    },
    {
      title: "BI Implementation",
      icon: "flaticon-cloud-computing",
      description: "Trouble that bound ensue equaly blame belongs to those through weakness.",
    },
  ];
  return (
    <section className='service-section'>
      <div className='auto-container'>
        <div className='sec-title text-center'>
          <p>More than Solutions</p>
          <h2>
            Data sceince solutions for startup
            <br />
            and enterprises
          </h2>
          <div
            className='decor'
            style={{ backgroundImage: `url(${decor1})` }}
          ></div>
        </div>
        <div className='row clearfix'>
          {
            services.map ((service, i) => <Service service={service} key={i} />)
          }

          {/* <div className='col-lg-3 col-md-6 col-sm-12 service-block'>
            <div
              className='service-block-one wow fadeInUp'
              data-wow-delay='00ms'
              data-wow-duration='1500ms'
            >
              <div className='inner-box'>
                <h4>
                  <a href='service-details.html'>Data Science</a>
                </h4>
                <div className='icon-box'>
                  <span className='border-layer'></span>
                  <i className='flaticon-data'></i>
                </div>
                <p>
                  Simple & easy distinguish in a free hour, when our power
                  choice prevents
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 service-block'>
            <div
              className='service-block-one wow fadeInUp'
              data-wow-delay='100ms'
              data-wow-duration='1500ms'
            >
              <div className='inner-box'>
                <h4>
                  <a href='service-details.html'>Machine Learning</a>
                </h4>
                <div className='icon-box'>
                  <span className='border-layer'></span>
                  <i className='flaticon-brain'></i>
                </div>
                <p>
                  Claims duty the obligations of busines it will frequently
                  occur that all pleasures.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 service-block'>
            <div
              className='service-block-one wow fadeInUp'
              data-wow-delay='200ms'
              data-wow-duration='1500ms'
            >
              <div className='inner-box'>
                <h4>
                  <a href='service-details.html'>Artificial Intelligence</a>
                </h4>
                <div className='icon-box'>
                  <span className='border-layer'></span>
                  <i className='flaticon-vr'></i>
                </div>
                <p>
                  Therefore always hold these matters to this principle of
                  reject pleasures secure.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 service-block'>
            <div
              className='service-block-one wow fadeInUp'
              data-wow-delay='300ms'
              data-wow-duration='1500ms'
            >
              <div className='inner-box'>
                <h4>
                  <a href='service-details.html'>BI Implementation</a>
                </h4>
                <div className='icon-box'>
                  <span className='border-layer'></span>
                  <i className='flaticon-cloud-computing'></i>
                </div>
                <p>
                  Trouble that bound ensue equaly blame belongs to those through
                  weakness.{" "}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Services;
