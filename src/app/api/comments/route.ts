import { headers, cookies } from "next/headers";

export async function GET(_request: Request) {
  const headersList = headers();
  const cookiesList = cookies();
  const authorization = headersList.get("Authorization");
  return Response.json({
    date: new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }),
  });
}

export async function POST(_request: Request) {
  return Response.json({
    date: new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }),
  });
}
