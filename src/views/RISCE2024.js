import React from "react";

const RISCE2024 = () => {
  console.log("RISCE2024 component rendered");
  
  React.useEffect(() => {
    console.log("RISCE2024 component mounted");
  }, []);
  
  return (
    <div style={{ padding: "100px 20px", textAlign: "center", minHeight: "100vh" }}>
      <h1>RISCE 2024 Page</h1>
      <p>International Civil Engineering Conference</p>
      <p>This page is working!</p>
      <a href="/" style={{ color: "blue" }}>Go back to Home</a>
    </div>
  );
};

export default RISCE2024;
