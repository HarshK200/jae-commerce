import { prisma as db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const queryParams = {
      all_cats: Boolean(searchParams.get("all_cats")),
      category_id: searchParams.get("cat_id"),
      get_sub_cats: Boolean(searchParams.get("get_sub_cats")),
    };

    if (queryParams.all_cats) {
      const categories = await db.productCategory.findMany({});
      return NextResponse.json(
        {
          all_categories: categories,
        },
        { status: 200 },
      );
    }

    if (queryParams.category_id) {
      const category = await db.productCategory.findUnique({
        where: {
          id: queryParams.category_id,
        },
      });

      if (!category) {
        return NextResponse.json(
          {
            msg: "category not found",
          },
          { status: 404 },
        );
      }

      if (queryParams.get_sub_cats) {
        const sub_cats = await db.productCategory.findMany({
          where: {
            parent_category_id: queryParams.category_id,
          },
        });

        return NextResponse.json(
          {
            parent_category: category,
            sub_categories: sub_cats,
          },
          { status: 200 },
        );
      }

      return NextResponse.json({ category: category }, { status: 200 });
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
