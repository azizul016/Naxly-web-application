import React from 'react'

function Service(props) {
    const{title, icon, description} = props.service;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 service-block'>
            <div
              className='service-block-one wow fadeInUp'
              data-wow-delay='00ms'
              data-wow-duration='1500ms'
            >
              <div className='inner-box'>
                <h4>
                  <a href='service-details.html'>{title}</a>
                </h4>
                <div className='icon-box'>
                  <span className='border-layer'></span>
                  <i className={`${icon}`}></i>
                </div>
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>
    )
}

export default Service
