import React from 'react';

const LandingFooter = () => {
  return (
  <div className="bg-[#ffffff] w-screen h-full flex flex-row ">
    <div className = "flex-[1] flex justify-center items-center">
      <img src= "./image/house.svg" className="object-contain object-center max-h-[30px]" />
      <p>Report</p>
    </div>
    <div className = "flex-[1] flex justify-center items-center">
      <img src= "./image/shield icon.svg" 
      className="object-contain object-center max-h-[30px]" />
            <p>Protection</p>
    </div>
    <div className = "flex-[1] flex justify-center items-center">
      <img src= "./image/Bell.svg"
      className="object-contain object-center max-h-[30px]" />
            <p>Alerts</p>
    </div>
  </div>
  )
};
export default LandingFooter;