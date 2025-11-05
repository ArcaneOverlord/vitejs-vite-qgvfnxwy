import React from 'react';
import LandingHead from '../parts/../parts/landingPageHead.jsx';
import LandingBody from '../parts/landingPageBody.jsx';
import LandingFooter from '../parts/landingPageFooter.jsx';

const Landing = () => {
    return (
        <div className="bg-[#e7e7e9] max-h-screen max-w-screen flex flex-col items-center justify-center gap-[5px]
        overflow-hidden">
        
          <LandingHead/>
            
        
          <LandingBody/>
             
            
          <LandingFooter/>
        
        </div>
    );
};

export default Landing;