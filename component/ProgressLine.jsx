"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressLine = ({ progress }) => {
  return (
    <div>
      <ProgressBar completed={progress} />
    </div>
  );
};

export default ProgressLine;
