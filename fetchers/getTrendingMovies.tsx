const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;

export const getTrendingMovies = async (Type: string) => {
  const res = await fetch(
    `${process.env.NEXT_API_KEY_BASE_URL}trending/${Type}/day`,
    {
      headers: {
        accept: "application/json",
        Authorization: ApiKey,
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetc data");
  }

  const allData = await res.json();
  const data = allData.results;
  return data;
};
