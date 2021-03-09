import React from "react";

function PreLoder() {
  return (
    <div>
      <div className='preloader'>
        <div id='handle-preloader' className='handle-preloader'>
          <div className='animation-preloader'>
            <div className='spinner'></div>
            <div className='txt-loading'>
              <span data-text-preloader='N' className='letters-loading'>
                N
              </span>
              <span data-text-preloader='A' className='letters-loading'>
                A
              </span>
              <span data-text-preloader='X' className='letters-loading'>
                X
              </span>
              <span data-text-preloader='L' className='letters-loading'>
                L
              </span>
              <span data-text-preloader='Y' className='letters-loading'>
                Y
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreLoder;
