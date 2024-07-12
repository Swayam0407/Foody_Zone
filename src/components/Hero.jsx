import React from "react";

function Hero({ children }) {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

export default Hero;
