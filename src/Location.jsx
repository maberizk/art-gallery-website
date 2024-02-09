import React from "react";
import Map from "./components/Map";
import Footers from "./components/Footers";

const Location = () => {
  return (
    <div>
      <Map />
      <div className="locationPageText">
        <div className="locationPageHeader">
          <h3 className="orange">Our Location</h3>
        </div>
        <div className="locationPageDetails">
          <div>
            <h4 className="orange">99 King Street</h4>
            <div>
              <p>Newport</p>
              <p>RI 02840</p>
              <p>United States of America</p>
            </div>
          </div>
          <div>
            <p>
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9am
            </p>
          </div>
        </div>
      </div>

      <Footers page="location" />
    </div>
  );
};

export default Location;
