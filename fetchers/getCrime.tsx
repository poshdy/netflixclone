import { removeNullImgs } from "@/lib/removeNullImg";

const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;
export const getCrime = async () => {
  const res = await fetch(
    `${process.env.NEXT_API_KEY_BASE_URL}discover/movie?with_genres=80`,
    {
      method: "GET",
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
  const data = removeNullImgs(allData.results);
  return data;
};
