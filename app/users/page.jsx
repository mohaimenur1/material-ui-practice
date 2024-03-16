import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button } from "@mui/material";

import { FaAward } from "react-icons/fa6";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TbMessage2Down } from "react-icons/tb";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import ProgressBar from "@ramonak/react-progress-bar";
import ProgressLine from "@/component/ProgressLine";
import CircularProgressBar from "@/component/CircularProgressBar";

export default function RecipeReviewCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} mt={2}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            height: "191px",
          }}
        >
          <Box>
            <CardHeader
              avatar={
                <Avatar
                  sx={{ height: "100px", width: "100px" }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="Class: 8, Section: B, Roll: 12"
            />
          </Box>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <span>Awards</span>
              <span>60+</span>
            </Box>
            <FaAward style={{ height: "1rem" }} />
          </Card>
        </Card>
      </Grid>
      <Grid item xs={6} mt={2}>
        <Card sx={{ padding: "1rem", height: "160px" }}>
          <Typography variant="h5">Notice Board</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography gutterBottom variant="h5" component="div">
              <TbMessage2Down />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Exam Preparation Notification! ( 03/01/2024)
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography gutterBottom variant="h5" component="div">
              <TbMessage2Down />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Exam Preparation Notification! ( 03/01/2024)
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography gutterBottom variant="h5" component="div">
              <TbMessage2Down />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Exam Preparation Notification! ( 03/01/2024)
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ padding: "1rem", height: "100%" }}>
          <Typography variant="h5">Class Routine</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography gutterBottom variant="body1" component="div">
              Saturday
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1st Period: Math (Room no:202)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              8:00 AM- 9:00PM
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" color="text.secondary">
              1st Period: Math (Room no:202)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              8:00 AM- 9:00PM
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body2" color="text.secondary">
              1st Period: Math (Room no:202)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              8:00 AM- 9:00PM
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography gutterBottom variant="body1" component="div">
              Tiffin Break
            </Typography>
            <Divider />
            <Typography variant="body2" color="text.secondary">
              4th Period: ICT
            </Typography>
            <Typography variant="body2" color="text.secondary">
              9:00AM- 1 0AM
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ padding: "1rem", height: "100%" }}>
          <Typography variant="h5">Attendance</Typography>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={6}>
              <Typography variant="h6">
                Dear Henderson, Your Attendance is 75% in the last month.
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  height: "100%",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  sx={{
                    color: "#989898",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  size={200}
                  thickness={10}
                  value={100}
                />
                <CircularProgress
                  disableShrink
                  variant="determinate"
                  sx={{
                    color: "#1a90ff",
                    position: "absolute",
                    left: 0,
                    "& .MuiCircularProgress-root": {
                      transition: "none",
                    },
                  }}
                  size={200}
                  thickness={10}
                  value={75}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                  >
                    {`75%`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>
              Dear Henderson, Your Attendance is 75% in the last month.
            </Typography>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                sx={{
                  color: "#989898",
                }}
                size={100}
                thickness={10}
                value={100}
              />
              <CircularProgress
                disableShrink
                variant="determinate"
                sx={{
                  color: "#1a90ff",
                  position: "absolute",
                  left: 0,
                  "& .MuiCircularProgress-root": {
                    transition: "none",
                  },
                }}
                size={100}
                thickness={10}
                value={75}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`75%`}
                </Typography>
              </Box>
            </Box>
          </Box> */}
        </Card>
      </Grid>
      {/* subject wise progress */}
      <Grid item xs={4}>
        <Card sx={{ padding: "1rem", height: "100%" }}>
          <Typography variant="h5">Subject wise progress</Typography>

          <Box
            sx={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
              }
            }
          >
            <Typography>Math</Typography>
            <ProgressLine progress={65} />
          </Box>
          <Box
            sx={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
              }
            }
          >
            <Typography>Bangla</Typography>
            <ProgressLine progress={85} />
          </Box>
          <Box
            sx={
              {
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
              }
            }
          >
            <Typography>English</Typography>
            <ProgressLine progress={45} />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
