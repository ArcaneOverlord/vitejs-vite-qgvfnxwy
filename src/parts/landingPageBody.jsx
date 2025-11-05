import React from 'react';

const LandingBody = () => {
  return (
    <div className= "h-full w-screen justify-center items-center text-center flex flex-col px-15">
      <h1 className= "font-bold text-3xl text-black">Your Safety, Our Priority</h1>

      <p className="text-base text-[#7c7d81]">Help protect the community by Reporting scams quickly and easily</p>
      
      <button
      className="bg-[#626ae7] h-12 w-full text-white font-semibold text-base rounded-lg flex justify-center items-center p-2 mt-2"><img
      className="h-[23px] inline "src="/image/document.svg" />Report a scam</button>
      
      
    </div>
    
  )
};
export default LandingBody;