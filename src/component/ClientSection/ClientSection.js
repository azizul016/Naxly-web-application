import React, { useState } from "react";
import wheel6 from "../../images/icons/wheel-6.png";
import wheel7 from "../../images/icons/wheel-7.png";
import shape59 from "../../images/shape/shape-59.png";
import clientsLogoOne from "../../images/clients/clients-logo-1.png";
import clientsLogoTwo from "../../images/clients/clients-logo-2.png";
import clientsLogoThree from "../../images/clients/clients-logo-3.png";
import clientsLogoFour from "../../images/clients/clients-logo-4.png";
import clientsLogoFive from "../../images/clients/clients-logo-5.png";
import SingleClientSection from "./SingleClientSection";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ClientSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='clients-section text-center'>
      <div
        className='pattern-layer'
        style={{ backgroundImage: `url(${shape59})` }}
      ></div>
      <div className='image-layer'>
        <figure className='image-1 rotate-me'>
          <img src={wheel6} alt='' />
        </figure>
        <figure className='image-2 rotate-me'>
          <img src={wheel7} alt='' />
        </figure>
      </div>
      <div className='auto-container'>
        <div className='title-inner'>
          <h2>Trusted by innovative companies</h2>
          <p>
            Always holds in these matters to this principle of selection: he
            rejects pleasures to secure other greater
            <br />
            pleasures, or else he endures pains to avoid
          </p>
        </div>
        <Carousel responsive={responsive}>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoOne} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoTwo} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoThree} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFour} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFive} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoOne} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoTwo} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoThree} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFour} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFive} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoOne} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoTwo} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoThree} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFour} alt='' />
            </a>
          </figure>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src={clientsLogoFive} alt='' />
            </a>
          </figure>
        </Carousel>
        ;
      </div>
    </section>
  );
}

export default ClientSection;
