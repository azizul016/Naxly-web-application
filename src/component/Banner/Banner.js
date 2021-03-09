import React from "react";
import banner1 from "../../images/banner/banner-1-1.png";
import banner2 from "../../images/banner/banner-1-2.png";
import banner3 from "../../images/banner/banner-1-3.png";
import banner4 from "../../images/banner/banner-1-4.png";
import banner5 from "../../images/banner/banner-1-5.png";
import banner6 from "../../images/banner/banner-1-6.png";
import pieChart1 from "../../images/icons/pie-chart-1.png";
import dollar1 from "../../images/icons/dollar-1.png";
import dollar2 from "../../images/icons/dollar-2.png";
import dollar3 from "../../images/icons/dollar-3.png";
import dollar4 from "../../images/icons/dollar-4.png";
import dollar5 from "../../images/icons/dollar-5.png";
import arrow1 from "../../images/icons/arrow-1.png";
import shape56 from "../../images/shape/shape-56.png";
import shape55 from "../../images/shape/shape-55.png";
import wheel2 from "../../images/icons/wheel-2.png";
import wheel3 from "../../images/icons/wheel-3.png";
import wheel4 from "../../images/icons/wheel-4.png";
import wheel5 from "../../images/icons/wheel-5.png";
import MainHeader from "../PreLoder/MainHeader";
import SearchPopUp from "../PreLoder/SearchPopUp";
import PreLoder from "../PreLoder/PreLoder";
import MobileMenu from "../PreLoder/MobileMenu";

function Banner() {
  return (
    <>
      <PreLoder />
      <SearchPopUp />
      <MainHeader />
      <MobileMenu />
      <section className='banner-section'>
        <div className='pattern-layer'>
          <div
            className='pattern-1'
            style={{ backgroundImage: `url(${shape56})` }}
          ></div>
          <div
            className='pattern-2'
            style={{ backgroundImage: `url(${shape55})` }}
          ></div>
        </div>
        <div className='icon-layer'>
          <div
            className='icon icon-1 rotate-me'
            style={{ backgroundImage: `url(${wheel2})` }}
          ></div>
          <div
            className='icon icon-2 rotate-me'
            style={{ backgroundImage: `url(${wheel3})` }}
          ></div>
          <div
            className='icon icon-3 rotate-me'
            style={{ backgroundImage: `url(${wheel4})` }}
          ></div>
          <div
            className='icon icon-4 rotate-me'
            style={{ backgroundImage: `url(${wheel5})` }}
          ></div>
        </div>
        <div className='auto-container'>
          <div className='row clearfix'>
            <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
              <div className='content-box'>
                <h1>Turn data into insight with survey reports</h1>
                <p>
                  Naxly bring the power of data science and artificial
                  <br />
                  intelligence to every business.
                </p>
                <div className='btn-box'>
                  <a href='index.html' className='theme-btn style-two'>
                    Learn More<span>+</span>
                  </a>
                  <a href='index.html' className='theme-btn style-one'>
                    Get Started<span>+</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 image-column'>
              <div className='slider-image-1 clearfix'>
                <figure className='image image-1'>
                  <img src={banner1} alt='' />
                </figure>
                <figure className='image image-2 float-bob-y'>
                  <img src={banner2} alt='' />
                </figure>
                <figure className='image image-3'>
                  <img src={pieChart1} alt='' />
                </figure>
                <figure className='image image-4'>
                  <img src={banner3} alt='' />
                </figure>
                <figure className='image image-5 float-bob-y'>
                  <img src={banner4} alt='' />
                </figure>
                <figure className='image image-6 float-bob-y'>
                  <img src={banner5} alt='' />
                </figure>
                <figure className='image image-7'>
                  <img src={banner6} alt='' />
                </figure>
                <figure
                  className='image image-8 wow bounceInDown'
                  data-wow-delay='00ms'
                  data-wow-duration='1500ms'
                >
                  <img src={dollar1} alt='' />
                </figure>
                <figure
                  className='image image-9 wow bounceInDown'
                  data-wow-delay='200ms'
                  data-wow-duration='1500ms'
                >
                  <img src={dollar2} alt='' />
                </figure>
                <figure
                  className='image image-10 wow bounceInDown'
                  data-wow-delay='400ms'
                  data-wow-duration='1500ms'
                >
                  <img src={dollar3} alt='' />
                </figure>
                <figure
                  className='image image-11 wow bounceInDown'
                  data-wow-delay='600ms'
                  data-wow-duration='1500ms'
                >
                  <img src={dollar4} alt='' />
                </figure>
                <figure
                  className='image image-12 wow bounceInDown'
                  data-wow-delay='800ms'
                  data-wow-duration='1500ms'
                >
                  <img src={dollar5} alt='' />
                </figure>
                <figure className='image image-13'>
                  <img src={arrow1} alt='' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
