import React from "react";

function SingleAbout(props) {
    const{title, firstHeading, description, ideaPhysical, everPhysical, avoidsPain, greatTruth, firstStyleImage, secondStyleImage, icon} = props.about;
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-12 content-column'>
        <div className='content-box'>
          <div className='sec-title text-left'>
            <p>{title}</p>
            <h2>{firstHeading}</h2>
            <div
              className='decor'
              style={{backgroundImage: `url(${firstStyleImage})`}}
              //   style='background-image: url(assets/images/icons/decor-1.png);'
            ></div>
          </div>
          <div className='text'>
            <p>
              {description}
            </p>
          </div>
          <ul className='list-item clearfix'>
            <li>
              <span className='dots'></span>
              {ideaPhysical}
            </li>
            <li>
              <span className='dots'></span>
              {everPhysical}
            </li>
            <li>
              <span className='dots'></span>
              {avoidsPain}
            </li>
            <li>
              <span className='dots'></span>
              {greatTruth}
            </li>
          </ul>
        </div>
      </div>
      <div className='col-lg-8 col-md-6 col-sm-12 inner-column'>
        <div className='inner-box'>
          <div
            className='video-inner'
            style={{backgroundImage: `url(${secondStyleImage})`}}
            // style='background-image: url(assets/images/background/video-1.jpg);'
          >
            <a
              href='https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s'
              className='lightbox-image'
              data-caption=''
            >
              <i className={`${icon}`}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleAbout;
