import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import schema from "./schema";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 404 });
  }

  const validation = schema.safeParse(body);
  const createUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  //validation
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  }
  return NextResponse.json(createUser);
}
