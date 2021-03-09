import React from "react";

function SingleTestimonial(props) {
    const{image, description, designation, name} = props.totalData
  return (
    <>
      <div className='testimonial-content'>
        <figure className='image-box'>
          <img src={image} alt='' />
        </figure>
        <div className='inner-box'>
          <div className='icon-box'>
            <i className='flaticon-null'></i>
          </div>
          <div className='inner'>
            <ul className='rating clearfix'>
              <li>
                <i className='flaticon-stars'></i>
              </li>
              <li>
                <i className='flaticon-stars'></i>
              </li>
              <li>
                <i className='flaticon-stars'></i>
              </li>
              <li>
                <i className='flaticon-stars'></i>
              </li>
              <li>
                <i className='flaticon-stars'></i>
              </li>
            </ul>
            <div className='text'>
              <p>
                {description}
              </p>
            </div>
            <div className='author-info'>
              <h4>{name}</h4>
              <span className='designation'>{designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTestimonial;
