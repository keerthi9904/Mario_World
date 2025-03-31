import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./load.css";
import MImage from "./assets/mario-m.png";

const Load = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/main"); // Replace with your actual target route
    }, 1000); // Adjust delay as needed
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-circle">
        <img src={MImage} alt="M" className="m-image" />
      </div>
    </div>
  );
};

export default Load;
