import React from 'react'

function SingleFirstIndustries(props) {
    const{title, description,description1, icon1, icon2, image} = props.firstIndustries;
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 inner-column'>
            <div className='inner-box'>
              <div
                className='pattern-layer'
                style={{ backgroundImage: `url(${image})`}}
              ></div>
              <div className='inner'>
                <span>{title}</span>
                <h4>
                  <a href='index.html'>
                   {description} <br/> {description1}
                  </a>
                </h4>
                <div className='btn-box clearfix'>
                  <a href='index.html'>
                    <i className={`${icon1}`}></i>
                  </a>
                </div>
                <div className='icon-box'>
                  <i className={`${icon2}`}></i>
                </div>
              </div>
            </div>
          </div>
    )
}

export default SingleFirstIndustries
