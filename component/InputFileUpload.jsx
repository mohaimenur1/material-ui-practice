"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useForm } from "react-hook-form";
import { Box } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const InputFileUpload = () => {
  const { control, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = React.useState(null);

  const onSubmit = (data) => {
    const dataToSend = new FormData();
    dataToSend.append("image", data.file);
    console.log("data to send", data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);

    if (file) {
      // Create a data URL for the selected file
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button
        type="submit"
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <Controller
          name="image"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <VisuallyHiddenInput
              type="file"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                handleFileChange(e);
              }}
            />
          )}
        />
      </Button>
      {imagePreview && <img src={imagePreview} alt="preview" />}
    </form>
  );
};

export default InputFileUpload;
