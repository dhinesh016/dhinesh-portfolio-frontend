import React from "react";
import Mylogo from "./Mylogo";

const Loading = () => {
  return (
    <div className="loading">
      <Mylogo />
      <div className="load-box">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loading;
