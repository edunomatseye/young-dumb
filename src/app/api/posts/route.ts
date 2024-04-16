const abortController = new AbortController();
export async function GET(request: Request): Promise<Response> {
  const signal = abortController.signal;
  const response = await fetch("https://api.github.com/users/edunomatseye", {
    signal,
  });
  const data = await response.json();
  return Response.json({ data });
}
