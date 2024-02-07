import React from "react";
import HeroImage from "/assets/desktop/image-hero.jpg";
import RightArrow from "/assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="upperCase header">
          Modern <br></br> Art Gallery
        </h1>
        <img className="heroImage" src={HeroImage} alt="people at museum" />

        <div className="heroDescription">
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link to={`/location`} className="locationText">
            <button className="button upperCase buttonContainer">
              <div className="locationContainer">
                <div className="location">Our location</div>
              </div>
              <div className="arrowBox">
                <img className="arrow" src={RightArrow} alt="arrow" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
