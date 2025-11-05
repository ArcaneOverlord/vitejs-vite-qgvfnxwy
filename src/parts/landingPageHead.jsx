import React from 'react';


const LandingHead = () => {
  return (
    <div className="h-full w-screen flex flex-row" >
      <div className= "flex flex-[1]  items-center justify-start h-full p-3">
      <img src='/image/shield.svg' className="object-contain object-center max-h-[35px]
      " />
      </div>
      <div className= "flex flex-[1] items-center justify-end h-full p-3">
        <img src='/image/gearb.svg'
        className="object-contain object-center max-h-[35px]
      "/>
      </div>
    </div>
    
    
  )
};
export default LandingHead;