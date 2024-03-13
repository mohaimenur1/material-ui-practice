import { NextResponse } from "next/server";
import schema from "./schema";

const productsData = [
  {
    id: 1,
    name: "Milk",
    price: 2.5,
  },
  {
    id: 2,
    name: "Bread",
    price: 2.5,
  },
  {
    id: 1,
    name: "Jelly",
    price: 3.5,
  },
];

export const GET = async (request) => {
  return NextResponse.json(productsData);
};

export async function POST(request) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "name is required" }, { status: 404 });
  }

  const validation = schema.safeParse(body);
  //validation
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues },
      { status: 400 }
    );
  }
  return NextResponse.json({ id: 5, name: body.name, price: body.price });
}
