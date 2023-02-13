import React from "react";

function Loader() {
  return (
    <div
      style={{
        color: "red",
        fontSize: "60px",
        fontWeight: "bolder",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        height:"100vh"
      }}
    >
      <p>Loader...</p>
    </div>
  );
}

export default Loader;
