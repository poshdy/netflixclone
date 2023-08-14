import { NextResponse } from "next/server";

const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const res = await fetch(`${process.env.BASE_URL}search/multi?query=${query}`, {
    method: "Get",
    headers: {
      accept: "application/json",
      Authorization: ApiKey,
    },
  });
  const data = await res.json();
  const finalData:MOVIE[] = data.results
  const filteredData =finalData.slice(0,8).filter((m)=>{
    return m.poster_path || m.backdrop_path !== null
  })
  


  return NextResponse.json(filteredData);
}
