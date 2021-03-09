import React from 'react'
import imageStyleTwo from '../../images/icons/icon-bg-1.png'
import imageStyleThree from '../../images/icons/icon-bg-2.png'

function SingleWorkProcess(props) {
    const{id, title, description, icon} = props.workProcess;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 work-block'>
        <div
          className='work-block-one wow slideInUp'
          data-wow-delay='00ms'
          data-wow-duration='1500ms'
        >
          <div className='inner-box'>
            <div className='icon-box'>
              <i className={`${icon}`}></i>
              <div className='count'>{id}</div>
              <div
                className='bg-pattern'
                style={{backgroundImage: `url(${imageStyleTwo})`}}
              ></div>
              <div
                className='overlay-pattern'
                style={{backgroundImage: `url(${imageStyleThree})`}}
              ></div>
            </div>
            <h4>
              <a href='index.html'>{title}</a>
            </h4>
            <p>
             {description}
            </p>
          </div>
        </div>
      </div>
    )
}

export default SingleWorkProcess
