import React from "react";

function SearchPopUp() {
  return (
    <div id='search-popup' className='search-popup'>
      <div className='close-search'>
        <span>Close</span>
      </div>
      <div className='popup-inner'>
        <div className='overlay-layer'></div>
        <div className='search-form'>
          <form method='post' action='index.html'>
            <div className='form-group'>
              <fieldset>
                <input
                  type='search'
                  className='form-control'
                  name='search-input'
                  value=''
                  placeholder='Search Here'
                  required
                />
                <input
                  type='submit'
                  value='Search Now!'
                  className='theme-btn style-four'
                />
              </fieldset>
            </div>
          </form>
          <h3>Recent Search Keywords</h3>
          <ul className='recent-searches'>
            <li>
              <a href='index.html'>Finance</a>
            </li>
            <li>
              <a href='index.html'>Idea</a>
            </li>
            <li>
              <a href='index.html'>Service</a>
            </li>
            <li>
              <a href='index.html'>Growth</a>
            </li>
            <li>
              <a href='index.html'>Plan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPopUp;
