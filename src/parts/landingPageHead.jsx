import React from 'react';


const LandingHead = () => {
  return (
    <div className="h-full w-screen flex flex-row" >
      <div className= "flex flex-[1] p-3 items-center flex-start">
      <img src='/image/shield.svg' className="object-contain object-center max-h-[30px]" />
      </div>
      <div className= "flex flex-[1] p-3 items-center flex-end">
        <img src='/image/gearb.svg'
        className="object-contain object-center max-h-[30px]"/>
      </div>
    </div>
    
    
  )
};
export default LandingHead;