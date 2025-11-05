import React from 'react';


const LandingHead = () => {
  return (
    <div className="h-full w-screen flex flex-row" >
      <div className= "flex flex-[1]  items-center justify-start h-full px-4">
      <img src='/image/shield.svg' className="object-contain object-center max-h-[35px]
      " />
      </div>
      <div className= "flex flex-[1] items-center justify-end h-full  px-4">
        <img src='/image/gearb.svg'
        className="object-contain object-center max-h-[35px]
      transition-transform duration-150 ease-out active:rotate-360,scale-101" />
      </div>
    </div>
    
    
  )
};
export default LandingHead;