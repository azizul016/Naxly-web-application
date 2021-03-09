import React, { useState } from "react";
import shape5 from "../../images/shape/shape-5.png";
import shape6 from "../../images/shape/shape-6.png";
import decor1 from "../../images/icons/decor-1.png";
import testimonial9 from "../../images/resource/testimonial-9.png";
import testimonial10 from "../../images/resource/testimonial-10.png";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
import 'swiper/swiper-bundle.css';
import SingleTestimonial from "./SingleTestimonial";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
function Testimonial() {
  const [slideIndex, setSlideIndex] = useState(0);

  const onClickHandler = (swiper) => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        let a = swiper.clickedSlide.attributes.getNamedItem(
          "data-swiper-slide-index"
        ).value;
        setSlideIndex(a);
      }
    }
  };

  const totalData = [
    {
      image: testimonial9,
      description:
        "As a growing company, we found in Naxly’ expertise in data science invaluable. Inalmost two years of cooperation, they’ve helped us define our data.",
      name: "Zedrew Kowzel",
      designation: "CTO of Smart Tech Solution",
    },
    {
      image: testimonial9,
      description:
        "As a growing company, we found in Naxly’ expertise in data science invaluable. Inalmost two years of cooperation, they’ve helped us define our data.",
      name: "Zedrew Kowzel",
      designation: "CTO of Smart Tech Solution",
    },
  ];

  return (
    <section className='testimonial-section'>
      <div className='pattern-layer'>
        <div
          className='pattern-1'
          style={{ backgroundImage: `url(${shape5})` }}
        ></div>
        <div
          className='pattern-2'
          style={{ backgroundImage: `url(${shape6})` }}
        ></div>
      </div>
      <div className='auto-container'>
        <div className='upper-box clearfix'>
          <div className='sec-title text-left pull-left'>
            <p>Testimonials</p>
            <h2>What say our clients about our awesome service</h2>
            <div
              className='decor'
              style={{ backgroundImage: `url(${decor1})` }}
            ></div>
          </div>
          <div className='btn-box pull-right'>
            <a href='index.html' className='theme-btn style-three'>
              Send Your Review<span>+</span>
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Swiper
              spaceBetween={5}
              slidesPerView={1}
            //   navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              onClick={(swiper) => onClickHandler(swiper)}
              onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
            >
              {totalData.map((location) => {
                return (
                  <SwiperSlide key={location.id}>
                    <SingleTestimonial totalData={location} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        {/* <div className='testimonial-carousel owl-carousel owl-theme owl-dots-none'> */}
        {/* <Carousel responsive={responsive}> */}
        {/* <div className='testimonial-content'>
            <figure className='image-box'>
              <img src={testimonial9} alt='' />
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
                    As a growing company, we found in Naxly’ expertise in data
                    science invaluable. In almost two years of cooperation,
                    they’ve helped us define our data.
                  </p>
                </div>
                <div className='author-info'>
                  <h4>Zedrew Kowzel</h4>
                  <span className='designation'>
                    CTO of Smart Tech Solution
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-content'>
            <figure className='image-box'>
              <img src={testimonial10} alt='' />
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
                    As a growing company, we found in Naxly’ expertise in data
                    science invaluable. In almost two years of cooperation,
                    they’ve helped us define our data.
                  </p>
                </div>
                <div className='author-info'>
                  <h4>Androi Roi</h4>
                  <span className='designation'>
                    CTO of Smart Tech Solution
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='testimonial-content'>
            <figure className='image-box'>
              <img src={testimonial9} alt='' />
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
                    As a growing company, we found in Naxly’ expertise in data
                    science invaluable. In almost two years of cooperation,
                    they’ve helped us define our data.
                  </p>
                </div>
                <div className='author-info'>
                  <h4>Watson Jsye</h4>
                  <span className='designation'>
                    CTO of Smart Tech Solution
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        {/* </Carousel> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default Testimonial;
