import React from "react";
import CountTo from 'react-count-to';


function SingleFunSection(props) {
    const {icon, title, description, no} =props.singleFunSection
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 counter-block'>
      <div
        className='counter-block-one wow slideInUp'
        data-wow-delay='00ms'
        data-wow-duration='1500ms'
      >
        <div className='inner-box'>
          <div className='icon-box'>
            <i className={`${icon}`}></i>
          </div>
          <div className='count-outer count-box'>
            <span>
            <CountTo to={no} speed={2000} />
              
            </span>
            +
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleFunSection;
