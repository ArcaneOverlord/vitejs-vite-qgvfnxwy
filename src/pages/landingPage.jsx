import React from 'react';
import LandingHead from '../parts/../parts/landingPageHead.jsx';
import LandingBody from '../../parts/landingPageBody.jsx';
import LandingFooter from '../../parts/landingPageFooter.jsx';

const Landing = () => {
    return (
        <div className="bg-[#e7e7e9] h-screen w-screen flex items-center justify-center gap-[5px]">
            <div className="bg-[#ffffff] w-screen h-[10%]" >
                 <LandingHead/>
            </div>
            <div className="bg-[#ffffff] w-screen h-[80%]">
                <LandingBody/>
            </div>
            <div className="bg-[#ffffff] w-screen h-[10%]">
                <LandingFooter/>
            </div>
        </div>
    );
};

export default Landing;