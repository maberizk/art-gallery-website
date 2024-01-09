import React from "react";
import GridImageOne from "/assets/desktop/image-grid-1.jpg";
import GridImageTwo from "/assets/desktop/image-grid-2.jpg";
import GridImageThree from "/assets/desktop/image-grid-3.jpg";

const ImageGrid = () => {
  return (
    <>
      <div className="gridOne">
        <img src={GridImageOne} alt="exhibition" />
        <div className="gridOneText">
          <h2 className="upperCase lineHeight" id="black">Your day at the gallery</h2>
          <p className="mediumBody">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </div>
      <div className="gridTwo">
        <img src={GridImageTwo} alt="bench at museum " />

        <div className="gridTwoRight">
          <img src={GridImageThree} alt="people at the museum" />

          <div className="gridTwoText">
            <h2 className="upperCase lineHeight">Come & Be Inspired</h2>
            <p className="mediumBody">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
