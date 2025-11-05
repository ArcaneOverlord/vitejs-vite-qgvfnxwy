import React from 'react';

const LandingFooter = () => {
  return (
  <div className="bg-[#ffffff] w-screen h-full flex flex-row ">
    <div className = "flex-[1] flex p-1">
      <img src= "./image/house.svg" className="object-contain object-center max-h-[30px]" />
    </div>
    <div className = "flex-[1] flex">
      <img src= "./image/sheild2.svg" 
      className="object-contain object-center max-h-[30px]" />
    </div>
    <div className = "flex-[1] flex">
      <img src= "./image/Bell.svg"
      className="object-contain object-center max-h-[30px]" />
    </div>
  </div>
  )
};
export default LandingFooter;