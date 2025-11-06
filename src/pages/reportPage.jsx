import React from 'react';
import LandingHead from '../parts/../parts/landingPageHead.jsx';
import LandingBody from '../parts/landingPageBody.jsx';


const ReportPage = () => {
    return (
        <div className="bg-[#e7e7e9] h-[94vh] w-screen flex flex-col items-center justify-center gap-[2px]
        overflow-hidden">
        <div className="bg-[#ffffff] w-screen flex flex-[1] h-full">
          <LandingHead/>
        </div>    
        <div className="bg-[#ffffff] w-screen flex-[8] h-full">
          <LandingBody/>
        </div> 
        
    
        </div>
    );
};

export default ReportPage;