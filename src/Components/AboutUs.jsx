import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "5%",
      }}
    >
      <h2>About Us</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2%",
          width: "100%",
        }}
      >
        <h4>COMPANY INFO AND CONTACT</h4>
        <div style={{ width: "50%" }}>
          Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt
          Disney Company, is one of the world's most prominent character-based
          entertainment companies, built on a proven library of more than 8,000
          characters featured in a variety of media over seventy-five years.
          Marvel utilizes its character franchises in entertainment, licensing
          and publishing. For more information visit marvel.com. © 2023 MARVEL
        </div>
        <h4>Corporate Headquarters</h4>
        <p>
          Marvel Entertainment, LLC 1290 Avenue of the Americas New York, NY
          10104
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
