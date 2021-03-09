import React from "react";
import decor3 from '../../images/icons/decor-3.png'

function Footer() {
  return (
    <footer className='main-footer'>
      <div className='footer-top'>
        <div className='auto-container'>
          <div className='widget-section'>
            <div className='row clearfix'>
              <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                <div className='footer-widget contact-widget'>
                  <div className='widget-title'>
                    <h3>Contact Us</h3>
                    <div
                      className='decor'
                      style={{ backgroundImage: `url(${decor3})`}}
                      // style='background-image: url(assets/images/icons/decor-3.png);'
                    ></div>
                  </div>
                  <div className='widget-content'>
                    <div className='box'>
                      <h5>Office Location</h5>
                      <p>124, Queens walk 2nd cross newyork 5241</p>
                    </div>
                    <div className='box'>
                      <h5>Quick Contact</h5>
                      <ul className='clearfix'>
                        <li>
                          <i className='flaticon-music'></i>
                          <a href='tel:0055567890'>+00 555 67 890</a>
                        </li>
                        <li>
                          <i className='flaticon-gmail'></i>
                          <a href='mailto:supportteam@info.com'>
                            supportteam@info.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12 footer-column'>
                <div className='footer-widget links-widget'>
                  <div className='widget-title'>
                    <h3>Useful Links</h3>
                    <div
                      className='decor'
                      style={{ backgroundImage: `url(${decor3})`}}
                      // style='background-image: url(assets/images/icons/decor-3.png);'
                    ></div>
                  </div>
                  <div className='widget-content'>
                    <div className='row clearfix'>
                      <div className='col-lg-6 col-md-6 col-sm-12 column'>
                        <ul className='links clearfix'>
                          <li>
                            <a href='index.html'>Data Science</a>
                          </li>
                          <li>
                            <a href='index.html'>Ware Housing</a>
                          </li>
                          <li>
                            <a href='index.html'>Analytics</a>
                          </li>
                          <li>
                            <a href='index.html'>Visualisation</a>
                          </li>
                          <li>
                            <a href='index.html'>Migration</a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12 column'>
                        <ul className='links clearfix'>
                          <li>
                            <a href='index.html'>Home</a>
                          </li>
                          <li>
                            <a href='index.html'>Company</a>
                          </li>
                          <li>
                            <a href='index.html'>Services</a>
                          </li>
                          <li>
                            <a href='index.html'>Works</a>
                          </li>
                          <li>
                            <a href='index.html'>Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 footer-column'>
                <div className='footer-widget about-widget'>
                  <div className='widget-title'>
                    <h3>About Company</h3>
                    <div
                      className='decor'
                      style={{ backgroundImage: `url(${decor3})`}}
                      // style='background-image: url(assets/images/icons/decor-3.png);'
                    ></div>
                  </div>
                  <div className='widget-content'>
                    <div className='box'>
                      <figure className='logo'>
                        <a href='index.html'>
                          <img src='assets/images/footer-logo.png' alt='' />
                        </a>
                      </figure>
                      <div className='text'>
                        <p>
                          Our goal is to help our companies maintain achieve
                          best className positions their respective industries & our
                          team works occur that pleasures have to be repudiated.
                        </p>
                      </div>
                    </div>
                    <div className='subscribe-box'>
                      <form action='index.html' method='post'>
                        <div className='form-group'>
                          <input
                            type='email'
                            name='email'
                            placeholder='Email Address...'
                            required=''
                          />
                          <button type='submit' className='theme-btn style-one'>
                            Subscribe Us
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom style-one'>
        <div className='auto-container clearfix'>
          <div className='copyright pull-left'>
            <p>
              Copyright &copy; <a href='index.html'>Naxly</a>, All Rights
              Reserved.
            </p>
          </div>
          <ul className='footer-nav pull-right'>
            <li>
              <a href='index.html'>Privacy Policy</a>
            </li>
            <li>
              <a href='index.html'>Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
