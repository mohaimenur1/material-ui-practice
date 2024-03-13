import { NextResponse } from "next/server";

export function middleware(request) {
  // console.log(
  //   "next response:",
  //   NextResponse.redirect(new URL("/users", request.url))
  // );
  // console.log("request", request);
  // return NextResponse.redirect(new URL("/users/user-table", request.url));
}

export const config = {
  // matcher: ["/users/user-table"],
};

// import { withAuth } from "next-auth/middleware";

// export default withAuth() {
//   function middleware() {

//   }
// }
