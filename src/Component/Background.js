import React from "react";

function Background() {
  return (
    <div
      style={{
        minHeight: "45vh",
        padding: "20px",
        backgroundColor: "#DEEDD6",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Order groceries for delivery or pickup today</h1>
      <p>Whatever you want from local stores, brought right to your door.</p>
    </div>
  );
}

export default Background;
