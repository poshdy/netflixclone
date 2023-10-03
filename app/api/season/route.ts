import { NextResponse } from "next/server";

const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const season = searchParams.get("season");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}tv/${id}/season/${season}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: ApiKey,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
