import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";
import { prisma as db } from "@/db";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, password, isSeller } = await req.json();
  const hashedPassword = await hash(password, 10);

  // TODO: write seller registration logic
  if (isSeller) {
  }

  // NOTE: ZOD validation on user sent data
  const userSchema = z.object({
    firstname: z.string().min(3).max(15),
    lastname: z.string().min(3).max(15),
    email: z.string().email(),
    password: z.string().min(8),
    isSeller: z.boolean(),
  });
  const reqUser = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashedPassword,
    isSeller: isSeller,
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
    const dbUser = await db.user.create({
      data: reqUser,
    });

    return NextResponse.json(
      {
        status: "success",
        user: {
          id: dbUser.id,
          email: dbUser.email,
        },
      },
      { status: 201 },
    );
  } catch (err: any) {
    console.log("error", err);

    let errMsg: string, statusCode: number;

    switch (err.code) {
      case "P2002":
        errMsg = "Email already registered";
        statusCode = 422;
        break;
      default:
        errMsg = "Internal server error";
        statusCode = 500;
    }

    return NextResponse.json(
      {
        status: "failed",
        error: errMsg,
      },
      { status: statusCode },
    );
  }
}
