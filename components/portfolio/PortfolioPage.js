import CommonDropdown from '@/pages/CommonDropdown';
import Dropdown from '@/pages/Dropdown';
import { ArrowRightAltRounded, KeyboardBackspace } from '@mui/icons-material';
import React from 'react'

const PortfolioPage = () => {
  return (
    <div className="portfolio">
     <CommonDropdown title="Our Portfolio" path="portfolio"/>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h1>OUR PORTFOLIO</h1>
          <span>
            Home
            <ArrowRightAltRounded />
            OUR PORTFOLIO
          </span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage