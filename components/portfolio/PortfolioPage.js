import CommonDropdown from '@/pages/CommonDropdown';
import Dropdown from '@/pages/Dropdown';
import { ArrowRightAltRounded, KeyboardBackspace } from '@mui/icons-material';
import React from 'react'

import HomeFooter from '../home/HomeFooter';
import HaveAproject from '../home/HaveAproject';
import ProjectSection from './Project';

const PortfolioPage = () => {
  return (
    <div className="portfolio">
     <CommonDropdown title="Our Portfolio" path="portfolio"/>
      <div className="portfolio-container">
       
      </div>
      <ProjectSection />
      <HaveAproject/>
      <HomeFooter/>
    </div>
  );
}

export default PortfolioPage