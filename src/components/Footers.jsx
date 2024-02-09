import React from "react";
import FacebookIcon from "/assets/icon-facebook.svg";
import InstagramIcon from "/assets/icon-instagram.svg";
import TwitterIcon from "/assets/icon-twitter.svg";

const Footers = ({ page }) => {
  const footerClass =
    page === "location" ? "footer footerLocationsPage" : "footer";

  const footerLogo =
    page === "location"
      ? "upperCase logoFooter logoFooterLoc"
      : "uppercase logoFooter";

  const footerText =
    page === "location"
      ? "footerText smallBody logoFooterLoc"
      : "footerText smallBody";

  const footerIcons = page === "location" ? "icons logoFooterLoc" : "icons";

  return (
    <>
      <div className={footerClass}>
        <div className="footerTextContainer">
          <h1 className={footerLogo}>
            Modern <br></br> Art Gallery
          </h1>
          <p className={footerText}>
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </div>
        <div className={footerIcons}>
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={InstagramIcon} alt="instagram icon" />
          <img src={TwitterIcon} alt="twitter icon" />
        </div>
      </div>
    </>
  );
};

export default Footers;
