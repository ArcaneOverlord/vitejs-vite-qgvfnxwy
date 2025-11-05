import React from 'react';


const LandingHead = () => {
  return (
    <div className="h-full w-screen flex flex-row" >
      <div className= "flex flex-[1] p-3 justify-center">
      <img src='/image/shield.svg' className="object-contain object-center max-h-[20px]" />
      </div>
      <div className= "flex flex-[1] p-3 justify-center">
        <img src='/image/gearb.svg'
        className="object-contain object-center max-h-[20px]"/>
      </div>
    </div>
    
    
  )
};
export default LandingHead;