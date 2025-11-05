import React from 'react';
import LandingHead from '../parts/../parts/landingPageHead.jsx';
import LandingBody from '../parts/landingPageBody.jsx';
import LandingFooter from '../parts/landingPageFooter.jsx';

const Landing = () => {
    return (
        <div className="bg-[#e7e7e9] max-h-screen max-w-screen flex flex-col items-center justify-center gap-[5px]
        overflow-hidden">
        <div className="bg-[#ffffff] w-screen flex flex-[1]">
          <LandingHead/>
        </div>    
        <div className="bg-[#ffffff] w-screen flex-[8] justify-center items-center">
          <LandingBody/>
        </div> 
        <div className="bg-[#ffffff] w-screen flex-[1] flex flex-col ">
          <LandingFooter/>
        </div>
        </div>
    );
};

export default Landing;