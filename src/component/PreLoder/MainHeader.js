import React from "react";
import NavComponent from "./NavComponent";

function MainHeader() {
  return (
    <header className='main-header style-one home-1'>
      <div className='auto-container'>
        <div className='row clearfix'>
          <div className='col-lg-3 col-md-12 col-sm-12 logo-column'>
            <div className='logo-box style-two'>
              <figure className='logo'>
                <a href='index.html'>
                  <img src='assets/images/logo-6.png' alt='' />
                </a>
              </figure>
            </div>
          </div>
          <div className='col-lg-9 col-md-12 col-sm-12 outer-column'>
            <div className='outer-box'>
              <div className='header-top clearfix'>
                <div className='top-right pull-right clearfix'>
                  <div className='support'>
                    <i className='flaticon-music'></i>
                    <span>Start your project today</span>
                    <a href='tel:0055567890'>+00 555 67 890</a>
                  </div>
                  <ul className='social-links clearfix'>
                    <li>
                      <a href='index.html'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='index.html'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='index.html'>
                        <i className='fab fa-google-plus-g'></i>
                      </a>
                    </li>
                    <li>
                      <a href='index.html'>
                        <i className='fab fa-skype'></i>
                      </a>
                    </li>
                  </ul>
                  <div className='search-box-outer'>
                    <form action='index.html' method='post' className='search-btn'>
                      <button type='button' className='search-toggler'>
                        <i className='flaticon-search'></i>Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='header-upper clearfix'>
                <div className='menu-area pull-right clearfix'>
                  <div className='mobile-nav-toggler'>
                    <i className='icon-bar'></i>
                    <i className='icon-bar'></i>
                    <i className='icon-bar'></i>
                  </div>
                  <nav className='main-menu navbar-expand-md navbar-light'>
                    <NavComponent />
                  </nav>
                  <div className='btn-box'>
                    <a href='index.html' className='theme-btn style-one'>
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sticky-header'>
        <div className='auto-container clearfix'>
          <figure className='logo-box'>
            <a href='index.html'>
              <img src='assets/images/small-logo.png' alt='' />
            </a>
          </figure>
          <div className='menu-area'>
            <nav className='main-menu clearfix'>
              <NavComponent />
            </nav>
            <div className='btn-box'>
              <a href='index.html' className='theme-btn style-one'>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
