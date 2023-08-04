import React from "react";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <div className="pricing-content">
          <h2>PRICING PLANS</h2>
          <h1>
            CHECK OUR FLEXIBLE <br /> PRICING PLANS
          </h1>
          <p>
            Artrium cares for its clients and their businesses. That’s why we are
            dedicated to creating eye-catching modern designs compliant with the current
            standards, so that our users’ expectations are met.
          </p>
          <button>PRICING PLANS</button>
        </div>
        <div className="pricing-right">
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <div className="price">$19</div>
            <ul>
              <li>5 Projects</li>
              <li>100 GB Storage</li>
              <li>10 Users</li>
              <li>Single Project</li>
              <li> Download Prototypes</li>
            </ul>
            <button>SELECT PLAN</button>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <div className="price">$49</div>
            <ul>
              <li>Unlimited Projects</li>
              <li>500 GB Storage</li>
              <li>50 Users</li>
              <li>Single Project</li>
              <li> Download Prototypes</li>
            </ul>
            <button>SELECT PLAN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
