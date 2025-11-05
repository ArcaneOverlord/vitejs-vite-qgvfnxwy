import React from 'react';
import LandingHead from '../parts/../parts/landingPageHead.jsx';
import LandingBody from '../parts/landingPageBody.jsx';
import LandingFooter from '../parts/landingPageFooter.jsx';

const Landing = () => {
    return (
        <div className="bg-[#e7e7e9] h-screen w-screen flex flex-col items-center justify-center gap-[5px]
        overflow-hidden">
        <div className="bg-[#ffffff] w-screen flex flex-[1] h-full">
          <LandingHead/>
        </div>    
        <div className="bg-[#ffffff] w-screen flex-[8] justify-center items-center h-full">
          <LandingBody/>
        </div> 
        <div className="bg-[#ffffff] w-screen flex-[1] flex h-full">
          <LandingFooter/>
        </div>
        </div>
    );
};

export default Landing;