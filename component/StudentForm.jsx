"use client";
import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import Avatar from "@mui/material/Avatar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

// schema validation
const personalInfoSchema = yup.object().shape({
  first_name: yup.string().required("This field may not be blank."),
  last_name: yup.string().required("This field may not be blank."),
  //   gender: yup.string().required("This field may not be blank."),
  email: yup.string().email().required("This field may not be blank."),
  //   dob: yup.date().required("This field may not be blank."),
  mobile_no: yup.string().required("This field may not be blank."),
  //   religion: yup.string().required("This field may not be blank."),
  //   admission_date: yup.string().required("This field may not be blank."),
  //   blood_group: yup.string().required("This field may not be blank."),
  //   present_address: yup.string().required("This field may not be blank."),
  //   permanent_address: yup.string().required("This field may not be blank."),
});

const StudentForm = () => {
  const [age, setAge] = React.useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile(event.target.result);
      };
      reader.readAsDataURL(file);
      setSelectedFileName(file.name);
    } else {
      alert("Please select a valid image file.");
      setSelectedFileName("");
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalInfoSchema),
  });

  return (
    <Paper sx={{ padding: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "3px" }}>
                <Typography sx={{ ml: "15px" }}>Frist Name</Typography>
                <Typography sx={{ color: "#786CF1", fontSize: "20px" }}>
                  *
                </Typography>
              </Box>
              <Controller
                name="first_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    error={!!error}
                    label="First Name"
                    helperText={error?.message}
                    fullWidth
                    size="small"
                    placeholder="Type Here"
                  ></TextField>
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "3px" }}>
                <Typography sx={{ ml: "15px" }}>Last Name</Typography>
                <Typography sx={{ color: "#786CF1", fontSize: "20px" }}>
                  *
                </Typography>
              </Box>
              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    error={!!error}
                    label="Write Last Name"
                    helperText={error?.message}
                    fullWidth
                    size="small"
                    placeholder="Type Here"
                  ></TextField>
                )}
              />
            </Box>
          </Grid>

          {/* email address */}
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "3px" }}>
                <Typography sx={{ ml: "15px" }}>Email</Typography>
                <Typography sx={{ color: "#786CF1", fontSize: "20px" }}>
                  *
                </Typography>
              </Box>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    error={!!error}
                    label="Write Email Address"
                    helperText={error?.message}
                    fullWidth
                    size="small"
                    placeholder="Type Here"
                  ></TextField>
                )}
              />
            </Box>
          </Grid>

          {/* mobile no */}
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "3px" }}>
                <Typography sx={{ ml: "15px" }}>Mobile No</Typography>
                <Typography sx={{ color: "#786CF1", fontSize: "20px" }}>
                  *
                </Typography>
              </Box>
              <Controller
                name="mobile_no"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    error={!!error}
                    label="Write Mobile Number"
                    helperText={error?.message}
                    fullWidth
                    size="small"
                    placeholder="Type Here"
                  ></TextField>
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default StudentForm;
