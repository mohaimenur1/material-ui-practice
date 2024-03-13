import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

// Inspired by the former Facebook spinners.
export default function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        // variant="determinate"
        sx={{
          color: "#989898",
        }}
        size={100}
        thickness={10}
        // {...props}
        value={100}
      />
      <CircularProgress
        // variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          // animationDuration: '550ms',
          position: "absolute",
          left: 0,
          // [`& .${circularProgressClasses.circle}`]: {
          //   strokeLinecap: 'round',
          // },
        }}
        size={100}
        thickness={10}
        // {...props}
      />
    </Box>
  );
}
