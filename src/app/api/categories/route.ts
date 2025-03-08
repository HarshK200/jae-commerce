import { prisma as db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryParams = {
      all_cats: Boolean(searchParams.get("all_cats")),
      parent_cat_id: searchParams.get("parent_cat_id"),
    };
    console.log(queryParams);

    if (queryParams.all_cats) {
      const categories = await db.category.findMany({});
      return NextResponse.json(
        {
          all_categories: categories,
        },
        { status: 200 },
      );
    }

    if (queryParams.parent_cat_id) {
      const sub_cats = await db.subCategory.findMany({
        where: {
          parent_cat_id: queryParams.parent_cat_id,
        },
      });

      return NextResponse.json(
        {
          sub_categories: sub_cats,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        error:
          "No filter specified. To fetch categories please provied query param like all_cats=true",
      },
      {
        status: 422,
      },
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 },
    );
  }
}
