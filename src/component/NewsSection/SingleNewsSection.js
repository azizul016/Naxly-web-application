import React from 'react'

function SingleNewsSection(props) {
    const {date, month, description, title, heading, icon, image} = props.singleNews
    return (
        <div className='col-lg-4 col-md-6 col-sm-12 news-block'>
        <div
          className='news-block-one wow fadeInUp'
          data-wow-delay='00ms'
          data-wow-duration='1500ms'
        >
          <div className='inner-box'>
            <figure className='image-box'>
              <img src={image} alt='' />
              <a
                href={`url(${image})`}
                // href='assets/images/news/news-1.jpg'
                className='lightbox-image'
                data-fancybox='gallery'
              >
                <i className={`${icon}`}></i>
              </a>
            </figure>
            <div className='lower-content'>
              <div className='file-box'>
                <i className='far fa-folder-open'></i>
                <p>{title}</p>
              </div>
              <div className='title-box'>
                <div className='post-date'>
                  <p>{date}</p>
                  <span>{month}</span>
                </div>
                <h4>
                  <a
                //    href='blog-details.html'
                   >
                    {heading}
                  </a>
                </h4>
              </div>
              <div className='text'>
                <p>
                 {description}
                </p>
              </div>
              <div className='link'>
                <a 
                // href='blog-details.html' 
                className='btn-style-four'>
                  Read More<span>+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleNewsSection
