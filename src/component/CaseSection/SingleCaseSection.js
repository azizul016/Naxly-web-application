import React from "react";

function SingleCaseSection(props) {
    const {title, image, description} = props.caseSection
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 case-block'>
      <div
        className='case-block-one wow fadeInUp'
        data-wow-delay='00ms'
        data-wow-duration='1500ms'
      >
        <div className='inner-box'>
          <figure className='image-box'>
            <a
            href={`${image}`}
            //   href='assets/images/gallery/case-1.png'
              className='lightbox-image'
              data-fancybox='gallery'
            >
              <img src={image} alt='' />
            </a>
          </figure>
          <div className='lower-content'>
            <p>{title}</p>
            <h4>
              <a
               href='#'
            //    href='project-details.html'
               >
               {description}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCaseSection;
