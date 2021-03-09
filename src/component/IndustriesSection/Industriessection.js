import React from "react";
import shape3 from "../../images/shape/shape-3.png";
import decor2 from "../../images/icons/decor-2.png";
import shape58 from "../../images/shape/shape-58.png";
import shape57 from "../../images/shape/shape-57.png";
import SingleFirstIndustries from "./SingleFirstIndustries";

function Industriessection() {
  const industryOne = [
    {
      title: "Industry",
      description: `Trasportation & `,
      description1: "Logistics",
      icon1: "flaticon-arrow",
      icon2: "flaticon-product",
      image: shape3,
    },
    {
      title: "Industry",
      description: "Media &",
      description1: "Entertainment",
      icon1: "flaticon-arrow",
      icon2: "flaticon-joystick",
      image: shape3,
    },
  ];
  const industryTwo = [
    {
      title: "Industry",
      description: "Advertising &",
      description1: "Marketing",
      icon1: "flaticon-arrow",
      icon2: "flaticon-travel",
      image: shape3,
    },
    {
      title: "Industry",
      description: "Financials &",
      description1: "Banking",
      icon1: "flaticon-arrow",
      icon2: "flaticon-bank",
      image: shape3,
    },
    {
      title: "Industry",
      description: "Healthcare &",
      description1: "Medicine",
      icon1: "flaticon-arrow",
      icon2: "flaticon-medicine",
      image: shape3,
    },
    {
      title: "Industry",
      description: "Advertising &",
      description1: "Marketing",
      icon1: "flaticon-arrow",
      icon2: "flaticon-billboard",
      image: shape3,
    },
  ];
  return (
    <section class='industries-section'>
      <div class='pattern-layer'>
        <div
          class='pattern-1'
          style={{ backgroundImage: `url(${shape57})` }}
        ></div>
        <div
          class='pattern-2'
          style={{ backgroundImage: `url(${shape58})` }}
        ></div>
      </div>
      <div class='auto-container'>
        <div class='row clearfix'>
          <div class='col-lg-6 col-md-6 col-sm-12 content-column'>
            <div class='content-box'>
              <div class='sec-title text-left light'>
                <p>Industries</p>
                <h2>Industries we are transforming our awesome solutions</h2>
                <div
                  class='decor'
                  style={{ backgroundImage: `url(${decor2})` }}
                ></div>
              </div>
              <div class='btn-box'>
                <a href='index.html' class='btn-style-four'>
                  View All Industries<span>+</span>
                </a>
              </div>
            </div>
          </div>
          {industryOne.map((data, i) => (
            <SingleFirstIndustries key={i} firstIndustries={data} />
          ))}
          {industryTwo.map((data, i) => (
            <SingleFirstIndustries key={i} firstIndustries={data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industriessection;
