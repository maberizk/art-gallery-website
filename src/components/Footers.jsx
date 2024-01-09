import React from "react";
import FacebookIcon from "/assets/icon-facebook.svg";
import InstagramIcon from "/assets/icon-instagram.svg";
import TwitterIcon from "/assets/icon-twitter.svg";

const Footers = () => {
  return (
    <>
      <div className="footer">
        <h1 className="upperCase logoFooter">
          Modern <br></br> Art Gallery
        </h1>
        <p className="footerText smallBody">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className="icons">
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={InstagramIcon} alt="instagram icon" />
          <img src={TwitterIcon} alt="twitter icon" />
        </div>
      </div>
    </>
  );
};

export default Footers;
