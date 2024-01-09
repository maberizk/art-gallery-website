import React from "react";
import HeroImage from "/assets/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="upperCase header">
          Modern <br></br> Art Gallery
        </h1>
        <img className="heroImage" src={HeroImage} />

        <div className="heroDescription">
          <p>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <button>Our location</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
