import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Image from "next/image";

const allUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const userImages = [
  { image: "https://randomuser.me/api/portraits/men/76.jpg" },
  { image: "https://randomuser.me/api/portraits/men/77.jpg" },
  { image: "https://randomuser.me/api/portraits/men/78.jpg" },
  { image: "https://randomuser.me/api/portraits/men/79.jpg" },
  { image: "https://randomuser.me/api/portraits/men/80.jpg" },
  { image: "https://randomuser.me/api/portraits/men/81.jpg" },
  { image: "https://randomuser.me/api/portraits/men/82.jpg" },
  { image: "https://randomuser.me/api/portraits/men/83.jpg" },
  { image: "https://randomuser.me/api/portraits/men/84.jpg" },
  { image: "https://randomuser.me/api/portraits/men/85.jpg" },
];

const im = userImages.map((image) => image.image);

export default async function GuardianDetailsTable() {
  const rows = await allUsers();

  function createData(id, photo, name, email, phone, company, website) {
    return { id, photo, name, email, phone, company, website };
  }

  const users = rows?.map((user) => {
    return createData(
      user.id,
      im,
      user.name,
      user.email,
      user.phone,
      user["company"].name,
      user.website
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell sx={{ fontWeight: "bold" }}></TableCell> */}
            {/* <TableCell sx={{ fontWeight: "bold" }}>Photo</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Student Info</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Guardian Details</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Actions
            </TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {users?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* guardian info */}
              <TableCell component="th" style={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    border: "1px solid #f2f2f2",
                    padding: ".59rem",
                  }}
                >
                  {/* details */}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                        width: "100%",
                        padding: "0.5rem",
                        display: "inline-block",
                      }}
                    >
                      First Guardian
                    </Typography>
                    <Typography variant="subtitle1">{row.name}</Typography>
                    <Typography variant="subtitle1">{row.email}</Typography>
                    <Typography variant="subtitle1">{row.phone}</Typography>
                    <Typography variant="subtitle1">{row.company}</Typography>
                    <Typography variant="subtitle1">{row.website}</Typography>
                  </Box>
                  {/* image */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={im[0]}
                      width={80}
                      height={100}
                      alt="Picture of the author"
                    ></Image>
                    <Typography
                      sx={{ textAlign: "left", marginTop: "10px" }}
                      variant="subtitle1"
                    >
                      ID: {row.id}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    border: "1px solid #f2f2f2",
                    padding: ".59rem",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{ backgroundColor: " #f2f2f2", fontWeight: "bold" }}
                    >
                      Second Guardian
                    </Box>
                    <Typography variant="subtitle1">{row.name}</Typography>
                    <Typography variant="subtitle1">{row.email}</Typography>
                    <Typography variant="subtitle1">{row.phone}</Typography>
                    <Typography variant="subtitle1">{row.company}</Typography>
                    <Typography variant="subtitle1">{row.website}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={im[0]}
                      width={80}
                      height={100}
                      alt="Picture of the author"
                    ></Image>
                    <Typography
                      sx={{ textAlign: "left", marginTop: "10px" }}
                      variant="subtitle1"
                    >
                      ID: {row.id}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    border: "1px solid #f2f2f2",
                    padding: ".59rem",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{ backgroundColor: " #f2f2f2", fontWeight: "bold" }}
                    >
                      Local Guardian
                    </Box>
                    <Typography variant="subtitle1">{row.name}</Typography>
                    <Typography variant="subtitle1">{row.email}</Typography>
                    <Typography variant="subtitle1">{row.phone}</Typography>
                    <Typography variant="subtitle1">{row.company}</Typography>
                    <Typography variant="subtitle1">{row.website}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={im[0]}
                      width={80}
                      height={100}
                      alt="Picture of the author"
                    ></Image>
                    <Typography
                      sx={{ textAlign: "left", marginTop: "10px" }}
                      variant="subtitle1"
                    >
                      ID: {row.id}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
