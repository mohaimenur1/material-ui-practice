import AllTodos from "@/component/AllTodos";
import InputFileUpload from "@/component/InputFileUpload";
import { Box, Typography } from "@mui/material";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import DayPicker from "@/component/DayPicker";

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* test */}
      <Typography variant="h3" sx={{ textAlign: "center", mt: "30px" }}>
        {/* session for getting the users data to enableing the authentication process */}
        Hello {session && session.user?.name}
        hello {session && session.user?.email}
      </Typography>
      <DayPicker />
      {/* 2nd */}

      {/* <Box sx={{ mt: "10rem" }}>
        <AllTodos />
        <InputFileUpload />
      </Box> */}
    </>
  );
}
