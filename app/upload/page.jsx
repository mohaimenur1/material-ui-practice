"use client";
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="v9hvugaf">
      {({ open }) => (
        <Button
          onClick={() => open()}
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          {/* <VisuallyHiddenInput type="file" /> */}
        </Button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
