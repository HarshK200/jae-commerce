import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import db from "@/db";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, password } = await req.json();
  const hashedPassword = await hash(password, 10);

  // NOTE: ZOD validation on user sent data
  const userSchema = z.object({
    firstname: z.string().min(3).max(15),
    lastname: z.string().min(3).max(15),
    email: z.string().email(),
    password: z.string().min(8),
  });
  const reqUser = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword,
  };
  const validatedUser = userSchema.safeParse(reqUser);
  if (!validatedUser.success) {
    return NextResponse.json(
      {
        error: validatedUser.error,
      },
      { status: 422 },
    );
  }

  try {
    const user = await db.user.create({
      data: reqUser,
    });

    return NextResponse.json(
      {
        status: "success",
        user: user,
      },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        status: "failed",
        error: "internal server error",
      },
      { status: 500 },
    );
  }
}
