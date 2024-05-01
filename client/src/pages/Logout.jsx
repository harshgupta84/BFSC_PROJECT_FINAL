import React, { useState, useEffect } from "react";

const Logout = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <button
        style={{
          backgroundColor: "Blue",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
