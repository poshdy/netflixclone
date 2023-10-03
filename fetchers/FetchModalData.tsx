const ApiKey: string = process.env.NEXT_PUBLIC_API_KEY as string;

export default async function fetchModalData(id: number | string | undefined) {
  const res = await fetch(`${process.env.NEXT_API_KEY_BASE_URL}movie/${id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: ApiKey,
    },
  });

  return res.json();
}
