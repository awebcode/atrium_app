import Image from "next/image";
import React from "react";

const Counter = () => {
  return (
    <div className="counter">
      <div className="container">
        <div className="item">
          <h2>567</h2>
          <h1>UNIQUE & CREATIVE PROJECTS</h1>
        </div>
        <div className="item">
          <h2>8746</h2>
          <h1>LINES OF POWERFUL CODE</h1>
        </div>
        <div className="item">
          <Image src="/icon/crypto.png" height={100} width={100} layout="responsive" />
          <h1>ULTIMATE CREATIVE AGENCY</h1>
  
        </div>
        <div className="item">
          <h2>887</h2>
          <h1>COFFEE & PIZZAS DESTROYED</h1>
        </div>
        <div className="item">
          <h2>2887</h2>
          <h1>SATISFIED & IMPRESSED CLIENTS</h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
