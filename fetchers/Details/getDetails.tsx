const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;
export const getDetails = async (
  moiveid: string | number | undefined,
  Type: string | undefined 
) => {
  const res = await fetch(
    `${process.env.NEXT_API_KEY_BASE_URL}${Type}/${moiveid}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: ApiKey,
      },
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return await res.json();
};
