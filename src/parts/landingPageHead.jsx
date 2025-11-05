import React from 'react';


const LandingHead = () => {
  return (
    <div className="h-full w-screen flex flex-row" >
      <div className= "flex flex-[1] p-3 ">
      <img src='/image/shield.svg' className="object-contain object-center " />
      </div>
      <div className= "flex flex-[1] p-3 ">
        <img src='/image/gearb.svg'
        className="object-contain object-center"/>
      </div>
    </div>
    
    
  )
};
export default LandingHead;