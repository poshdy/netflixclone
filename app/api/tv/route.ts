import { removeNullImgs } from "@/lib/removeNullImg";
import { NextRequest, NextResponse } from "next/server";
const ApiKey = process.env.NEXT_PUBLIC_API_KEY as string;
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const genreId = searchParams.get("genreId");
  const page = searchParams.get("page");

  const res = await fetch(
    `${process.env.NEXT_API_KEY_BASE_URL}discover/tv?with_genres=${genreId}&page=${page}`,
    {
      headers: {
        accept: "application/json",
        Authorization: ApiKey,
      },
    }
  );
  const data = await res.json();
  const finalData = removeNullImgs(data?.results);

  return NextResponse.json(finalData);
}
