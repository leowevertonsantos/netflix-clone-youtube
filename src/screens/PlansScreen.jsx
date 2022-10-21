import React, { useEffect, useState } from "react";
import "./PlansScreen.css";

export const PlansScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="plansScreen">
      <br />
      <p>Renewal date: today</p>
      <div className="plansScreen__plan">
        <div className="plansScree__info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>

        <button>Subscribe</button>
      </div>

      <div className="plansScreen__plan">
        <div className="plansScree__info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>

        <button>Subscribe</button>
      </div>

      <div className="plansScreen__plan plansScreen__plan--disable">
        <div className="plansScree__info">
          <h5>Standart</h5>
          <h6>1080p</h6>
        </div>

        <button>Current Package</button>
      </div>
    </div>
  );
};
