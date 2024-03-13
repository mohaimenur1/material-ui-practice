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
import QRCode from "react-qr-code";

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

export default async function UserTable() {
  const rows = await allUsers();

  const qrCodeData = rows.map((qrData) => qrData);

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
            <TableCell sx={{ fontWeight: "bold" }}>SL</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Photo</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Student Info</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Guardian Details</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>QR</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left" component="th" scope="row">
                <Box sx={{ display: "flex" }}>
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginLeft: "20px",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        width: "25px",
                        height: "25px",
                        textAlign: "center",
                        borderRadius: "50%",
                        background: "#bbb",
                      }}
                    >
                      P
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        width: "25px",
                        height: "25px",
                        textAlign: "center",
                        borderRadius: "50%",
                        background: "#bbb",
                      }}
                    >
                      P
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        width: "25px",
                        height: "25px",
                        textAlign: "center",
                        borderRadius: "50%",
                        background: "#bbb",
                      }}
                    >
                      P
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell component="th">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">{row.name}</Typography>
                  <Typography variant="subtitle1">{row.email}</Typography>
                  <Typography variant="subtitle1">{row.phone}</Typography>
                  <Typography variant="subtitle1">{row.company}</Typography>
                  <Typography variant="subtitle1">{row.website}</Typography>
                </Box>
              </TableCell>
              <TableCell component="th">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="subtitle1">{row.name}</Typography>
                  <Typography variant="subtitle1">{row.email}</Typography>
                  <Typography variant="subtitle1">{row.phone}</Typography>
                  <Typography variant="subtitle1">{row.company}</Typography>
                  <Typography variant="subtitle1">{row.website}</Typography>
                </Box>
              </TableCell>
              <TableCell component="th">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <QRCode
                    value={`Name: ${row.name}\nemail: ${row.email}\nphone: ${row.phone}`}
                    size="100"
                  />
                </Box>
              </TableCell>
              <TableCell align="right">
                <Link href={`/users/user-table/${row.id}`}>
                  <FaEdit
                    //   onClick={() => handleIdCheck(row.id)}
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  ></FaEdit>{" "}
                </Link>
                <MdDeleteForever style={{ width: "20px", height: "20px" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
