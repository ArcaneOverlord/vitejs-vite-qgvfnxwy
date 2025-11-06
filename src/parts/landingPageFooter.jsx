import React from 'react';

const LandingFooter = () => {
  return (
  <div className="bg-[#ffffff] w-screen h-full flex flex-row ">
    <div className = "flex-[1] flex flex-col justify-center items-center">
      <img src= "./image/house.svg" className="object-contain object-center max-h-[30px]" />
      <p className="text-sm text-[#7c7d81]">Report</p>
    </div>
    <div className = "flex-[1] flex flex-col justify-center items-center">
      <img src= "./image/shield icon.svg" 
      className="object-contain object-center max-h-[30px]" />
            <p className="text-sm text-[#7c7d81]">Protection</p>
    </div>
    <div className = "flex-[1] flex flex-col justify-center items-center">
      <img src= "./image/Bellgrey.svg"
      className="object-contain object-center max-h-[30px]" />
            <p className="text-sm text-[#7c7d81]">Alerts</p>
    </div>
  </div>
  )
};
export default LandingFooter;