import React from "react";
import newsOne from "../../images/news/news-1.jpg";
import newsTwo from "../../images/news/news-2.jpg";
import newsThree from "../../images/news/news-3.jpg";
import SingleNewsSection from "./SingleNewsSection";

function NewsSection() {
  const newsSection = [
    {
      date: "05",
      month: "JAN",
      title: "Data Engineering",
      heading: "Naxly Named as a Global Leader in Big Data",
      description:
        "Equal blame belongs too those who fail in their through weakness will shrinking.",
      icon: "flaticon-zoom",
      image: newsOne,
    },
    {
      date: "01",
      month: "JAN",
      title: "ML Consulting",
      heading: "The Current State of Artificial Intelligence Infographic.",
      description:
        "When our power choice untrammelled and then prevents our being able pleasure.",
      icon: "flaticon-zoom",
      image: newsTwo,
    },
    {
      date: "25",
      month: "DEC",
      title: "Data Strategy",
      heading: "Naxly as the Winners in Global Agency Awards",
      description:
        "Obligations of business it will frequently occur that pleasures have to be repudiated.",
      icon: "flaticon-zoom",
      image: newsThree,
    },
  ];
  return (
    <section className='news-section'>
      <div className='title-inner bg-color-1'>
        <div className='pattern-layer'>
          <div
            className='pattern-1'
            // style='background-image: url(assets/images/shape/shape-7.png);'
          ></div>
          <div
            className='pattern-2'
            // style='background-image: url(assets/images/shape/shape-8.png);'
          ></div>
        </div>
        <div className='auto-container'>
          <div className='sec-title text-center'>
            <p>News & Updates</p>
            <h2>
              Latest thinking in data science and
              <br />
              our company news
            </h2>
            <div
              className='decor'
              //   style='background-image: url(assets/images/icons/decor-1.png);'
            ></div>
          </div>
        </div>
      </div>
      <div className='lower-content'>
        <div className='auto-container'>
          <div className='inner-content'>
            <div className='row clearfix'>
                {
                    newsSection.map((newsSection, i) => <SingleNewsSection key={i} singleNews={newsSection} />)
                }
              {/* <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                <div
                  className='news-block-one wow fadeInUp'
                  data-wow-delay='00ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <img src='assets/images/news/news-1.jpg' alt='' />
                      <a
                        href='assets/images/news/news-1.jpg'
                        className='lightbox-image'
                        data-fancybox='gallery'
                      >
                        <i className='flaticon-zoom'></i>
                      </a>
                    </figure>
                    <div className='lower-content'>
                      <div className='file-box'>
                        <i className='far fa-folder-open'></i>
                        <p>Data Engineering</p>
                      </div>
                      <div className='title-box'>
                        <div className='post-date'>
                          <p>05</p>
                          <span>Jan</span>
                        </div>
                        <h4>
                          <a href='blog-details.html'>
                            Naxly Named as a Global Leader in Big Data
                          </a>
                        </h4>
                      </div>
                      <div className='text'>
                        <p>
                          Equal blame belongs too those who fail in their
                          through weakness will shrinking.
                        </p>
                      </div>
                      <div className='link'>
                        <a href='blog-details.html' className='btn-style-four'>
                          Read More<span>+</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                <div
                  className='news-block-one wow fadeInUp'
                  data-wow-delay='300ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <img src='assets/images/news/news-2.jpg' alt='' />
                      <a
                        href='assets/images/news/news-2.jpg'
                        className='lightbox-image'
                        data-fancybox='gallery'
                      >
                        <i className='flaticon-zoom'></i>
                      </a>
                    </figure>
                    <div className='lower-content'>
                      <div className='file-box'>
                        <i className='far fa-folder-open'></i>
                        <p>ML Consulting</p>
                      </div>
                      <div className='title-box'>
                        <div className='post-date'>
                          <p>01</p>
                          <span>Jan</span>
                        </div>
                        <h4>
                          <a href='blog-details.html'>
                            The Current State of Artificial Intelligence
                            Infographic.
                          </a>
                        </h4>
                      </div>
                      <div className='text'>
                        <p>
                          When our power choice untrammelled and then prevents
                          our being able pleasure.
                        </p>
                      </div>
                      <div className='link'>
                        <a href='blog-details.html' className='btn-style-four'>
                          Read More<span>+</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
                <div
                  className='news-block-one wow fadeInUp'
                  data-wow-delay='600ms'
                  data-wow-duration='1500ms'
                >
                  <div className='inner-box'>
                    <figure className='image-box'>
                      <img src='assets/images/news/news-3.jpg' alt='' />
                      <a
                        href='assets/images/news/news-3.jpg'
                        className='lightbox-image'
                        data-fancybox='gallery'
                      >
                        <i className='flaticon-zoom'></i>
                      </a>
                    </figure>
                    <div className='lower-content'>
                      <div className='file-box'>
                        <i className='far fa-folder-open'></i>
                        <p>Data Strategy</p>
                      </div>
                      <div className='title-box'>
                        <div className='post-date'>
                          <p>25</p>
                          <span>Dec</span>
                        </div>
                        <h4>
                          <a href='blog-details.html'>
                            Naxly as the Winners in Global Agency Awards
                          </a>
                        </h4>
                      </div>
                      <div className='text'>
                        <p>
                          Obligations of business it will frequently occur that
                          pleasures have to be repudiated.
                        </p>
                      </div>
                      <div className='link'>
                        <a href='blog-details.html' className='btn-style-four'>
                          Read More<span>+</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
