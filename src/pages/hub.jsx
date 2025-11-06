import React from 'react';
import {useState} from 'react';
import Report from './reportPage.jsx';
import ProtectionPage from './protectionPage.jsx';
import AlertPage from './alertPage.jsx';
import Footer from '../parts/footer.jsx';

function Hub () {
const [isActive,setIsActive] = useState('report');

const renderContent = () => {
  if (isActive === "reportPage")
    return <ReportPage/>;
  if (isActive === "protectionPage")
    return <ProtectionPage/>
  if (isActive === "alertPage")
    return <AlertPage/>
  return <ReportPage/>
};
    return (
        <div className="bg-[#e7e7e9] h-[94vh] w-screen flex flex-col items-center justify-center gap-[2px]
        overflow-hidden">
        <main className="bg-[#ffffff] w-screen flex flex-[9] h-full">
          {renderContent}
        </main>    
        
        <div className="bg-[#ffffff] w-screen flex-[1] flex h-full">
          <Footer
          isActive={activeTab}
          setIsActive={setActiveTab}/>
        </div>
        </div>
    );
};

export default Hub;