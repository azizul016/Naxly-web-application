import React from "react";
import imageStyleOne from "../../images/icons/decor-1.png";
import SingleWorkProcess from "./SingleWorkProcess";

function WorkProcess() {
  const workProcess = [
    {
      id: "01",
      title: "Frame the Problem",
      description: "To take a trivial example, which idea of ever undertakes.",
      icon: "flaticon-big-data",
    },
    {
      id: "02",
      title: "Collect the Data",
      description: "Best every pleasure is too welcomed every pain avoided.",
      icon: "flaticon-ui",
    },
    {
      id: "03",
      title: "Process the Data",
      description: "Have to be repudiated annoyances accepted the wise.",
      icon: "flaticon-brain-1",
    },
  ];
  return (
    <div>
      <section className='work-process'>
        <div className='auto-container'>
          <div className='sec-title text-center'>
            <p>Our Work Process</p>
            <h2>Data science solutions for startup</h2>
            <div
              className='decor'
              style={{ backgroundImage: `url(${imageStyleOne})` }}
            ></div>
          </div>
          <div className='row clearfix'>
            {workProcess.map((singleWork, i) => (
              <SingleWorkProcess key={i} workProcess={singleWork} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkProcess;
